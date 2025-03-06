import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";

const socket = io("http://localhost:3000"); // Ensure backend runs on port 3000

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-4">Live Chat</h2>

      {/* Chat Box */}
      <div className="h-60 w-96 overflow-y-auto p-2 border border-gray-600 rounded-md mb-2">
        {messages.map((msg, index) => (
          <div key={index} className={`text-sm ${msg.sender === "You" ? "text-blue-400" : "text-yellow-400"}`}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>

      {/* Message Input */}
      <form onSubmit={sendMessage} className="flex w-96">
        <input
          type="text"
          className="flex-1 p-2 rounded-lg bg-gray-700 text-white"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit" className="ml-2 bg-blue-500 px-4 py-2 rounded-lg text-white">Send</button>
      </form>

      {/* Back to Profile Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-4 bg-gray-700 px-4 py-2 rounded-lg text-white"
      >
        Back to Profile
      </button>
    </div>
  );
};

export default Chat;
