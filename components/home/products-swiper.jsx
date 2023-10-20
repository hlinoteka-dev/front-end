"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'

import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import GalleryBlank from '../gallery/gallery-blank'

export default function ProductsSwiper({ products, className }) {

	const [isOpen, setIsOpen] = useState(false)
	const [images, setImages] = useState([])

	useEffect(() => {
		const carousel = new Swiper('.testimonials-carousel', {
			breakpoints: {
				1024: {
					slidesPerView: 3.4,
				}
			},
			modules: [Navigation],
			navigation: {
				nextEl: '.carousel-next',
				prevEl: '.carousel-prev'
			},
		})
	}, [])

	return (
		<>
			<div className="testimonials-carousel swiper-container">
				<div className="swiper-wrapper">
					{products.map((product, index) => (
						<div className="swiper-slide" key={index}>
							<Image
								src={product.images[0].url}
								width={365}
								height={430}
								alt={product.name}
								className="w-[365px] h-[430px] object-cover rounded-2xl border-2 border-transparent hover:border-hlinoteka-special cursor-pointer"
								onClick={() => { 
									setImages(product.images)
									setIsOpen(true)
								 }}
							 />
						</div>
					))}
				{images && images.length > 0 &&	<GalleryBlank images={images} isOpen={isOpen} setIsOpen={setIsOpen} />} 
				</div>
			</div>
		</>
	)
}