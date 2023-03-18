import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async ({
	fetch,
	depends,
	locals
}) => {
	console.log('/products load function', locals)
	const response = await fetch('/api/products');
	depends('app:productsServerLoad')
	if(response.ok){
		return {
			products: response.json()
		}
	}
	const errorJson = await response.json();
	throw error(response.status, errorJson.message);

};
