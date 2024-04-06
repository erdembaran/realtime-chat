"use client";
import React from "react";

const Room = ({
  username,
  room,
  setUsername,
  setRoom,
  setChatPage,
  socket,
}) => {
  const joinRoom = () => {
    if (room === "") {
      alert("Please enter a room");
      return;
    } else {
      socket.emit("join_room", room);
      setChatPage(true);
    }
  };
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-1/3 h-[300px] rounded-lg bg-blue-700 flex flex-col space-y-4 p-3 ">
        <h1 className="text-center my-4 font-bold text-2xl">JOIN A ROOM</h1>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="h-12 rounded-xl p-3 outline-none"
          type="text"
          placeholder="Username"
        />
        <input
          value={room}
          onChange={(e) => setRoom(e.targetvalue)}
          className="h-12 rounded-xl p-3 outline-none"
          type="text"
          placeholder="Room"
        />
        <div
          onClick={joinRoom}
          className="text-white tracking-wider bg-blue-900 h-12 pt-2 text-xl text-center rounded-xl cursor-pointer hover:opacity-60"
        >
          JOIN
        </div>
      </div>
    </div>
  );
};

export default Room;
