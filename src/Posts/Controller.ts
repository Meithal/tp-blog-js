import { Router, Request, Response } from "express";
import { Post } from "./Model";
import PostRepository from "./Repository";

const postController = Router();

postController.get('/', (req: Request, res: Response) => {
    res.status(200).send(PostRepository.getAll());
});

postController.get('/:id', (req: Request, res: Response) => {
    const post = req.body;

    res.status(204).send(post);
})

postController.post('/', (req: Request, res: Response) => {
    const body = req.body;
    console.log(body);

    const posted = PostRepository.createOne(body);

    if(posted === true) {
        res.status(204).json({response: body});
    }

    res.status(400).json({"res": "bad request", "errors": posted});
    
})


export default postController;