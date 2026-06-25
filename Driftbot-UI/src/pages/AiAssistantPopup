import React, { useState } from "react";

const AiAssistantPopup = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    alert(`You said: ${input}`);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close AI Assistant" : "Open AI Assistant"}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 56,
          height: 56,
          borderRadius: "50%",
          backgroundColor: "#FF530D",
          border: "none",
          boxShadow: "0 4px 12px rgba(255, 83, 13, 0.6)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10000,
        }}
      >
        {/* Chat icon (white) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
        </svg>
      </button>

      {/* Popup */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 90,
            right: 24,
            width: 320,
            backgroundColor: "#fff", // changed to white
            borderRadius: 12,
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
            color: "#222",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            display: "flex",
            flexDirection: "column",
            padding: 0,
            zIndex: 10000,
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 16px",
              borderBottom: "1px solid #ddd",
            }}
          >
            {/* Robot icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="#FF530D"
              viewBox="0 0 24 24"
              style={{ marginRight: 10 }}
            >
              <path d="M12 2a2 2 0 0 0-2 2v1H7.5A2.5 2.5 0 0 0 5 7.5v9A2.5 2.5 0 0 0 7.5 19H16a3 3 0 0 0 3-3V6a2 2 0 0 0-2-2h-3V4a2 2 0 0 0-2-2Zm-3 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
            </svg>
            <strong style={{ fontSize: 16 }}>Drift AI Assistant</strong>
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              style={{
                marginLeft: "auto",
                background: "transparent",
                border: "none",
                color: "#555",
                cursor: "pointer",
                fontSize: 22,
                fontWeight: "700",
                lineHeight: 1,
                padding: 0,
                userSelect: "none",
              }}
            >
              &times;
            </button>
          </div>

          {/* Message bubble */}
          <div
            style={{
              margin: 16,
              padding: 12,
              backgroundColor: "#f0f0f0",
              borderRadius: 14,
              fontSize: 14,
              lineHeight: 1.4,
              color: "#333",
            }}
          >
            Hey! Looking for something specific? I can help you find the perfect plan.
          </div>

          {/* Input area */}
          <div
            style={{
              display: "flex",
              padding: "0 16px 16px 16px",
              borderTop: "1px solid #ddd",
              alignItems: "center",
              gap: 8,
            }}
          >
            <input
              type="text"
              placeholder="Tell me about your needs..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              style={{
                flexGrow: 1,
                height: 38,
                borderRadius: 19,
                border: "1.5px solid #ccc",
                padding: "0 14px",
                fontSize: 14,
                backgroundColor: "#fff",
                color: "#222",
                outline: "none",
                marginTop:"10px"
              }}
            />
            <button
              onClick={handleSend}
              aria-label="Send"
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                backgroundColor: "#FF530D",
                border: "none",
                cursor: input.trim() ? "pointer" : "default",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity: input.trim() ? 1 : 0.5,
                transition: "opacity 0.2s",
                marginTop:"10px"
              }}
              disabled={!input.trim()}
            >
              {/* Fixed Send Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AiAssistantPopup;
