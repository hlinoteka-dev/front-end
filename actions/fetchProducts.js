"use server"

export async function fetchProducts(page, filter) {
	const apiUrl = `${process.env.URL}/api/products?page=${page}&filter=${filter}`

	try {
		const response = await fetch(apiUrl)
		const data = await response.json()
		return data
	} catch (error) {
		console.log(error)
		return null
	}
}