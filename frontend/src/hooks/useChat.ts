import { useState, useCallback } from "react";
import type { Message } from "../types";

const API_URL = "http://localhost:8000/api/chat";

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hey! 👋 I'm Pragya's AI assistant. Ask me anything about her skills, projects, experience, or how to get in touch!",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(async (userMessage: string) => {
    if (!userMessage.trim() || isLoading) return;

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: userMessage },
    ];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          history: messages.slice(-6),
        }),
      });

      if (!response.ok) throw new Error("API error");
      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Oops, something went wrong! Please try again or reach out to Pragya directly at pragyahurmade2226@gmail.com",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [messages, isLoading]);

  return { messages, isLoading, sendMessage };
}