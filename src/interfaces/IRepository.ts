import { ValidationErrorItem } from "joi";

export default interface Repository<T> {
    getAll(): T[];
    getOne(id: string): T | null;
    deleteOne(id: string): boolean;
    createOne(object: T): true | ValidationErrorItem[];
    updateOne(id: T): boolean;
}
