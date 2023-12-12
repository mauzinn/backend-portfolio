import { RequestHandler } from 'express'
import * as yup from 'yup'
import { ContactMe } from '../../services/interfaces'


//Middleware
    //Verify YUP
        export const validationYUP = (Schema: yup.Schema<ContactMe>): RequestHandler => async(req, res, next) => {

            try {
                await Schema.validate(req.body)
                return next()
            } catch (error: any) {
                return res.status(400).json({
                    result: false,
                    error: error.message
                })
            }

        }