import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const PORT = process.env.PORT || 3000;

// Configura Express
const app = express();

app.get("/", (req, res) => {
  res.send("Servidor WebSocket activo 🚀");
});

const httpServer = createServer(app);

// Configura Socket.IO con CORS explícito
const io = new Server(httpServer, {
  cors: {
    origin: "*", // Puedes especificar tu frontend aquí para mayor seguridad
    methods: ["GET", "POST"]
  }
});

// Evento de conexión
io.on("connection", (socket) => {
  console.log("Cliente conectado ✔️");

  socket.on("message", (arg) => {
    console.log("Mensaje recibido:", arg);
    // Puedes hacer algo con el mensaje aquí
  });
});

// Escucha en 0.0.0.0 y el puerto asignado por Render
httpServer.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});