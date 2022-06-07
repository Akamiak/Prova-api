import 'dotenv/config'
import controller from'./controller/controller.js'
import cors from 'cors'
import express  from 'express'


 const Server = express(); 
 Server.use(cors()); 
 Server.use(express.json());
 Server.use(controller);


 Server.listen(process.env.PORT,() => console.log(`API CONECTADA COM SUCESSO NA PORTA ${process.env.PORT}`));