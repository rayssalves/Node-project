import {Request, Response, NextFunction} from "express"
// middleware precisam receber 3 parametros de dentro do express (request, response, nextfunction)



export function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    //verificar se urusario admin
    
    const admin = true;

    if(admin){
        return next();
    }
     return response.status(401).json({
         error: "Unauthorized"
         
     });