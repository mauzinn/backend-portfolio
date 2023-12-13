import cors from 'cors'
import express from 'express'
import { Router } from './routes/router'
const server: express.Express = express()


//Configuration
    //Express parser
        server.use(express.json())

    //Cors
        server.use(cors({origin: 'https://frontend-portfolio-fawn.vercel.app'}))


//Router
    server.use(Router)










//Export
    export { server }