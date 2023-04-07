import { Router, Request, Response } from "express";
import { Post } from "./Model";
import PostRepository from "./Repository";

const postController = Router();

postController.get('/', (req: Request, res: Response) => {
    res.status(200).send(PostRepository.getAll());
});

postController.get('/:id', (req: Request, res: Response) => {
    const post = req.body;

    res.status(200).send(PostRepository.getOne(req.params.id));
})

postController.post('/', (req: Request, res: Response) => {
    const body = req.body;
    console.log(body);

    const posted = PostRepository.createOne(body);

    if(posted === true) {
        res.status(201).json({response: body});
        return;
    }

    res.status(400).json({"res": "bad request", "errors": posted});  
})

postController.post('/:id/vote_up', (req, res) => {
    const post = PostRepository.getOne(req.params.id);

    if(post === null) {
        res.status(404).json("post not found");
        return;
    }

    post.nb_rates_up++;

    const updated = PostRepository.updateOne(post);

    if(!updated) {
        res.status(404).json("post not found");
        return;
    } else {
        res.status(201).json(post);
    }
});

postController.post('/:id/vote_down', (req, res) => {
    const post = PostRepository.getOne(req.params.id);

    if(post === null) {
        res.status(404).json("post not found from get");
        return;
    }

    post.nb_rates_down++;

    const updated = PostRepository.updateOne(post);

    if(!updated) {
        res.status(404).json("post not found from update");
        return;
    } else {
        res.status(201).json(post);
    }
});


export default postController;