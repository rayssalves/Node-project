import { getCustomRepository } from "typeorm"
import {TagsRepositories, TagsRepositories} from "../repositories/TagsRepositories";




class CreateTagService{
    
    async execute(name: string) {
        const TagsRepositories = getCustomRepository(TagsRepositories);

        if(!name){
            throw new Error("incorrect name!");
        }

        const tagAlreadyExists = await TagsRepositories.findOne({
            name
        });

        if(tagAlreadyExists){
            throw new Error("Tag already exists!");
        }

        const tag = TagsRepositories.create({
            name
        });
        
        await TagsRepositories.save(tag);

        return tag;
    } 
}

export {CreateTagService};