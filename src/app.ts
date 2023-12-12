require('dotenv').config()
import express from 'express'
const app: express.Express = express()
import { server } from './server/server'


//Server configuration
    app.use(server)










//Server
    app.listen(process.env.PORT, () => {
        console.log('✅ Server as listen in port: ' + process.env.PORT)
    })