"use server"
export async function fetchAuthors(page, filter) {
	const apiUrl = `${process.env.URL}/api/products`

	try {
		const response = await fetch(apiUrl, { next: { tags: ['authors'] }, cache: 'force-cache' })
		const data = await response.json()
		const authors = data.map(item => item.author)
		const uniqueAuthors = [...new Set(authors)]
		return uniqueAuthors
	} catch (error) {
		console.log(error)
		return null
	}
}
