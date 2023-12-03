// OpenAI
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";
export const OPENAI_MODEL_VERSION = "gpt-3.5-turbo";

// DB
export const DB_HOST = process.env.DB_HOST || "";
export const DB_USER = process.env.DB_USER || "";
export const DB_PASSWORD = process.env.DB_PASSWORD || "";
export const DB_NAME = process.env.DB_NAME || "";
export const DB_SSL = process.env.DB_SSL == "true";

// Google Forms
export const GOOGLE_FORM_URL = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL || "";
