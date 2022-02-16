import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import {compare} from "bcryptjs"
import {sign} from "jsonwebtoken"



interface IAuthenticateRequest{
    email:"string";
    password:"string";
}


class AuthenticateUserService {
    
    async execute({email, password} : IAuthenticateRequest) {
        const userRepositories = getCustomRepository(UsersRepositories)

        //verificar se email existe- verificar se senha esta correta- gerar token

        const user = await userRepositories.findOne({
            email
        });

        if (!user){
            throw new Error ("Email/Password incorret")
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("Email/Password Incorrect")
        }

        const token = sign({
            email: user.email
        },"bde61c548c6375534cf7db83a41a8021",{
            subject: user.id,
            expiresIn: "1d"
        }
     );

     return token;
    }
}

    export {AuthenticateUserService}