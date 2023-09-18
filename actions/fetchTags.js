"use server"
export async function fetchTags() {
	const apiUrl = `http://localhost:3000/api/products/tags`

	try {
		const response = await fetch(apiUrl, { next: { tags: ['tags'] }, cache: 'force-cache' })
		const data = await response.json()
		return data
	} catch (error) {
		console.log(error)
		return null
	}
}