"use server"
export async function fetchTags() {
	const apiUrl = `${process.env.URL}/api/products/tags`

	try {
		const response = await fetch(apiUrl, { next: { tags: ['tags'] }, cache: 'force-cache' })
		const data = await response.json()
		return data
	} catch (error) {
		console.log(error)
		return null
	}
}
