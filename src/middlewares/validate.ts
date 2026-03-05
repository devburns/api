import { RequestHandler } from "express"
import { z } from "zod"

export function validate<T extends z.ZodTypeAny>(
    schema: T
): RequestHandler {
    return async (req, res, next) => {
        try {
            await schema.parseAsync({
                body: req.body,
                params: req.params,
                query: req.query
            })

            next()
        } catch (error) {
            next(error)
        }
    }
}