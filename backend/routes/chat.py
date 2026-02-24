from fastapi import APIRouter, HTTPException
from models.schemas import ChatRequest, ChatResponse
from services.openrouter import get_chat_response
from db.database import save_chat
import traceback

router = APIRouter()

@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    try:
        reply = await get_chat_response(request.message, request.history or [])
        save_chat(request.message, reply)
        return ChatResponse(reply=reply, success=True)
    except Exception as e:
        print("=== CHAT ERROR ===")
        print(traceback.format_exc())
        print("==================")
        raise HTTPException(status_code=500, detail=str(e))