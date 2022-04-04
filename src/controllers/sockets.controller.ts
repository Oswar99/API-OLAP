
class SocketsController{

    constructor(socket:any){
        this.sendMessage(socket);
        this.joinRoom(socket);
        this.disconnectServer(socket);
    };

    private joinRoom(socket:any){
        socket.on("join_room", (data:any) => {
            socket.join(data);
        });
    };

    private sendMessage(socket:any){
        socket.on("send_message", (data:any) => {
            socket.broadcast.to("100").emit("receive_message", data);
        });
    };

    private disconnectServer(socket:any){
        socket.on("disconnect", (rev:any)=>{
            socket.disconnect();
            console.log(rev, "El usuario se ha desconectado");
        });
    };

};

export default SocketsController;