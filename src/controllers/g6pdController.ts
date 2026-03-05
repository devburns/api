import { Request, Response } from 'express'
import { G6pdService } from '../services/g6pdService'
import { successResponse } from "../middlewares/response"
import { G6pdCreateInput, G6pdUpdateInput } from '../schemas/g6pdSchema'

export class G6pdController {

    static async findAll(req: Request, res: Response) {
        const result = await G6pdService.findAll()
        return res.json(successResponse(result))
    }

    static async findSearch(req: Request<{ search: string }>, res: Response) {
        const { search } = req.params
        const result = await G6pdService.findSearch(search)
        return res.json(successResponse(result))
    }

    static async create(req: Request<unknown, unknown, G6pdCreateInput>, res: Response) {
        const result = await G6pdService.create(req.body)
        return res.status(201).json(successResponse(result))
    }

    static async update(req: Request<{ id: string }, unknown, G6pdUpdateInput>, res: Response) {
        const result = await G6pdService.update(req.params.id, req.body)
        return res.json(successResponse(result))
    }

    static async delete(req: Request<{ id: string }>, res: Response) {
        const result = await G6pdService.delete(req.params.id)
        return res.json(successResponse(result))
    }

    static async patchStatus(req: Request<{ id: string }>, res: Response) {
        const updated = await G6pdService.patchStatus(req.params.id, req.body.status)
        return res.status(200).json({
            message: "Status atualizado com sucesso.",
            data: updated
        })
    }
}