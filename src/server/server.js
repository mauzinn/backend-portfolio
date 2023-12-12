"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const router_1 = require("./routes/router");
const server = (0, express_1.default)();
exports.server = server;
server.use(express_1.default.json());
server.use((0, cors_1.default)({ origin: 'http://localhost:8080' }));
server.use(router_1.Router);
