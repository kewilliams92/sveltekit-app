import type { HandleClientError } from "@sveltejs/kit"

export const handleError: HandleClientError = ({error, event}) => {
    console.log('from handleError', error)
    console.log('from handleError', event) //Send to sentry or any error logging service

    return {
        message: 'An unexpected error occurred',
        code: 'UNEXPECTED_ERROR'
    }
}