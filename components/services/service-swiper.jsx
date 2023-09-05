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
			breakpoints: {
				1024: {
					slidesPerView: "auto",
				}
			},		
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
						<div className="swiper-slide" key={index}><Image src={`/images/services/${image.file}`} width={image.width} height={image.height} alt='Hlinotéka' className="w-auto h-80 object-cover rounded-2xl" /></div>
					))}
				</div>
			</div>
		</>
	)
}