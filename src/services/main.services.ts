import { getLaunches } from "../helpers/api.helper";
import { Launch } from "../models/launch.model";

export default class MainServices{
    public async insertData(){
        const l = Launch.countDocuments();
        const api = await getLaunches(`?offset=${l}`);
        for(let element of api){
            const lc = new Launch(element);
            lc.save()
        };
    };
};