import {Application} from "express";
import { MainServices } from "../services/main.services";

export class MainController{
    
    private main_controller: MainServices;
    constructor(private app: Application){
        this.main_controller = new MainServices();
        this.routes();
    };

    private routes(){           
        this.app.route("/fill")
            .get(this.main_controller.fillData);
    };
};