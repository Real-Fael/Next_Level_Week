import { getCustomRepository } from "typeorm"
import {TagsRepositories} from "../repositories/TagsRepositories"


class CreateTagService{

    async execute(name: string){
        
        const tagsRepositories = getCustomRepository(TagsRepositories)

        if(!name) {
            throw new Error("Incorrect name!");
        }

        //seleciona da tabela Tags
        const tagAlreadyExists= await tagsRepositories.findOne({
            name,
        })
        
        if (tagAlreadyExists){
            throw new Error("tag Already Exists");
        }

        const tag = tagsRepositories.create({
            name,
        })

        await tagsRepositories.save(tag);

        return tag
    }
}

export {CreateTagService}