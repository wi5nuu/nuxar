import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyBsC33-8cj7YY6SRSZ9CfcAk09HkvgqlNQ";
const genAI = new GoogleGenerativeAI(apiKey);

async function test() {
    const candidates = ['gemini-3-flash-preview', 'gemini-flash-latest', 'gemini-2.0-flash-lite'];
    for (const modelId of candidates) {
        console.log(`Testing ${modelId}...`);
        try {
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/${modelId}:generateContent?key=${apiKey}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: "Hi" }] }]
                    })
                }
            );
            const data = await response.json();
            console.log(`Status ${modelId}:`, response.status);
            if (response.ok) {
                console.log(`Response ${modelId}:`, data.candidates?.[0]?.content?.parts?.[0]?.text);
                return; // SUCCESS
            } else {
                console.log(`Error ${modelId}:`, data.error?.message);
            }
        } catch (error) {
            console.error(`Fetch Error ${modelId}:`, error.message);
        }
    }
}

test();
