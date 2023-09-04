import { Product } from '@/models/product'
import { mongooseConnect } from "@/lib/mongoose"

export async function GET(request) {
	await mongooseConnect()
	const url = new URL(request.url)
	const sortBy = url.searchParams.get('sortBy')
	const page = url.searchParams.get('page')
	const filter = url.searchParams.get('filter')
	let products

	let query = Product.find()

	const perPage = 6

	if (sortBy === 'author') {
		query = query.sort({ name: -1 })
	}

	if (filter === 'random') {
		products = await Product.aggregate([{ '$sample': { 'size': 10 } }])
		return new Response(JSON.stringify(products))
	}

	if (page) {
		query = query.skip((page - 1) * perPage).limit(perPage)
	}

	products = await query.exec()

	return new Response(JSON.stringify(products))
}