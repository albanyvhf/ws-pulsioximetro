import { createServer } from "http";
import { Server } from "socket.io";

const port = process.env.PORT || 3000

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*"
  }
})

io.on('connection', (socket) => {
    socket.on('message', (arg) => {
        console.log(arg)
    })
})

httpServer.listen(port, '0.0.0.0', () => {
  console.log(`Servidor activo en puerto ${port}`);
});
