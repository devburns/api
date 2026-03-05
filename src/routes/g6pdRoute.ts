import { Router, Request, Response, NextFunction } from 'express'
import { asyncHandler } from "../middlewares/asyncHandler"
import { validate } from "../middlewares/validate"
import { z } from "zod"
import { G6pdController } from '../controllers/g6pdController'
import { g6pdCreateSchema, g6pdStatusSchema, g6pdUpdateSchema } from '../schemas/g6pdSchema'

const g6pdRoute = Router()

const querySchema = z.object({
    query: z.object({
        nome: z.string().optional()
    })
})

g6pdRoute.get('/', validate(querySchema), asyncHandler(G6pdController.findAll))

g6pdRoute.get('/:search', validate(querySchema), asyncHandler(G6pdController.findSearch))

g6pdRoute.post('/', validate(g6pdCreateSchema), asyncHandler(G6pdController.create))

g6pdRoute.put('/:id', validate(g6pdUpdateSchema), asyncHandler(G6pdController.update))

g6pdRoute.delete('/:id', asyncHandler(G6pdController.delete))

g6pdRoute.patch('/:id', validate(g6pdStatusSchema), G6pdController.patchStatus)

export default g6pdRoute
