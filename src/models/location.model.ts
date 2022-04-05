import mongoose from "mongoose";

export interface ILocation extends mongoose.Document{
    id: number,
    url: string,
    name: string,
    country_code: string,
    map_image: string,
    total_launch_count: number,
    total_landing_count: number
};

const LocationSchema = new mongoose.Schema({
    id: {type: Number, required: true},
    url: {type:String, required: false},
    name: {type:String, required: true},
    country_code: {type:String, required: true},
    map_image: {type:String, required: true},
    total_launch_count: {type: Number, required: true},
    total_landing_count: {type: Number, required: true}
});

export const Location = mongoose.model<ILocation>("Location", LocationSchema);