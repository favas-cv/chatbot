import React, { useState } from "react";
import "./chatbot.css";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  function handleSend() {
    if (input.trim() === "") return;

    const mymsg = [...messages, { sender: "user", text: input }];
    const botreply = getBotReply(input);
    mymsg.push({ sender: "robot", text: botreply });

    setMessages(mymsg);
    setInput("");
  }

  const getBotReply = (userinput) => {
    const txt = userinput.toLowerCase();
    if (txt.includes("hi") || txt.includes("hello"))
      return "Hi, I am here 🤖. How are you?";
    if (txt.includes("bye")) return "Goodbye 👋, take care!";
    return "I didn't understand that 😅";
  };

  function clear() {
    setMessages([]);
  }

  return (
    <div className="chatbot-container">
      <h2>React Chatbot</h2>

      <div className="chat-window">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.sender}`}>
            {msg.sender === "user" && <span className="logo">👤</span>}
            <div className="bubble">{msg.text}</div>
            {msg.sender === "robot" && <span className="logo">🤖</span>}
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
        <button onClick={clear}>Clear</button>
      </div>
    </div>
  );
}

export default Chatbot;
