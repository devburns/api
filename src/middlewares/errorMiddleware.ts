import { Request, Response, NextFunction } from "express"
import { Prisma } from "../database/generated/prisma"
import { ZodError, z } from "zod"
import { errorResponse } from "./response"

class AppError extends Error {
    public readonly statusCode: number

    constructor(message: string, statusCode = 400) {
        super(message)
        this.statusCode = statusCode
        Error.captureStackTrace(this, this.constructor)
    }
}

// Middleware 404 automático (Deve ser registrado antes do errorMiddleware)
export function notFoundHandler(req: Request, res: Response, next: NextFunction) {
    next(new AppError(`Rota ${req.originalUrl} não encontrada`, 404))
}

// Middleware global de tratamento de erros
export function errorMiddleware(
    err: unknown,
    req: Request,
    res: Response,
    next: NextFunction
) {
    // Zod validation error
    if (err instanceof ZodError) {
        const formattedErrors = err.issues.map(issue => ({
            campo: issue.path.join("."),
            mensagem: issue.message
        }))

        // Loga apenas em desenvolvimento
        /*if (process.env.NODE_ENV === "development") {
            console.error("Validation error:", formattedErrors)
        }*/

        return res.status(400).json(
            errorResponse({
                message: "Erro de validação.",
                errors: formattedErrors
            })
        )
    }

    // Erro operacional
    if (err instanceof AppError) {
        return res.status(err.statusCode).json(
            errorResponse({ message: err.message })
        )
    }

    // Prisma erros conhecidos
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
        switch (err.code) {
            case "P2002":
                return res.status(409).json(
                    errorResponse({ message: "Registro duplicado." })
                )
            case "P2025":
                return res.status(404).json(
                    errorResponse({ message: "Registro não encontrado." })
                )
            default:
                return res.status(400).json(
                    errorResponse({ message: "Erro na operação do banco." })
                )
        }
    }

    // Prisma validação
    if (err instanceof Prisma.PrismaClientValidationError) {
        return res.status(400).json(
            errorResponse({ message: "Dados inválidos enviados ao banco." })
        )
    }

    // Fallback
    return res.status(500).json(
        errorResponse({ message: "Internal server error" })
    )
}

export function createError(message: string, statusCode = 400) {
    return new AppError(message, statusCode)
}