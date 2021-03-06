import mongoose from "mongoose";
import { ILaunchServiceProvider } from "./launch_service_provider.model";
import { IPad } from "./pad.model";
import { IRocket } from "./rocket.model";

export interface ILaunch extends mongoose.Document{
    id: string,
    slug: string,
    name: string,
    last_updated: Date,
    window_end: Date,
    window_start: Date,
    failreason: string,
    status: {},
    launch_service_provider: ILaunchServiceProvider,
    rocket: IRocket,
    mission:{},
    pad:IPad,
    image: string,
};

const LaunchSchema = new mongoose.Schema({
    id: {type:String, required:true},
    slug: {type:String, required:true},
    name: {type:String, required:true},
    last_updated: {type:Date, required:false},
    window_end: {type:Date, required:false},
    window_start: {type:Date, required:false},
    failreason: {type:String, required:false},
    status: {type:{}, required:true},
    launch_service_provider: {type: {}, required:true},
    rocket: {type: {}, required:true},
    mission:{},
    pad: {type: {}, required:true},
    image: {type:String, required:false},
});

export const Launch = mongoose.model<ILaunch>("Launch", LaunchSchema);