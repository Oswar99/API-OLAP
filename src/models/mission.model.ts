import mongoose from "mongoose";

export interface IMission{
    id: number,
    name: string,
    description: string,
    type: string,
    orbit: {
        id: number,
        name: string,
        abbrev: string
    }
};

const MissionSchema: mongoose.Schema<IMission> = new mongoose.Schema({
    id: {type: Number, required: true},
    name: {type:String, required: true},
    description: {type:String, required: true},
    type: {type:String, required: true},
    orbit: {type: {}, required: true},
});

export const Mission = mongoose.model("Mission", MissionSchema);