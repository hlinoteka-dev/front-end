"use client"

import Image from 'next/image'
import { useEffect } from 'react'

import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'


import Button from '../button'

export default function ServiceSwiper({ className, index, images }) {

	const photosUrl = images.map((image) => `/images/services/${image}`)

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
			<div className="mb-4 mx-auto max-w-8xl flex justify-end gap-2">
				<Button type="icon" className={`carousel-prev-${index}`}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
					</svg>
				</Button>
				<Button type="icon" className={`carousel-next-${index}`}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
					</svg>
				</Button>
			</div>
			<div className={`testimonials-carousel-${index} swiper-container`}>
				<div className="swiper-wrapper">
					{images.map((image, index) => (
						<div className="swiper-slide" key={index}><Image src={`/images/services/${image.file}`} width={image.width} height={image.height} alt='Hlinotéka' className="w-auto h-80 object-cover rounded-2xl" /></div>
					))}
				</div>
			</div>
		</>
	)
}