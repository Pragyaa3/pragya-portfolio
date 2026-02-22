import httpx
import os
from typing import List
from models.schemas import Message
from data.resume import RESUME_CONTEXT

OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions"
MODEL = "meta-llama/llama-3.1-8b-instruct:free"

async def get_chat_response(message: str, history: List[Message]) -> str:
    api_key = os.getenv("OPENROUTER_API_KEY")
    if not api_key:
        raise ValueError("OPENROUTER_API_KEY not set in environment")

    messages = [{"role": "system", "content": RESUME_CONTEXT}]

    for msg in history[-6:]:  # keep last 6 messages for context
        messages.append({"role": msg.role, "content": msg.content})

    messages.append({"role": "user", "content": message})

    async with httpx.AsyncClient(timeout=30.0) as client:
        response = await client.post(
            OPENROUTER_API_URL,
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json",
                "HTTP-Referer": "http://localhost:5173",
                "X-Title": "Pragya Portfolio"
            },
            json={
                "model": MODEL,
                "messages": messages,
                "max_tokens": 500,
                "temperature": 0.7
            }
        )
        response.raise_for_status()
        data = response.json()
        return data["choices"][0]["message"]["content"]