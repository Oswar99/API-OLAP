import express, { Application, Response, Request } from "express";
import cors from "cors";
import mongoose from "mongoose";
import { resolve } from "path";
import { config } from "dotenv";
import { MainController } from "./controllers/main.controller";
config({ path: resolve(__dirname, "../.env") });

class App{
    public app: Application;
    public mc: MainController;
    constructor(){
        this.app = express();

        this.setConfig();
        this.setMongoConfig();
        this.setMiddleware();

        this.mc = new MainController(this.app);
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
        mongoose.Promise = global.Promise;

        mongoose.connect(process.env.MNG_URI!, {}, (err: any) => {
            if (err) {
                console.log(err.message);
            } else  {
                console.log("Base de datos Conectada!");
                
            }
        });
    };

}; 

export default new App().app;