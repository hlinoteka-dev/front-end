"use client"

import PastEvent from "@/components/events/past-event"
export default function PastEventsContainer({ events }) {

	return (
		<div className="flex flex-col gap-y-16">
			{events.map((event) => (
				<PastEvent event={event} />
			))}
		</div>
	)
}