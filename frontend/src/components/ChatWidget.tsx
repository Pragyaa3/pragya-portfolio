import { useState, useRef, useEffect } from "react";
import { useChat } from "../hooks/useChat";

const suggestedQuestions = [
  "What are Pragya's top skills?",
  "Tell me about VerdictXR",
  "What's her experience?",
  "How to contact Pragya?",
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, isLoading, sendMessage } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input.trim());
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat window */}
      <div
        className="chat-window fixed bottom-24 right-6 z-50 w-80 md:w-96 rounded-2xl overflow-hidden flex flex-col transition-all duration-500"
        style={{
          maxHeight: "520px",
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
          pointerEvents: isOpen ? "all" : "none",
          boxShadow: "0 25px 80px rgba(0,0,0,0.5), 0 0 40px rgba(192,132,252,0.1)",
        }}
      >
        {/* Header */}
        <div
          className="px-5 py-4 flex items-center justify-between"
          style={{
            background: "linear-gradient(135deg, rgba(192,132,252,0.15), rgba(244,114,182,0.1))",
            borderBottom: "1px solid rgba(192,132,252,0.15)",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-lg"
                style={{ background: "linear-gradient(135deg, var(--purple), var(--pink))" }}>
                🤖
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2"
                style={{ borderColor: "var(--surface)" }} />
            </div>
            <div>
              <p className="font-display font-semibold text-sm">Pragya's AI</p>
              <p className="font-mono text-xs" style={{ color: "var(--purple)" }}>Ask me anything</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ background: "rgba(255,255,255,0.05)", color: "var(--muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ maxHeight: "340px" }}>
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-xs rounded-2xl px-4 py-3 text-sm font-body leading-relaxed ${
                  msg.role === "user" ? "chat-message-user" : "chat-message-bot"
                }`}
                style={{
                  borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                }}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="chat-message-bot rounded-2xl px-4 py-3" style={{ borderRadius: "18px 18px 18px 4px" }}>
                <div className="flex gap-1.5 items-center">
                  <div className="typing-dot" />
                  <div className="typing-dot" />
                  <div className="typing-dot" />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions (show only at start) */}
        {messages.length === 1 && (
          <div className="px-4 pb-2 flex flex-wrap gap-1.5">
            {suggestedQuestions.map((q) => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="font-mono text-xs px-3 py-1.5 rounded-full transition-all duration-200"
                style={{
                  background: "rgba(192,132,252,0.08)",
                  border: "1px solid rgba(192,132,252,0.2)",
                  color: "var(--purple)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(192,132,252,0.15)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(192,132,252,0.08)")}
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div
          className="p-3 flex gap-2 items-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about Pragya..."
            className="flex-1 px-4 py-2.5 rounded-xl text-sm font-body outline-none transition-all duration-200"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "var(--text)",
            }}
            onFocus={(e) => (e.target.style.borderColor = "rgba(192,132,252,0.4)")}
            onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 flex-shrink-0"
            style={{
              background: input.trim() ? "linear-gradient(135deg, var(--purple), var(--pink))" : "rgba(255,255,255,0.05)",
              color: "white",
              opacity: isLoading ? 0.5 : 1,
            }}
          >
            ↑
          </button>
        </div>
      </div>

      {/* FAB Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-xl transition-all duration-300"
        style={{
          background: isOpen
            ? "rgba(19,19,26,0.95)"
            : "linear-gradient(135deg, var(--purple), var(--pink))",
          border: isOpen ? "1px solid rgba(192,132,252,0.3)" : "none",
          boxShadow: isOpen ? "0 0 20px rgba(192,132,252,0.2)" : "0 0 30px rgba(192,132,252,0.5), 0 8px 30px rgba(0,0,0,0.4)",
          transform: isOpen ? "rotate(0deg)" : "rotate(0deg)",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        aria-label="Toggle AI chat"
      >
        {isOpen ? "✕" : "💬"}
      </button>
    </>
  );
}