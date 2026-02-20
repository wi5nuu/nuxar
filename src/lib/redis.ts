/**
 * Upstash Redis Client (REST-based)
 * Used for Phase 3 Performance Optimization: Traffic & Data Caching
 */

const REDIS_URL = import.meta.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN = import.meta.env.UPSTASH_REDIS_REST_TOKEN;

export const redis = {
    async get(key: string) {
        try {
            if (!REDIS_URL || !REDIS_TOKEN) return null;
            const response = await fetch(`${REDIS_URL}/get/${key}`, {
                headers: { Authorization: `Bearer ${REDIS_TOKEN}` },
            });
            const data = await response.json();
            return data.result ? JSON.parse(data.result) : null;
        } catch (error) {
            console.error('Redis Get Error:', error);
            return null;
        }
    },

    async set(key: string, value: any, ex?: number) {
        try {
            if (!REDIS_URL || !REDIS_TOKEN) return null;
            const body = JSON.stringify(value);
            let url = `${REDIS_URL}/set/${key}`;
            if (ex) url += `?EX=${ex}`;

            const response = await fetch(REDIS_URL, {
                method: 'POST',
                headers: { Authorization: `Bearer ${REDIS_TOKEN}` },
                body: JSON.stringify(['SET', key, body, 'EX', ex || 86400]),
            });
            return await response.json();
        } catch (error) {
            console.error('Redis Set Error:', error);
            return null;
        }
    },
};
