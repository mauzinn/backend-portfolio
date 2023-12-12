"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const express_1 = __importDefault(require("express"));
const Router = express_1.default.Router();
exports.Router = Router;
const controllers_1 = require("../controllers");
const schemas_1 = require("../services/schemas");
Router.post('/email/send', controllers_1.Validation.validationYUP(schemas_1.createEmailSchema), controllers_1.Email.Send);
