import { getLaunches } from "../helpers/api.helper";
import { Launch } from "../models/launch.model";

export default class MainHelper {
    public async insertData(): Promise<boolean> {
        return new Promise<boolean>(async (resolve) => {
            const l = Launch.countDocuments();
            const api = await getLaunches(`?offset=${l}`);
            console.log(api)
            for (let element of api.data.results) {
                const lc = new Launch(element);
                lc.save();
            };
            resolve(true);
        });
    };
};