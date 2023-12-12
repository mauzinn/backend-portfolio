import { RequestHandler } from "express"
import { transport } from "../../services/transport"


//Middleware
    //Send email
        export const Send: RequestHandler = (req, res) => {
            const { email, name, message } = req.body

            transport.sendMail({
                from: `Portfolio contact <${process.env.USER}>`,
                to: process.env.OWNER_EMAIL,
                subject: email,
                html: `Nome: ${name},
                Email: ${email},
                Message: ${message}`
            }).then(() => {
                return res.status(201).json({
                    result: true
                })
            }).catch(() => {
                return res.status(500).json({
                    result: false,
                    error: "Erro no sistema."
                })
            })
        }