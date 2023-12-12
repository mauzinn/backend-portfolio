import cors from 'cors'
import express from 'express'
import { Router } from './routes/router'
const server: express.Express = express()


//Configuration
    //Express parser
        server.use(express.json())

    //Cors
        server.use(cors({origin: 'http://localhost:8080'}))


//Router
    server.use(Router)










//Export
    export { server }