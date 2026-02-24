import httpx
import os
from typing import List
from models.schemas import Message
from data.resume import RESUME_CONTEXT

OPENROUTER_API_URL = "https://openrouter.ai/api/v1/chat/completions"

MODELS = [
    "mistralai/mistral-small-3.1-24b-instruct:free",
    "deepseek/deepseek-r1-0528:free",
    "qwen/qwen3-4b:free",
    "qwen/qwen3-next-80b-a3b-instruct:free",
    "nvidia/nemotron-nano-12b-v2-vl:free",
    "nvidia/nemotron-nano-9b-v2:free",
    "arcee-ai/trinity-mini:free",
    "liquid/lfm-2.5-1.2b-instruct:free",
    "stepfun/step-3.5-flash:free",
]

async def get_chat_response(message: str, history: List[Message]) -> str:
    api_key = os.getenv("OPENROUTER_API_KEY")
    if not api_key:
        raise ValueError("OPENROUTER_API_KEY not set in environment")

    messages = [{"role": "system", "content": RESUME_CONTEXT}]
    for msg in history[-6:]:
        messages.append({"role": msg.role, "content": msg.content})
    messages.append({"role": "user", "content": message})

    async with httpx.AsyncClient(timeout=25.0) as client:
        for model in MODELS:
            try:
                response = await client.post(
                    OPENROUTER_API_URL,
                    headers={
                        "Authorization": f"Bearer {api_key}",
                        "Content-Type": "application/json",
                        "HTTP-Referer": "http://localhost:5173",
                        "X-Title": "Pragya Portfolio"
                    },
                    json={
                        "model": model,
                        "messages": messages,
                        "max_tokens": 500,
                        "temperature": 0.7
                    }
                )
                print(f"Tried {model}: {response.status_code}")
                if response.status_code in [429, 400, 524, 500, 404]:
                    continue
                data = response.json()
                if "error" in data:
                    print(f"Model {model} returned error: {data['error']}")
                    continue
                content = (
                    data.get("choices", [{}])[0]
                    .get("message", {})
                    .get("content") or
                    data.get("choices", [{}])[0]
                    .get("message", {})
                    .get("reasoning") or
                    "Sorry, I couldn't parse the response."
                )
                return content
            except httpx.ReadTimeout:
                print(f"Model {model} timed out, trying next...")
                continue

    return "All models are currently rate limited. Please try again in a minute!"