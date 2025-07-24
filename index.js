import express from "express";
import { createServer } from "node:http";
import path from "node:path";
import { Server } from "socket.io";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'))

app.get("/", (req, res) => {
  res.send("Servidor WebSocket activo 🚀");
});

app.get('/inicio', (req, res) => {
  res.sendFile(path.join(import.meta.dirname, 'public', 'index.html'))
})

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("Cliente conectado ✔️");

  socket.on("spo2", (arg) => {
    io.emit("spo2", arg)
  });
});

httpServer.listen(PORT, "192.168.0.4", () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});