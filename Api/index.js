import 'dotenv/config'
import 'express/config'
import 'cors/config'


 const Server = express();
 
 Server.use(cors()); 
 Server.use(express.json());


 Server.listen(process.env.PORT,() => console.log('API CONECTADA COM SUCESSO NA PORTA ${process.env.PORT}'))