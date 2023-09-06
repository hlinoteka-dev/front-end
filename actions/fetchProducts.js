export async function fetchProducts(page, filter) {
	const apiUrl = `http://164.92.172.216/api/products?page=${page}&filter=${filter}`

	try {
		const response = await fetch(apiUrl, { next: { tags: ['products'] } })
		const data = await response.json()
		return data
	} catch (error) {
		console.log(error)
		return null
	}
}