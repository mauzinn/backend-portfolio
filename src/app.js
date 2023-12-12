"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const server_1 = require("./server/server");
app.use(server_1.server);
app.listen(process.env.PORT, () => {
    console.log('✅ Server as listen in port: ' + process.env.PORT);
});
