import * as yup from 'yup'
import { ContactMe } from '../interfaces'


//Schemas
    //Create email
        export const createEmailSchema: yup.Schema<ContactMe> = yup.object().shape({
            email: yup.string().email().max(150).min(7).required(),
            name: yup.string().max(100).min(3).required(),
            message: yup.string().max(500).min(10).required()
        })