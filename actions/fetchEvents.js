export async function fetchEvents(page, filter = "") {
	const apiUrl = `http://localhost:3000/api/events?page=${page}&filter=${filter}`

	try {
		const response = await fetch(apiUrl, { next: { tags: ['events'] } })
		const data = await response.json()
		return data
	} catch (error) {
		console.log(error)
		return null
	}
}