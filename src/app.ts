import express, { Application, Response, Request } from "express";
import cors from "cors";

class App{
    public app: Application;

    constructor(){
        this.app = express();

        this.setConfig();
        this.setMongoConfig();
        this.setMiddleware();
    };

    private setConfig(){
        this.app.use(cors());
        this.app.use(express.json({ limit: "50mb" }));
        this.app.use(express.urlencoded({ limit: "50mb", extended: true }));
    };

    private setMiddleware(){
        this.app.use((req:Request, res: Response, next) => {
            next();
        });
    };

    private setMongoConfig(){

    };

}; 

export default new App().app;