import express from 'express'
const Router: express.Router = express.Router()
import { Email, Validation } from '../controllers'
import { createEmailSchema } from '../services/schemas'


//Router
    Router.post('/email/send', Validation.validationYUP(createEmailSchema), Email.Send)











//Export
    export { Router }