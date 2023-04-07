import { NextFunction, Request, Response } from "express"
import { appendFileSync } from "fs"
import PostRepository from '../Posts/Repository';

const saveOnDiscEveryOperationMiddleware = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        next();
        appendFileSync(
            "./log.txt", 
            JSON.stringify(PostRepository.getAll()) + '\n'
        );
    }
}

export default saveOnDiscEveryOperationMiddleware;
