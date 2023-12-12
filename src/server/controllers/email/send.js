"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Send = void 0;
const transport_1 = require("../../services/transport");
const Send = (req, res) => {
    const { email, name, message } = req.body;
    transport_1.transport.sendMail({
        from: `Portfolio contact <${process.env.USER}>`,
        to: process.env.OWNER_EMAIL,
        subject: email,
        html: `Nome: ${name},
                Email: ${email},
                Message: ${message}`
    }).then(() => {
        return res.status(201).json({
            result: true
        });
    }).catch(() => {
        return res.status(500).json({
            result: false,
            error: "Erro no sistema."
        });
    });
};
exports.Send = Send;
