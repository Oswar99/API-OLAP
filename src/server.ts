import app from "./app";
import SocketsController from "./controllers/sockets.controller";

const server = require("http").Server(app);

const io = require("socket.io")(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

io.on("connection", (socket:any) => {
    console.log("un usuario se ha conectado");
    const t: SocketsController = new SocketsController(socket);
});

server.listen(3009, () => {
    console.log(`Servidor corriendo en el puerto ${3009}`);
});