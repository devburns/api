"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G6pdService = void 0;
const database_1 = require("../database");
const errorMiddleware_1 = require("../middlewares/errorMiddleware");
// Verifica se existe registro
async function ensureExists(id) {
    const record = await database_1.prisma.g6pd.findUnique({
        where: { id }
    });
    if (!record) {
        throw (0, errorMiddleware_1.createError)("Registro não encontrado.", 404);
    }
    return record;
}
class G6pdService {
    // Find All com include
    /*static async findAll() {
        const data = await prisma.g6pd.findMany({
            include: {
                categoria: {
                    select: {
                        nome: true
                    }
                }
            }
        })

        return data.map(({ categoria, categoriaId, ...rest }) => ({
            ...rest,
            categoriaDescricao: categoria?.nome ?? null
        }))
    }*/
    // Find All com select
    static async findAll() {
        const data = await database_1.prisma.g6pd.findMany({
            select: {
                id: true,
                nome: true,
                composicao: true,
                classe: true,
                causa: true,
                utilizacao: true,
                risco: true,
                categoria: {
                    select: {
                        nome: true
                    }
                },
            }
        });
        return data.map(({ categoria, ...rest }) => ({
            ...rest,
            categoriaDescricao: categoria?.nome ?? null
        }));
    }
    // busca pelo nome ou composicao
    static async findSearch(search) {
        const data = await database_1.prisma.g6pd.findMany({
            select: {
                id: true,
                nome: true,
                composicao: true,
                classe: true,
                causa: true,
                utilizacao: true,
                risco: true,
                categoria: {
                    select: {
                        nome: true
                    }
                },
            },
            where: {
                OR: [
                    { nome: { contains: search } },
                    { composicao: search },
                ],
            },
        });
        return data.map(({ categoria, ...rest }) => ({
            ...rest,
            categoriaDescricao: categoria?.nome ?? null
        }));
    }
    static async create(data) {
        return database_1.prisma.g6pd.create({
            data: {
                nome: data.nome,
                composicao: data.composicao,
                classe: data.classe,
                causa: data.causa,
                utilizacao: data.utilizacao,
                risco: data.risco,
                confirma: data.confirma,
                status: 1,
                userAt: 'ADMIN',
                categoria: {
                    connect: { id: data.categoriaId }
                }
            }
        });
    }
    static async update(id, data) {
        await ensureExists(id);
        const updateData = {
            ...(data.nome && { nome: data.nome }),
            ...(data.composicao && { composicao: data.composicao }),
            ...(data.classe && { classe: data.classe }),
            ...(data.causa && { causa: data.causa }),
            ...(data.utilizacao && { utilizacao: data.utilizacao }),
            ...(data.risco && { risco: data.risco }),
            ...(data.confirma && { confirma: data.confirma }),
            ...(data.categoriaId && {
                categoria: {
                    connect: { id: data.categoriaId }
                }
            })
        };
        return database_1.prisma.g6pd.update({
            where: { id },
            data: updateData
        });
    }
    static async delete(id) {
        await ensureExists(id);
        await database_1.prisma.g6pd.delete({
            where: { id }
        });
        return { message: "Registro removido com sucesso." };
    }
    static async patchStatus(id, status) {
        await ensureExists(id);
        return database_1.prisma.g6pd.update({
            where: { id },
            data: { status }
        });
    }
}
exports.G6pdService = G6pdService;
