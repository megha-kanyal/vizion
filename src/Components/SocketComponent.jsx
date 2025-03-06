import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3000"); // Ensure this matches your backend

const SocketComponent = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("chat-message", (data) => {
      setMessages((prev) => [...prev, { text: data, sender: "Other" }]);
    });

    return () => socket.off("chat-message");
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages((prev) => [...prev, { text: message, sender: "You" }]);
      socket.emit("send-chat-message", message);
      setMessage("");
    }
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg w-full">
      <h2 className="text-xl font-bold mb-2">Live Chat</h2>
      <div className="h-60 overflow-y-auto p-2 border border-gray-600 rounded-md mb-2">
        {messages.map((msg, index) => (
          <div key={index} className={`text-sm ${msg.sender === "You" ? "text-blue-400" : "text-yellow-400"}`}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage} className="flex">
        <input
          type="text"
          className="flex-1 p-2 rounded-lg bg-gray-700 text-white"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit" className="ml-2 bg-blue-500 px-4 py-2 rounded-lg text-white">Send</button>
      </form>
    </div>
  );
};

export default SocketComponent;
