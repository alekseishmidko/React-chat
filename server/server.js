const express = require("express");
//
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
//
const rooms = new Map([]);
app.get("/users", (req, res) => {
  console.log("request on a server");
  res.json(rooms);
});
//
io.on("connection", (socket) => {
  console.log("socket connect", socket.id);
});
server.listen(9999, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log("server started");
});

// ["rooms", null],
// ["messages", []],
