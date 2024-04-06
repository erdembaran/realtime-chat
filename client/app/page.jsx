"use client";
import Chat from "../app/components/chat/Chat";
import Room from "../app/components/room/Room";
import { io } from "socket.io-client";
import { React, useState } from "react";

const socket = io("http://localhost:3001");

export default function Page() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [chatPage, setChatPage] = useState(false);

  return (
    <div className="bg-neutral-800 h-screen">
      {!chatPage ? (
        <Room
          username={username}
          room={room}
          setUsername={setUsername}
          setRoom={setRoom}
          setChatPage={setChatPage}
          socket={socket}
        />
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}
