import Image from "next/image"
import Button from "../button"
import { dmSans } from "@/components/fonts"

export default async function Event({ event }) {

	const dateFrom = new Date(event.time[0]).toLocaleString('cs-CZ', { month: '2-digit', day: '2-digit' })
	const dateTo = new Date(event.time[1]).toLocaleString('cs-CZ', { year: 'numeric', month: '2-digit', day: '2-digit' })
	const timeFrom = new Date(event.time[0]).toLocaleString('cs-CZ', { hour: '2-digit', minute: '2-digit' })
	const timeTo = new Date(event.time[1]).toLocaleString('cs-CZ', { hour: '2-digit', minute: '2-digit' })
	const date = dateFrom === dateTo ? dateFrom : `${dateFrom} - ${dateTo}`
	const time = timeFrom === timeTo ? timeFrom : `${timeFrom} - ${timeTo}`

	return (
		<>
			<div>
				<Image src={event.images[0].url} width={860} height={484} alt={event.name} className="w-full object-cover h-48 md:h-96" />
			</div>
			<div className="p-8 flex flex-col bg-hlinoteka-gray h-96">
				<div className="text-2xl font-bold text-hlinoteka-active">
					{event.name}
				</div>
				<div className="lg:text-2xl font-bold text-hlinoteka-inactive">
					{date}
				</div>
				<div className="lg:text-2xl font-bold text-hlinoteka-inactive">
					{time}
				</div>
				<div className="mt-4 max-h-52 overflow-y-hidden mb-auto">
					<p className={`${dmSans.className} font-sans pr-12`} dangerouslySetInnerHTML={{ __html: event.description }} />
				</div>
				<div className="mt-4 sm:flex sm:justify-end">
					<a href={event.url || "#"} target="_blank"><Button type="tertiary" className="w-full sm:w-auto text-xs">FB Event</Button></a>
				</div>
			</div>
		</>
	)
}