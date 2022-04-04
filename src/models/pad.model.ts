import mongoose from "mongoose";
import { ILocation } from "./location.model";

export interface IPad{
    id: number,
    url: string,
    agency_id: number,
    name: string,
    map_url: string,
    latitude: number,
    longitude: number,
    location: ILocation,
    map_image: string,
    total_launch_count: number
};

const PadSchema: mongoose.Schema<IPad> = new mongoose.Schema({
    id: {type:Number, required:true},
    url: {type:String, required:true},
    agency_id: {type:Number, required:true},
    name: {type:String, required:true},
    map_url: {type:String, required:true},
    latitude: {type:Number, required:true},
    longitude: {type:Number, required:true},
    location: {type:{}, required:true},
    map_image: {type:String, required:true},
    total_launch_count: {type:Number, required:true}
});

export const Pad = mongoose.model("Pad", PadSchema);