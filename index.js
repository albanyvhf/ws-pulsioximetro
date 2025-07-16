import { createServer } from "http";
import { Server } from "socket.io";

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

httpServer.listen(3000)