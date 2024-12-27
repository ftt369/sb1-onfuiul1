export const env = {
  GROK_API_KEY: import.meta.env.VITE_GROK_API_KEY as string,
  NODE_ENV: import.meta.env.MODE,
  IS_DEV: import.meta.env.DEV,
};