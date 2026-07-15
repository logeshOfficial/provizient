/**
 * IP-based in-memory rate limiter.
 * Allows up to MAX_REQUESTS per IP within WINDOW_MS.
 *
 * Note: In-memory only — resets on cold-start / function restart.
 * For multi-instance deployments, replace with Redis.
 */

const MAX_REQUESTS = 5;
const WINDOW_MS = 5 * 60 * 1000; // 5 minutes

/** @type {Map<string, number[]>} ip → array of request timestamps */
const store = new Map();

/**
 * Check whether the given IP has exceeded the rate limit.
 * Records the current request if allowed.
 *
 * @param {string} ip
 * @returns {boolean} true if rate-limited (deny), false if allowed
 */
function isRateLimited(ip) {
  if (!ip) return false;

  const now = Date.now();
  const windowStart = now - WINDOW_MS;

  // Prune expired timestamps
  const timestamps = (store.get(ip) || []).filter((t) => t > windowStart);

  if (timestamps.length >= MAX_REQUESTS) {
    store.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  store.set(ip, timestamps);
  return false;
}

/**
 * Remove all entries older than WINDOW_MS.
 * Call periodically or after tests.
 */
function cleanup() {
  const windowStart = Date.now() - WINDOW_MS;
  for (const [ip, timestamps] of store.entries()) {
    const fresh = timestamps.filter((t) => t > windowStart);
    if (fresh.length === 0) {
      store.delete(ip);
    } else {
      store.set(ip, fresh);
    }
  }
}

/**
 * Clear all rate limit state — used in tests.
 */
function resetStore() {
  store.clear();
}

module.exports = { isRateLimited, cleanup, resetStore };
