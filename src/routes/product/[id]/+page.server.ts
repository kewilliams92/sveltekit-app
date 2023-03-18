import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const products = await (await import('$lib/dummy-product.json')).default;
	const product = products.products.find((p) => p.id === +params.id);

	if (!product) {
		// throw redirect(301, '/products');
		throw error(404, { message: 'Product not found!', code: 'NOT_FOUND' });
	}

	return {
		product,
		title: product.title,
		description: product.description
	};
};