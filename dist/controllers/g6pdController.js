"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G6pdController = void 0;
const g6pdService_1 = require("../services/g6pdService");
const response_1 = require("../middlewares/response");
class G6pdController {
    static async findAll(req, res) {
        const result = await g6pdService_1.G6pdService.findAll();
        return res.json((0, response_1.successResponse)(result));
    }
    static async findSearch(req, res) {
        const { search } = req.params;
        const result = await g6pdService_1.G6pdService.findSearch(search);
        return res.json((0, response_1.successResponse)(result));
    }
    static async create(req, res) {
        const result = await g6pdService_1.G6pdService.create(req.body);
        return res.status(201).json((0, response_1.successResponse)(result));
    }
    static async update(req, res) {
        const result = await g6pdService_1.G6pdService.update(req.params.id, req.body);
        return res.json((0, response_1.successResponse)(result));
    }
    static async delete(req, res) {
        const result = await g6pdService_1.G6pdService.delete(req.params.id);
        return res.json((0, response_1.successResponse)(result));
    }
    static async patchStatus(req, res) {
        const updated = await g6pdService_1.G6pdService.patchStatus(req.params.id, req.body.status);
        return res.status(200).json({
            message: "Status atualizado com sucesso.",
            data: updated
        });
    }
}
exports.G6pdController = G6pdController;
