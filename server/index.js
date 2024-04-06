const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:8080",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("join_room", (data) => {
    socket.join(data);
  });

  socket.on("message", (data) => {
    socket.to(data.room).emit("receive_message");
  });
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
