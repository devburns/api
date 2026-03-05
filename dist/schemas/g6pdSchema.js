"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.g6pdStatusSchema = exports.g6pdParamsSchema = exports.g6pdUpdateSchema = exports.g6pdCreateSchema = void 0;
const zod_1 = require("zod");
const prisma_1 = require("../database/generated/prisma");
// Helper para transformar: "" ou null -> undefined
const emptyToUndefined = (schema) => zod_1.z.preprocess((value) => {
    if (value === "" || value === null)
        return undefined;
    return value;
}, schema.optional());
// Body base (Create)
const g6pdBodySchema = zod_1.z.object({
    nome: zod_1.z.string().min(2).max(150),
    composicao: zod_1.z.string().min(2).max(150),
    categoriaId: zod_1.z.number().int().positive(),
    classe: zod_1.z.string().min(2).max(150),
    causa: zod_1.z.string().min(2).max(2000),
    utilizacao: zod_1.z.string().min(2).max(2000),
    risco: zod_1.z.enum(prisma_1.Risco),
    confirma: zod_1.z.string().optional()
});
// Create
exports.g6pdCreateSchema = zod_1.z.object({ body: g6pdBodySchema });
// Update Ignora "" e null - Permite campos parciais
const g6pdUpdateBodySchema = zod_1.z.object({
    nome: emptyToUndefined(zod_1.z.string().min(2).max(150)),
    composicao: emptyToUndefined(zod_1.z.string().min(2).max(150)),
    categoriaId: emptyToUndefined(zod_1.z.number().int().positive()),
    classe: emptyToUndefined(zod_1.z.string().min(2).max(150)),
    causa: emptyToUndefined(zod_1.z.string().min(2).max(2000)),
    utilizacao: emptyToUndefined(zod_1.z.string().min(2).max(2000)),
    risco: emptyToUndefined(zod_1.z.enum(prisma_1.Risco)),
    confirma: emptyToUndefined(zod_1.z.string())
});
// Impede update vazio real
exports.g6pdUpdateSchema = zod_1.z.object({
    body: g6pdUpdateBodySchema.refine((data) => Object.values(data).some((value) => value !== undefined), {
        message: "Informe pelo menos um campo válido para atualização."
    })
});
exports.g6pdParamsSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.uuid()
    })
});
exports.g6pdStatusSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.uuid()
    }),
    body: zod_1.z.object({
        status: zod_1.z.number({ message: "Status é obrigatório." })
            .int("Status deve ser inteiro.")
            .refine((val) => val === 0 || val === 1, {
            message: "Status deve ser 0 (inativo) ou 1 (ativo)."
        })
    })
});
