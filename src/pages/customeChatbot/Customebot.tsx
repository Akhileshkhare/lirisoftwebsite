import React, { useState, useRef, useEffect } from "react";
import { styles } from "./customStyle";
import axios from "axios";
import { on } from "events";


type Message = {
  role: "user" | "assistant";
  content: string;
};

const initialMessages: Message[] = [
  { role: "assistant", content: "Hello! How can I help you today?" },
];

type CustomebotProps = {
  onClose?: () => void;
};

const Customebot: React.FC<CustomebotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const baseUrl = process.env.REACT_APP_API_URL;
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const inputValue = input.trim();

 const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    // Add a loading message immediately after user message
    const loadingMessage: Message = { role: "assistant", content: "..." };
    setMessages((prev) => [...prev, loadingMessage]);

    setInput("");
    // setLoading(true);

    try {
      const response = await axios.post(
        `${baseUrl}/chat/message`,
        {
          message: input,
        },
        {
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "X-API-Key": apiKey,
          },
        }
      );
      const botReply = response.data || "No response from bot.";
      console.log("Bot reply:", botReply);

      // Replace the loading message with the actual bot response
      setMessages((prev) =>
        prev.slice(0, -1).concat({ role: "assistant", content: botReply.response })
      );
    } catch (error) {
      console.error("Error sending message:", error);
      // Replace the loading message with an error message
      setMessages((prev) =>
        prev
          .slice(0, -1)
          .concat({ role: "assistant", content: "Error processing your request." })
      );
    } finally {
      setLoading(false);
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(e);
    }
  };

  const handleClear = () => setInput("");

  return (
    <div style={{
      ...styles.container,
      position: "fixed",
      bottom:-30,
      right: 20,
      height: 540,
      minHeight: 400,
      maxHeight: 600,
      display: "flex",
      flexDirection: "column",
      width: 420, // Ensure fixed width
      minWidth: 370,
      // maxWidth: "70vw",
      boxSizing: "border-box",
    }}>
      <div style={{ ...styles.header, position: "relative" }}>
        <div
        style={{
          maxWidth:"50%",
          width:"full",
          display:"flex",
          alignItems:"center",
          justifyItems:"between"
        }}
        >
          <span style={styles.logoBox}>
          <img src="/Logo.svg" alt="Logo" style={styles.logoImg} />
        </span>
        <span>Liri</span>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "50%",
              right: 16,
              transform: "translateY(-50%)",
              backgroundColor: "transparent",
              color: "#fff",
              width: 28,
              height: 28,
              borderRadius: "50%",
              border: "none",
              cursor: "pointer",
              zIndex: 101,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              padding: 0,
              
            }}
            aria-label="Close chat"
          >
            ✕
          </button>
        )}
      </div>
      <div
        style={{
          ...styles.messages,
          flex: 1,
          minHeight: 0,
          maxHeight: "calc(100% - 64px - 70px)", // header + input area
          overflowY: "auto",
        }}
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              ...(msg.role === "user" ? styles.userBubble : styles.botBubble),
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              overflowWrap: "break-word",
            }}
          >
            {msg.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form
        style={{
          padding: "5px 14px 16px 12px",
          background: "#fff",
          borderTop: "1px solid #eee",
          width: "100%",
          display: "flex",
          boxSizing: "border-box",
        }}
       onSubmit={ handleSend }
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end", // <-- changed from center to flex-end
            position: "relative",
            width: "100%",
            gap: 8,
            // boxSizing: "border-box",
          }}
        >
          <div style={{ flex: 1, position: "relative", minWidth: 0 }}>
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type a message..."
              rows={1}
              style={{
                width: "100%",
                minWidth: 0,
                borderRadius: 8,
                padding: "10px 20px 10px 10px",
                fontSize: 15,
                lineHeight: "1.3",
                resize: "none",
                outline: "none",
                background: "#f9f9f9",
                verticalAlign: "middle",
                color: "#222",
                marginRight: 8,
                minHeight: 40,
                maxHeight: 110,
                // Hide scrollbar for Webkit browsers
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none", // IE/Edge
              
              }}
              onKeyDown={handleKeyDown}
              ref={el => {
                if (el) {
                  el.style.height = "auto";
                  el.style.height = Math.min(el.scrollHeight, 110) + "px";
                  // Hide scrollbar for Webkit browsers
                  (el.style as any).scrollbarWidth = "none";
                  (el.style as any).msOverflowStyle = "none";
                }
              }}
              // Remove default scrollbar for Webkit browsers
              className="no-scrollbar"
            />
            <style>
              {`
                .no-scrollbar::-webkit-scrollbar {
                  display: none;
                }
                .no-scrollbar::placeholder {
                  color: #b0b0b0;
                  opacity: 1;
                  font-size: 15px;
                  font-style: italic;
                }
              `}
            </style>
            {/* Clear button */}
            {input && (
              <button
                type="button"
                onClick={handleClear}
                style={{
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  color: "#000",
                  cursor: "pointer",
                  padding: 0,
                  // fontSize: 14,
                  // lineHeight: 1,
                  // marginRight: 0,
                  // marginBottom: 4,
                  paddingRight: 8,
                  // width: 2,
                  // height: 2,
                }}
                aria-label="Clear"
                tabIndex={-1}
              >
                ✕
              </button>
            )}
            {/* Character count */}
            
          </div>
          {/* Send button */}
          <button
            type="submit"
            style={{
              background: inputValue === "" ? "#ccc" : "#043544",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "10px 18px",
              fontSize: 15,
              fontWeight: 500,
              // cursor: "pointer",
              width: 58,
              height: 40,
              alignSelf: "flex-end", // <-- changed from flex-start to flex-end
              marginTop: 0, // <-- remove marginTop
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: loading ? 0.5 : 1,
              cursor: inputValue === "" ? "not-allowed" : "pointer",
              transition: inputValue === "" ? "background-color 0.2s ease" : "none",
            }}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Customebot;