import { ValidationErrorItem } from 'joi';
import { v4 as uuid } from "uuid";

import Repository from '../interfaces/IRepository';
import { User } from './Model';

class UsersRepository implements Repository<User> {

    users: User[] = [];

    getAll(): User[] {
        return this.users;
    }

    getOne(id: string): User | null {
        return this.users.find(p => p.id === id) || null;
    }

    getOneByUsername(username: string): User | null {
        return this.users.find(p => p.username === username) || null;
    }

    deleteOne(id: string): boolean {
        const index = this.users.findIndex(p => p.id === id);

        this.users = this.users.splice(index, 1);

        return index !== -1;
    }

    createOne(object: User): true | ValidationErrorItem[] {
        object.id = uuid();
        
        // const validationResult = PostValidationShema.validate(object);

        // if(validationResult.error) {
        //     return validationResult.error.details;
        // }

        this.users.push(object);

        return true;
    }

    updateOne(user: User): boolean {
        const index = this.users.findIndex(p => p.id === user.id);

        if(index === -1) {
            return false;
        }

        this.users[index] = user;

        return true;
    }

}

export default new UsersRepository();