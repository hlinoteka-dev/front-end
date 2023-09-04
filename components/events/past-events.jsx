import { fetchEvents } from "@/actions/fetchEvents"
import PastEventsContainer from "./past-events-container"
import LoadMorePastEvents from "../load-more-past-events"

export default async function PastEvents() {

	const events = await fetchEvents(1, "past")

	if (events === null) {
		return <></>
	}

	return (
		<div className="border-b border-b-hlinoteka-special">
			<div className="flex flex-col p-12 px-2 py-8 sm:p-12 lg:px-24 lg:py-20 max-w-8xl mx-auto">
				<div className="flex flex-col">
					<h2 className="text-2xl font-bold leading-tight">Galerie uplynulých událostí</h2>
					<PastEventsContainer events={events} />
				</div>
				<div className="mt-16">
					<LoadMorePastEvents />
				</div>
			</div>
		</div>
	)
}