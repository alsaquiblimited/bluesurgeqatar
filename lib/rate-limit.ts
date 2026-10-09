/**
 * In-memory IP rate limiter to protect the contact route against flooding.
 */

interface RateLimitRecord {
  timestamps: number[];
}

const rateLimitMap = new Map<string, RateLimitRecord>();

// Clean up old entries every 5 minutes
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000;
let lastCleanup = Date.now();

function cleanupExpiredRecords(windowMs: number) {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) {
    return;
  }
  lastCleanup = now;

  const expirationThreshold = now - windowMs;
  for (const [ip, record] of rateLimitMap.entries()) {
    const validTimestamps = record.timestamps.filter((t) => t > expirationThreshold);
    if (validTimestamps.length === 0) {
      rateLimitMap.delete(ip);
    } else {
      record.timestamps = validTimestamps;
    }
  }
}

/**
 * Checks if a given IP has exceeded the allowed number of requests in the specified window.
 *
 * @param ip - Client identifier (IP address)
 * @param limit - Maximum allowed requests in the time window (default 5)
 * @param windowMs - Time window in milliseconds (default 10 minutes)
 * @returns { isAllowed: boolean, remaining: number, resetInSeconds: number }
 */
export function checkRateLimit(
  ip: string,
  limit: number = 5,
  windowMs: number = 10 * 60 * 1000
): { isAllowed: boolean; remaining: number; resetInSeconds: number } {
  cleanupExpiredRecords(windowMs);

  const now = Date.now();
  const threshold = now - windowMs;

  const record = rateLimitMap.get(ip) || { timestamps: [] };
  // Keep only timestamps within window
  const recentTimestamps = record.timestamps.filter((t) => t > threshold);

  if (recentTimestamps.length >= limit) {
    const oldest = recentTimestamps[0];
    const resetInSeconds = Math.max(1, Math.ceil((oldest + windowMs - now) / 1000));
    return {
      isAllowed: false,
      remaining: 0,
      resetInSeconds,
    };
  }

  recentTimestamps.push(now);
  rateLimitMap.set(ip, { timestamps: recentTimestamps });

  return {
    isAllowed: true,
    remaining: limit - recentTimestamps.length,
    resetInSeconds: Math.ceil(windowMs / 1000),
  };
}
