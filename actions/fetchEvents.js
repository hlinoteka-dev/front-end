"use server"
export async function fetchEvents(page, filter) {
	const apiUrl = `${process.env.URL}/api/events?page=${page}&filter=${filter}`

	try {
		const response = await fetch(apiUrl, { next: { tags: ['events'] }, cache: 'force-cache' })
		const data = await response.json()
		return data
	} catch (error) {
		console.log(error)
		return null
	}
}
