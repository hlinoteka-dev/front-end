"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'

import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'


import Button from '../button'
import GalleryBlank from '../gallery/gallery-blank'

export default function 	ServiceSwiper({ className, index, images }) {

	const [indexFirstImage, setIndexFirstImage] = useState(0)
	const [isOpen, setIsOpen] = useState(false)
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
					{images.map((image, imageIndex) => (
						<div className="swiper-slide" key={imageIndex}><Image src={image.url} width={image.width} height={image.height} alt='Hlinotéka' className="w-auto h-80 object-cover rounded-2xl border-2 border-transparent hover:border-hlinoteka-special cursor-pointer" onClick={() =>{setIndexFirstImage(imageIndex); setIsOpen(true)}}/></div>
					))}
				</div>
			</div>
			<GalleryBlank indexFirstImage={indexFirstImage} images={images} isOpen={isOpen} setIsOpen={setIsOpen} />
		</>
	)
}