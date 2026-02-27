import { useState } from "react";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 I’m your E-Learn Assistant. Ask me anything!" },
  ]);
  const [input, setInput] = useState("");

  const getBotReply = (question) => {
    const q = question.toLowerCase();

    if (q.includes("react"))
      return "React is a JavaScript library for building user interfaces. You can find React courses in the Courses section.";
    if (q.includes("javascript"))
      return "JavaScript is used to make websites interactive. We have a full JavaScript Mastery course.";
    if (q.includes("login"))
      return "Click on the Login button in the top-right to access your account.";
    if (q.includes("enroll"))
      return "Go to Courses, click View on a course, then click Enroll.";
    if (q.includes("courses"))
      return "We offer courses in React, JavaScript, Web Dev, Node.js, Python, MongoDB and more.";
    if (q.includes("certificate"))
      return "Currently this is a demo project, but certificates can be added in future.";
    if (q.includes("hello") || q.includes("hi") || q.includes("hey"))
      return "Hello! 😊 How can I help you today?";
    if (q.includes("bye"))
      return "Goodbye! 👋 Happy learning!";

    return "Sorry, I didn't understand that. Try asking about React, JavaScript, Courses, Login, or Enroll.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const botMsg = { sender: "bot", text: getBotReply(input) };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#38bdf8",
          color: "#09090b",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          fontSize: "24px",
          cursor: "pointer",
          boxShadow: "0 0 20px rgba(56,189,248,0.5)",
          zIndex: 9999,
        }}
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "300px",
            height: "400px",
            background: "#09090b",
            border: "1px solid #1e293b",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 0 30px rgba(56,189,248,0.3)",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              padding: "10px",
              borderBottom: "1px solid #1e293b",
              color: "#38bdf8",
              fontWeight: "bold",
            }}
          >
            🤖 E-Learn Assistant
          </div>

          <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  marginBottom: "8px",
                  textAlign: msg.sender === "user" ? "right" : "left",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    borderRadius: "10px",
                    background: msg.sender === "user" ? "#38bdf8" : "#1e293b",
                    color: msg.sender === "user" ? "#09090b" : "#fff",
                    maxWidth: "80%",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", borderTop: "1px solid #1e293b" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              style={{
                flex: 1,
                padding: "10px",
                border: "none",
                outline: "none",
                background: "#09090b",
                color: "#fff",
              }}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              style={{
                padding: "10px",
                border: "none",
                background: "#38bdf8",
                color: "#09090b",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;


