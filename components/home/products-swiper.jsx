"use client"

import Image from 'next/image'
import { useEffect } from 'react'

import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

export default function ProductsSwiper({ products, className }) {

	useEffect(() => {
		const carousel = new Swiper('.testimonials-carousel', {
			breakpoints: {
				1024: {
					slidesPerView: 3.4,
				}
			},			
			grabCursor: true,
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
						<div className="swiper-slide" key={index}><Image src={product.images[0].url} width={365} height={430} alt={product.name} className="w-[365px] h-[430px] object-cover rounded-2xl" /></div>
					))}
				</div>
			</div>
		</>
	)
}