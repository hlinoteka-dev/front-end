import { Product } from '@/models/Product'
import { mongooseConnect } from "@/lib/mongoose"

export async function GET(request) {
	await mongooseConnect()
	const url = new URL(request.url)
	const sortBy = url.searchParams.get('sortBy')
	const page = url.searchParams.get('page')
	const filter = url.searchParams.get('filter')
	const tag = url.searchParams.get('tag')
	const author = url.searchParams.get('author')
	let products

	let query = Product.find() 

	const perPage = 12

	if (sortBy === 'author') {
		query = query.sort({ author: 1, _id: -1 })
	} else if (sortBy === 'top') {
		query = query.sort({ topProduct: -1, _id: -1 })
	} else {
		query = query.sort({ _id: -1 })
	}

	if (tag) {
		query = query.where('productTags').in([tag])
	}

	if (author && author !== 'Všichni') {
		query = query.where('author').in([author])
	}

	if (filter === 'random') {
		products = await Product.aggregate([{ '$sample': { 'size': 10 } }])
		return new Response(JSON.stringify(products, null, 2))
	}

	if (page) {
		query = query.skip((page - 1) * perPage).limit(perPage)
	}

	products = await query.exec()

	return new Response(JSON.stringify(products, null, 2))
}