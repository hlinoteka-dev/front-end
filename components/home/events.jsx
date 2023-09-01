"use client"

import Button from "../ui/button"
import { dmSans } from "@/components/fonts"

export default function Events() {
	const dummyEvent = {
		name: "První večeře",
		dateFrom: "2021-10-15T18:00:00.000Z",
		dateTo: "2021-10-15T21:00:00.000Z",
		description: "Do dílny je možno nahlédnout v rámci pravidelných sezónních POP-UPů nebo během otevírací doby a to vždy v pondělí a čtvrtek od 18:30 do 21:30. <br /><br />V případě zájmu o návštěvu mimo otevírací dobu nás prosím kontaktujte předem na emailu.",
		image: "https://dummyimage.com/873x348/000000/33ff00",
		url: "https://facebook.com/"
	}

	// Parse date and time information
	const dateFrom = new Date(dummyEvent.dateFrom)
	const dateTo = new Date(dummyEvent.dateTo)

	// Convert to UTC+2
	dateFrom.setUTCHours(dateFrom.getUTCHours() - 2)
	dateTo.setUTCHours(dateTo.getUTCHours() - 2)

	// Format date strings
	const dateFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' }
	const formattedDateFrom = dateFrom.toLocaleDateString('cs-CZ', dateFormatOptions)
	const formattedDateTo = dateTo.toLocaleDateString('cs-CZ', dateFormatOptions)

	// Format time strings
	const timeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: false }
	const formattedTimeFrom = dateFrom.toLocaleTimeString('cs-CZ', timeFormatOptions)
	const formattedTimeTo = dateTo.toLocaleTimeString('cs-CZ', timeFormatOptions)

	// Construct final strings
	const dates = `${formattedDateFrom} - ${formattedDateTo}`
	const time = `${formattedTimeFrom} - ${formattedTimeTo}`

	return (
		<div className="border-b border-b-hlinoteka-special">
			<div className="px-24 py-20 max-w-8xl mx-auto">
				<div className="grid grid-cols-2 max-h-96 rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
					<div>
						<img src={dummyEvent.image} alt={dummyEvent.name} className="object-cover h-96" />
					</div>
					<div className="p-8 flex flex-col bg-hlinoteka-gray h-96">
						<div className="text-2xl font-bold text-hlinoteka-active">
							{dummyEvent.name}
						</div>
						<div className="text-2xl font-bold text-hlinoteka-inactive">
							{dates}
						</div>
						<div className="text-2xl font-bold text-hlinoteka-inactive">
							{time}
						</div>
						<div className="mt-4 max-h-52 overflow-y-hidden mb-auto">
							<p className={`${dmSans.className} font-sans pr-12`} dangerouslySetInnerHTML={{ __html: dummyEvent.description }} />
						</div>
						<div className="mt-4 flex justify-end">
							<Button type="tertiary">FB Event</Button>
						</div>
					</div>
				</div>
				<div className="mt-8 w-full text-center">
					<Button type="secondary">Další události</Button>
				</div>
			</div>
		</div>
	)
}