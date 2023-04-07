import Joi from "joi";

export interface User {
    id: string;
    username: string;
    password: string;
    roles: string[];
}

export interface UserLoginDTO {
    username: string;
    password: string;
}

export const UserLoginValidateSchema = Joi.object({
    username: Joi.string().required().uuid(),
    password: Joi.string().required()
})