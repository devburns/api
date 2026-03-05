"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successResponse = successResponse;
exports.errorResponse = errorResponse;
function successResponse(data) {
    return {
        success: true,
        data,
        errors: null
    };
}
function errorResponse(errors) {
    return {
        success: false,
        data: null,
        errors
    };
}
