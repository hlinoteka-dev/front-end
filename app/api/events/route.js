import { Event } from '@/models/Event'
import { mongooseConnect } from "@/lib/mongoose"

export async function GET(request) {
	await mongooseConnect()
	const url = new URL(request.url)
	const filter = url.searchParams.get('filter')
	const limit = url.searchParams.get('limit')
	const page = url.searchParams.get('page')

	let query = Event.find()

	const perPage = 9

	if (filter === 'active') {
		query = query.find({ active: true }).sort({ time: -1 })
	} else if (filter === 'past') {
		query = query.find({ active: false }).sort({ time: -1 })
	}

	if (page) {
		query = query.skip((page - 1) * perPage).limit(perPage)
	}

	if (limit) {
		query = query.limit(parseInt(limit))
	}

	const events = await query.exec()
	return new Response(JSON.stringify(events))
}