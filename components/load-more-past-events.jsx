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
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	async function loadMorePastEvents() {
		await delay(2000)
		const newEvents = await fetchEvents(pagesLoaded + 1)
		setEvents((prevEvents) => [...prevEvents, ...newEvents])
		setPagesLoaded(pagesLoaded + 1)
		setLoading(newEvents.length > 0)
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