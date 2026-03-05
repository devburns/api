"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = notFoundHandler;
exports.errorMiddleware = errorMiddleware;
exports.createError = createError;
const prisma_1 = require("../database/generated/prisma");
const zod_1 = require("zod");
const response_1 = require("./response");
class AppError extends Error {
    constructor(message, statusCode = 400) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}
// Middleware 404 automático (Deve ser registrado antes do errorMiddleware)
function notFoundHandler(req, res, next) {
    next(new AppError(`Rota ${req.originalUrl} não encontrada`, 404));
}
// Middleware global de tratamento de erros
function errorMiddleware(err, req, res, next) {
    // Zod validation error
    if (err instanceof zod_1.ZodError) {
        const formattedErrors = err.issues.map(issue => ({
            campo: issue.path.join("."),
            mensagem: issue.message
        }));
        // Loga apenas em desenvolvimento
        /*if (process.env.NODE_ENV === "development") {
            console.error("Validation error:", formattedErrors)
        }*/
        return res.status(400).json((0, response_1.errorResponse)({
            message: "Erro de validação.",
            errors: formattedErrors
        }));
    }
    // Erro operacional
    if (err instanceof AppError) {
        return res.status(err.statusCode).json((0, response_1.errorResponse)({ message: err.message }));
    }
    // Prisma erros conhecidos
    if (err instanceof prisma_1.Prisma.PrismaClientKnownRequestError) {
        switch (err.code) {
            case "P2002":
                return res.status(409).json((0, response_1.errorResponse)({ message: "Registro duplicado." }));
            case "P2025":
                return res.status(404).json((0, response_1.errorResponse)({ message: "Registro não encontrado." }));
            default:
                return res.status(400).json((0, response_1.errorResponse)({ message: "Erro na operação do banco." }));
        }
    }
    // Prisma validação
    if (err instanceof prisma_1.Prisma.PrismaClientValidationError) {
        return res.status(400).json((0, response_1.errorResponse)({ message: "Dados inválidos enviados ao banco." }));
    }
    // Fallback
    return res.status(500).json((0, response_1.errorResponse)({ message: "Internal server error" }));
}
function createError(message, statusCode = 400) {
    return new AppError(message, statusCode);
}
