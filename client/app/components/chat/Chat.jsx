"use client";
import { React, useEffect, useState } from "react";

const Chat = ({ socket, username }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });
  });

  const sendMessage = async () => {
    if (message === "") {
      alert("Please enter a message");
      return;
    } else {
      const messageData = {
        username: username,
        message: message,
      };

      await socket.emit("message", messageData);
      setMessages((prev) => [...prev, messageData]);
      setMessage("");
    }
  };

  console.log(messages);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-1/3 h-[480px] bg-white relative">
        <div className="w-full h-16 bg-gray-800 flex items-center p-4">
          <div className="w-12 h-12 bg-white rounded-full"></div>
        </div>
        <div className="w-full h-[400px] overflow-y-auto">
          {messages
            ? messages.map((msg, index) => (
                <div
                  className={`${
                    username === msg.username ? "flex justify-end" : ""
                  }`}
                >
                  <div
                    className={`${
                      username === msg.username
                        ? "w-2/3 h-12 p-2 bg-green-600 text-white m-2 rounded-xl rounded-br-none"
                        : "w-2/3 h-12 p-2 bg-indigo-600 text-white m-2 rounded-xl rounded-bl-none"
                    }`}
                  >
                    <div>{msg.message}</div>
                    <div className="w-full flex justify-end text-xs">
                      {msg.username}
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-3/4 h-12 border p-3 outline-none"
            type="text"
            placeholder="message send"
          />
          <button
            onClick={sendMessage}
            className="w-1/4 bg-indigo-600 text-white h-12 hover:opacity-70"
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
