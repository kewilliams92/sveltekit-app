import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async ({fetch, locals}) => {
    const response = await fetch('https://dummyjson.com/products')

    console.log(locals)

    if(response.ok){
        const products = await response.json();
        return json(products, {
            status: 200
        })
    }
    throw error(response.status, response.statusText)

    // return json(products, {
    //     status: 200
    // })
};

export const POST: RequestHandler = async ({request}) => {
    const product = await request.json();
    if(!product.title){
        throw error(400, 'Title is required');
    }
    return json({id: 1414, title: product.title});
};