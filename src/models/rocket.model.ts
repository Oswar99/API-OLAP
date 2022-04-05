import mongoose from "mongoose";

export interface IRocket extends mongoose.Document {
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

const RocketSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    configuration: { type: {}, required: false },
});

export const Rocket = mongoose.model<IRocket>("Rocket", RocketSchema);