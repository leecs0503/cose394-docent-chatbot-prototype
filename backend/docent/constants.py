import os


OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")
assert OPENAI_API_KEY != "", "Before run, you must set OPENAI_API_KEY."

GPT_MODEL_VERSION = "gpt-3.5-turbo"
