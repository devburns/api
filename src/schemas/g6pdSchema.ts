import { z } from "zod"
import { Risco } from "../database/generated/prisma"

// Helper para transformar: "" ou null -> undefined
const emptyToUndefined = <T extends z.ZodTypeAny>(schema: T) =>
    z.preprocess((value) => {
        if (value === "" || value === null) return undefined
        return value
    }, schema.optional())

// Body base (Create)
const g6pdBodySchema = z.object({
    nome: z.string().min(2).max(150),
    composicao: z.string().min(2).max(150),
    categoriaId: z.number().int().positive(),
    classe: z.string().min(2).max(150),
    causa: z.string().min(2).max(2000),
    utilizacao: z.string().min(2).max(2000),
    risco: z.enum(Risco),
    confirma: z.string().optional()
})

// Create
export const g6pdCreateSchema = z.object({ body: g6pdBodySchema })

// Update Ignora "" e null - Permite campos parciais
const g6pdUpdateBodySchema = z.object({
    nome: emptyToUndefined(z.string().min(2).max(150)),
    composicao: emptyToUndefined(z.string().min(2).max(150)),
    categoriaId: emptyToUndefined(z.number().int().positive()),
    classe: emptyToUndefined(z.string().min(2).max(150)),
    causa: emptyToUndefined(z.string().min(2).max(2000)),
    utilizacao: emptyToUndefined(z.string().min(2).max(2000)),
    risco: emptyToUndefined(z.enum(Risco)),
    confirma: emptyToUndefined(z.string())
})

// Impede update vazio real
export const g6pdUpdateSchema = z.object({
    body: g6pdUpdateBodySchema.refine(
        (data) =>
            Object.values(data).some((value) => value !== undefined),
        {
            message: "Informe pelo menos um campo válido para atualização."
        }
    )
})

export const g6pdParamsSchema = z.object({
    params: z.object({
        id: z.uuid()
    })
})

export const g6pdStatusSchema = z.object({
    params: z.object({
        id: z.uuid()
    }),
    body: z.object({
        status: z.number({ message: "Status é obrigatório." })
            .int("Status deve ser inteiro.")
            .refine((val) => val === 0 || val === 1, {
                message: "Status deve ser 0 (inativo) ou 1 (ativo)."
            })
    })
})

export type G6pdCreateInput = z.infer<typeof g6pdCreateSchema>["body"]
export type G6pdUpdateInput = z.infer<typeof g6pdUpdateSchema>["body"]