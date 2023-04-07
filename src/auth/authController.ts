import { Router } from "express";
import { UserLoginValidateSchema } from "../Users/Model";
import UsersRepository from '../Users/Repository';


const authController = Router();

authController.post("/login", (req, res) => {
    const validation = UserLoginValidateSchema.validate(req.body);

    if(validation.error) {
        res.status(400).json({
            "status": "error",
            "errors": validation.error.details
        })
    }

    const payload = req.body;

    if (UsersRepository.getOneByUsername(payload.username)) {
        
    }
})

export default authController;