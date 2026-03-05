"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asyncHandler_1 = require("../middlewares/asyncHandler");
const validate_1 = require("../middlewares/validate");
const zod_1 = require("zod");
const g6pdController_1 = require("../controllers/g6pdController");
const g6pdSchema_1 = require("../schemas/g6pdSchema");
const g6pdRoute = (0, express_1.Router)();
const querySchema = zod_1.z.object({
    query: zod_1.z.object({
        nome: zod_1.z.string().optional()
    })
});
g6pdRoute.get('/', (0, validate_1.validate)(querySchema), (0, asyncHandler_1.asyncHandler)(g6pdController_1.G6pdController.findAll));
g6pdRoute.get('/:search', (0, validate_1.validate)(querySchema), (0, asyncHandler_1.asyncHandler)(g6pdController_1.G6pdController.findSearch));
g6pdRoute.post('/', (0, validate_1.validate)(g6pdSchema_1.g6pdCreateSchema), (0, asyncHandler_1.asyncHandler)(g6pdController_1.G6pdController.create));
g6pdRoute.put('/:id', (0, validate_1.validate)(g6pdSchema_1.g6pdUpdateSchema), (0, asyncHandler_1.asyncHandler)(g6pdController_1.G6pdController.update));
g6pdRoute.delete('/:id', (0, asyncHandler_1.asyncHandler)(g6pdController_1.G6pdController.delete));
g6pdRoute.patch('/:id', (0, validate_1.validate)(g6pdSchema_1.g6pdStatusSchema), g6pdController_1.G6pdController.patchStatus);
exports.default = g6pdRoute;
