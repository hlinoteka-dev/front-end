"use client"

import Image from 'next/image'
import { useEffect } from 'react'

import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

export default function PastEventsSwiper({ className, index, images }) {

	useEffect(() => {
		const carousel = new Swiper(`.testimonials-carousel-${index}`, {
			slidesPerView: "auto",
			grabCursor: true,
			modules: [Navigation],
			navigation: {
				nextEl: `.carousel-next-${index}`,
				prevEl: `.carousel-prev-${index}`
			},
		})
		
	}, [])

	return (
		<>
			<div className={`testimonials-carousel-${index} swiper-container`}>
				<div className="swiper-wrapper">
					{images.map((image, index) => (
						<div className="swiper-slide" key={index}><Image src={`${image.url}`} width={365} height={430} alt='Hlinotéka' className="w-auto h-80 object-cover rounded-2xl" /></div>
					))}
				</div>
			</div>
		</>
	)
}