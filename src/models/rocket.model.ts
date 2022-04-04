import mongoose from "mongoose";

export interface IRocket {
    id: number,
    configuration: {
        id: number,
        url: string,
        name: string,
        family: string,
        full_name: string,
        variant: string
    }
};

const RocketSchema: mongoose.Schema<IRocket> = new mongoose.Schema({
    id: { type: Number, required: true },
    configuration: { type: {}, required: false },
});

export const Rocket = mongoose.model("Rocket", RocketSchema);