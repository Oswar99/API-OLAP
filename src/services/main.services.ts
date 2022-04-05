import { Request, Response } from "express";
import MainHelper from "../helpers/main.helper";

export class MainServices{

    public async fillData(req: Request, res: Response) {
        const ms = new MainHelper();
        ms.insertData().then(y=>{
            res.status(200).json({successed: true})
        });
    };

};