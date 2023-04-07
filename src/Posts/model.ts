import Joi from "joi";
import mongoose from "../services/mongooseService";
import { InferSchemaType } from "mongoose";

export interface Post {
    id: string;
    title: string;
    content: string;
    nb_rates_up: number;
    nb_rates_down: number;
}

export const PostValidationShema = Joi.object({
    id: Joi.string().required().uuid(),
    title: Joi.string().required(),
    content: Joi.string().required(),
    nb_rates_up: Joi.number().integer().positive().required(),
    nb_rates_down: Joi.number().integer().positive().required(),
});

// export const PostSchema = new mongoose.Schema<IPost>({
//     id: {type: String, required: true, unique: true},
//     title: {type: String, required: true},
//     content: {type: String, required: true},
//     nb_rates_up: {type: Number, required: true},
//     nb_rates_down: {type: Number, required: true},
// });

// export type Post = InferSchemaType<typeof PostSchema>;
// export const PostModel = mongoose.model('Post', PostSchema);
