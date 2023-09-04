"use client"

import Image from "next/image"
import { dmSans } from "@/components/fonts"
import PastEventsSwiper from "./past-events-swiper"
import PastEventsSwiperButtons from "./past-events-swiper-buttons"

export default function PastEvent({ event }) {

	const { _id, name, time, images, photographer } = event
	const fromDate = new Date(time[0]).toLocaleString("cs-CZ", { day: "2-digit", month: "2-digit", year: "numeric" })
	const toDate = new Date(time[1]).toLocaleString("cs-CZ", { day: "2-digit", month: "2-digit", year: "numeric" })
	const date = fromDate === toDate ? fromDate : `${fromDate} - ${toDate}`
	const photographerName = photographer ? photographer.name : ""

	return (
		<div className="flex flex-col gap-4">
			<div className={`flex justify-between items-center ${dmSans.className}`}>
				<span>{name}, {date} {photographerName && `, Foto: ${photographerName}`}</span>
				{images.length > 0 && (
					<div>
						<PastEventsSwiperButtons index={_id} />
					</div>
				)}
			</div>
			{images.length > 0 && (
				<div className="flex gap-4">
					<div className="mb-8 relative lg:before:absolute lg:before:inset-0 lg:before:-translate-x-full lg:before:z-20 lg:before:bg-gradient-to-l lg:before:from-transparent lg:before:to-hlinoteka-dark lg:before:to-20% lg:after:absolute lg:after:inset-0 lg:after:translate-x-full lg:after:z-20 lg:after:bg-gradient-to-r lg:after:from-transparent lg:after:to-hlinoteka-dark lg:after:to-20%">
						<PastEventsSwiper images={images} index={_id} />
					</div>
				</div>
			)}
		</div>
	)
}