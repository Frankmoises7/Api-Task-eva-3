"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = process.env.JWT_SECRET;
if (!secret) {
    throw new Error('JWT Secret nor found on env variabele');
}
function generateToken(user) {
    return jsonwebtoken_1.default.sign({ sub: user.id, email: user.email }, secret, { expiresIn: '7d' });
}
exports.generateToken = generateToken;
function verifyToken(token) {
    const verified = jsonwebtoken_1.default.verify(token, secret);
    return verified;
}
exports.verifyToken = verifyToken;
