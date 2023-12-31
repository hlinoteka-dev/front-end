"use server"
export async function fetchProducts(page, params, cache) {
	const apiUrl = `${process.env.URL}/api/products?${params ? `&${params}&` : ''}page=${page}`

	try {
		const response = await fetch(apiUrl, { next: { tags: ['products'] }, cache: cache || 'force-cache' })
		const data = await response.json()
		return data
	} catch (error) {
		console.log(error)
		return null
	}
}
