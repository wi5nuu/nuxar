import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// 1. Create a new ratelimiter, that allows 5 requests per 10 seconds
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(5, "10 s"),
    analytics: true,
    prefix: "@upstash/ratelimit",
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // 1a. Rate Limiting Check
    // Using user's IP address for identifying client
    const identifier = req.headers['x-forwarded-for'] || '127.0.0.1';
    const { success, limit, reset, remaining } = await ratelimit.limit(
        identifier.toString()
    );

    res.setHeader('X-RateLimit-Limit', limit.toString());
    res.setHeader('X-RateLimit-Remaining', remaining.toString());
    res.setHeader('X-RateLimit-Reset', reset.toString());

    if (!success) {
        return res.status(429).json({
            error: 'Terlalu banyak permintaan (Rate Limit). Silakan coba lagi dalam beberapa saat.',
            retryAfter: reset
        });
    }

    // 1b. Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { contents, generationConfig } = req.body;

    // 2. Validate input
    if (!contents) {
        return res.status(400).json({ error: 'Missing contents' });
    }

    // 3. Get API Key from environment variable (Safe on server-side)
    const apiKey = process.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'AI Service Configuration Missing' });
    }

    try {
        // 4. Proxy the request to Google Generative AI
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents,
                    generationConfig,
                }),
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            return res.status(response.status).json(errorData);
        }

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        console.error('Gemini Proxy Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
