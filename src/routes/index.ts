import { Router, Request, Response, NextFunction } from "express"
import g6pdRoute from "./g6pdRoute"

const routes = Router()

routes.use('/', g6pdRoute)

export default routes
