import { ValidationErrorItem } from "joi";
import Repository from "../interfaces/IRepository";
import { Post, PostValidationShema } from "./Model";

class PostRepository implements Repository<Post> {

    posts: Post[] = [];

    getAll(): Post[] {
        return this.posts;
    }
    getOne(id: string): Post | null {
        return this.posts.find(p => p.id === id) || null;
    }
    deleteOne(id: string): boolean {
        const index = this.posts.findIndex(p => p.id === id);

        this.posts = this.posts.splice(index, 1);

        return index !== -1;
    }
    createOne(object: Post): true | ValidationErrorItem[] {
        
        const validationResult = PostValidationShema.validate(object);

        if(validationResult.error) {
            return validationResult.error.details;
        }

        return true;
    }
    
}

export default new PostRepository();