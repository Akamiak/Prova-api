import { ConsultarTodosHerois, InserirHeroi } from '../repository/repository'
import { Router } from 'express'
const server = Router();


server.post('/superheroi', async(req, resp) => {
    try{
        const  hero  = req.body;
    
        if(!hero.nome)
            throw new Error('Campo nome é obrigatório')
        if(!hero.super_poder)
            throw new Error('Campo super poder é obrigatório')
        if(hero.voa == undefined )
            throw new Error('Campo voa é obrigatório')

        const retornar = await InserirHeroi(hero);
        resp.status(200).send(retornar);
    }
    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



server.get('/Herois', async(req, resp) => {
    try{
        const resposta = await ConsultarTodosHerois();
            resp.status(200).send(resposta);
        }
    catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})

export default server;