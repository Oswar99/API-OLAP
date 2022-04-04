import mongoose from "mongoose";

export interface ILaunchServiceProvider{
    id: number,
    url: string,
    name: string,
    type: string
};

const LaunchSPSchema: mongoose.Schema<ILaunchServiceProvider> = new mongoose.Schema({
    id: {type: Number, required: true},
    url: {type:String, required: false},
    name: {type:String, required: true},
    type: {type:String, required: false}
});

export const LaunchSP = mongoose.model("LaunchSP", LaunchSPSchema);