"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { fetchEvents } from "@/actions/fetchEvents"
import PastEventsContainer from "./events/past-events-container"
import Spinner from "./spinner"

export default function LoadMorePastEvents() {
	const [events, setEvents] = useState([])
	const [pagesLoaded, setPagesLoaded] = useState(1)
	const [loading, setLoading] = useState(true)
	const { ref, inView } = useInView()

	useEffect(() => {
		if (inView) {
			loadMorePastEvents()
		}
	}, [inView])

	function delay(ms) {
		new Promise((resolve) => setTimeout(resolve, ms))
	}

	async function loadMorePastEvents() {
		delay(2000)
		const newEvents = await fetchEvents(pagesLoaded + 1, "past")
		setEvents([...events, ...newEvents])
		setPagesLoaded(pagesLoaded + 1)
		if (newEvents.length === 0) {
			setLoading(false)
		}
	}

	return (
		<>
			<PastEventsContainer events={events} />
			{loading && (
				<div ref={ref} className="flex justify-center">
					<Spinner />
				</div>
			)}
		</>
	)

}