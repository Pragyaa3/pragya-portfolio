import sqlite3
import os
from datetime import datetime

DB_PATH = "chat_history.db"

def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS chat_logs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_message TEXT NOT NULL,
            bot_reply TEXT NOT NULL,
            timestamp TEXT NOT NULL
        )
    """)
    conn.commit()
    conn.close()

def save_chat(user_message: str, bot_reply: str):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO chat_logs (user_message, bot_reply, timestamp) VALUES (?, ?, ?)",
        (user_message, bot_reply, datetime.utcnow().isoformat())
    )
    conn.commit()
    conn.close()