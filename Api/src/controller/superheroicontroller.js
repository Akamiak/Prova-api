import { ConsultarTodosHerois, InserirHeroi } from '../superheroirepository/repository'
import { Router } from 'express'
const server = Router();


server.post('/superheroi', async(req, resp) => {
    try{
        
        const heroi = req.body;
        const r = await InserirHeroi(heroi);
        resp.send(r);
    }
    catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



server.get('/Herois', async(req, resp) => {
    try{
        const r = await listarheroi();
        resp.send(r);
        
        }
    catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})

export default server;