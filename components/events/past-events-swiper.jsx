"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'

import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import GalleryBlank from '../gallery/gallery-blank'

export default function PastEventsSwiper({ className, index, images }) {

	const [indexFirstImage, setIndexFirstImage] = useState(0)
	const [isOpen, setIsOpen] = useState(false)

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
		
	}, [index])

	return (
		<>
			<div className={`testimonials-carousel-${index} swiper-container`}>
				<div className="swiper-wrapper">
					{images.map((image, index) => (
						<div className="swiper-slide" key={index}><Image src={`${image.url}`} width={365} height={430} alt='Hlinotéka' className="w-auto h-80 object-cover rounded-2xl border-2 border-transparent hover:border-hlinoteka-special cursor-pointer" onClick={() =>{setIndexFirstImage(index); setIsOpen(true)}} /></div>
					))}
				</div>
			</div>
			<GalleryBlank indexFirstImage={indexFirstImage} images={images} isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	)
}