export type ApiSuccess<T> = {
    success: true
    data: T
    errors: null
}

export type ApiError = {
    success: false
    data: null
    errors: unknown
}

export function successResponse<T>(data: T): ApiSuccess<T> {
    return {
        success: true,
        data,
        errors: null
    }
}

export function errorResponse(errors: unknown): ApiError {
    return {
        success: false,
        data: null,
        errors
    }
}