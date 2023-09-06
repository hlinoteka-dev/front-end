import Image from "next/image"
import Button from "../button"
import { dmSans } from "@/components/fonts"
import Link from "next/link"

async function getEvent() {
	const res = await fetch("http://localhost:3000/api/events?filter=active&limit=1", { next: { tags: ['products'] } })

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

export default async function Event() {

	const data = await getEvent()

	if (data.length === 0) {
		return <></>
	}

	const event = data[0]
	const dateFrom = new Date(event.time[0]).toLocaleString('cs-CZ', { month: '2-digit', day: '2-digit' })
	const dateTo = new Date(event.time[1]).toLocaleString('cs-CZ', { year: 'numeric', month: '2-digit', day: '2-digit' })
	const timeFrom = new Date(event.time[0]).toLocaleString('cs-CZ', { hour: '2-digit', minute: '2-digit' })
	const timeTo = new Date(event.time[1]).toLocaleString('cs-CZ', { hour: '2-digit', minute: '2-digit' })

	return (
		<div className="border-b border-b-hlinoteka-special">
			<div className="px-2 py-8 sm:p-12 lg:px-24 lg:py-20 max-w-8xl mx-auto">
				<div className="md:grid md:grid-cols-2 md:max-h-96 rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
					<div>
						<Image src={event.images[0].url} width={860} height={484} alt={event.name} className="w-full object-cover h-48 md:h-96" />
					</div>
					<div className="p-8 flex flex-col bg-hlinoteka-gray h-96">
						<div className="text-2xl font-bold text-hlinoteka-active">
							{event.name}
						</div>
						<div className="lg:text-2xl font-bold text-hlinoteka-inactive">
							{dateFrom} - {dateTo}
						</div>
						<div className="lg:text-2xl font-bold text-hlinoteka-inactive">
							{timeFrom} - {timeTo}
						</div>
						<div className="mt-4 max-h-52 overflow-y-hidden mb-auto">
							<p className={`${dmSans.className} font-sans pr-12`} dangerouslySetInnerHTML={{ __html: event.description }} />
						</div>
						<div className="mt-4 sm:flex sm:justify-end w-full">
							<a href={event.url || "#"} target="_blank"><Button type="tertiary" className="w-full sm:w-auto">FB Event</Button></a>
						</div>
					</div>
				</div>
				<div className="mt-4 sm:mt-8 w-full text-center">
					<Link href="/udalosti">
						<Button type="secondary" className="w-full sm:w-auto">Další události</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}