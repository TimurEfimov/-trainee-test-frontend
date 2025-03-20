import axios from "axios";

const cache: Record<string, { data: any; timestamp: number }> = {};
const CACHE_DURATION = 5 * 60 * 1000;

export const fetchWithCache = async (url: string, options: any) => {
  const cacheKey = JSON.stringify({ url, options });

  if (
    cache[cacheKey] &&
    Date.now() - cache[cacheKey].timestamp < CACHE_DURATION
  ) {
    return cache[cacheKey].data;
  }

  const response = await axios({
    method: "get",
    url,
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  cache[cacheKey] = {
    data: response.data,
    timestamp: Date.now(),
  };

  return response.data;
};
