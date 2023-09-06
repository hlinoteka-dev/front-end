import Button from "../button"
import Event from "./event"
import { dmSans } from "@/components/fonts"

async function getEvent() {
	const res = await fetch("http://localhost:3000/api/events?filter=active", { next: { tags: ['events'] } }, { cache: "no-cache" })

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export default async function Events() {

	const events = await getEvent()

	if (events.length === 0) {
		return <></>
	}

	return (
		<div className="border-b border-b-hlinoteka-special">
			<div className="flex flex-col gap-8 px-2 py-8 sm:p-12 lg:px-24 lg:py-20 max-w-8xl mx-auto">
				{events.map(event => (
					<div className="md:grid md:grid-cols-2 md:max-h-96 rounded-2xl overflow-hidden shadow-2xl shadow-black/30" key={event.id}>
						<Event event={event} />
					</div>
				))}
			</div>
		</div>
	)
}