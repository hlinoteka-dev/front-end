export async function fetchProducts(page, filter = "") {
	const apiUrl = `http://localhost:3000/api/products?page=${page}&filter=${filter}`

	try {
		const response = await fetch(apiUrl, { next: { tags: ['products'] } })
		const data = await response.json()
		return data
	} catch (error) {
		console.log(error)
		return null
	}
}