"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'

import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

import Button from '../button'
import Image01 from '@/public/images/studio/Hlinoteka_Juan-Calderon_-015.jpg'
import Image02 from '@/public/images/studio/Hlinoteka_Juan-Calderon_-048.jpg'
import Image03 from '@/public/images/studio/Hlinoteka_Juan-Calderon_-059.jpg'
import Image04 from '@/public/images/studio/Hlinoteka_Juan-Calderon_-077.jpg'
import Image05 from '@/public/images/studio/Hlinoteka_Juan-Calderon_-176.jpg'
import Image06 from '@/public/images/studio/Hlinoteka_Juan-Calderon_-179.jpg'
import Image07 from '@/public/images/studio/Hlinoteka_Juan-Calderon_-181.jpg'
import GalleryBlank from '../gallery/gallery-blank'

export default function HeroGallery({ className }) {

	const images = [{
		url: Image01
	}, {
		url: Image02
	}, {
		url: Image03
	}, {
		url: Image04
	}, {
		url: Image05
	}, {
		url: Image06
	}, {
		url: Image07
	}]
	const [index, setIndex] = useState(0)
	const [isOpen, setIsOpen] = useState(false)
	
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
			<div className="mb-4 mx-auto max-w-8xl flex justify-end gap-2">
				<Button type="icon" className="carousel-prev">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
					</svg>
				</Button>
				<Button type="icon" className="carousel-next">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
					</svg>
				</Button>
			</div>
			<div className="testimonials-carousel swiper-container">
				<div className="swiper-wrapper">
					<div className="swiper-slide"><Image src={Image01} alt='Hlinotéka' className="w-auto h-96 object-cover rounded-2xl border-2 border-transparent hover:border-hlinoteka-special cursor-pointer" onClick={() => {setIndex(0); setIsOpen(true)}}/></div>
					<div className="swiper-slide"><Image src={Image02} alt='Hlinotéka' className="w-auto h-96 object-cover rounded-2xl border-2 border-transparent hover:border-hlinoteka-special cursor-pointer" onClick={() => {setIndex(1); setIsOpen(true)}}/></div>
					<div className="swiper-slide"><Image src={Image03} alt='Hlinotéka' className="w-auto h-96 object-cover rounded-2xl border-2 border-transparent hover:border-hlinoteka-special cursor-pointer" onClick={() => {setIndex(2); setIsOpen(true)}}/></div>
					<div className="swiper-slide"><Image src={Image04} alt='Hlinotéka' className="w-auto h-96 object-cover rounded-2xl border-2 border-transparent hover:border-hlinoteka-special cursor-pointer" onClick={() => {setIndex(3); setIsOpen(true)}}/></div>
					<div className="swiper-slide"><Image src={Image05} alt='Hlinotéka' className="w-auto h-96 object-cover rounded-2xl border-2 border-transparent hover:border-hlinoteka-special cursor-pointer" onClick={() => {setIndex(4); setIsOpen(true)}}/></div>
					<div className="swiper-slide"><Image src={Image06} alt='Hlinotéka' className="w-auto h-96 object-cover rounded-2xl border-2 border-transparent hover:border-hlinoteka-special cursor-pointer" onClick={() => {setIndex(5); setIsOpen(true)}}/></div>
					<div className="swiper-slide"><Image src={Image07} alt='Hlinotéka' className="w-auto h-96 object-cover rounded-2xl border-2 border-transparent hover:border-hlinoteka-special cursor-pointer" onClick={() => {setIndex(6); setIsOpen(true)}}/></div>
				</div>
				<GalleryBlank indexFirstImage={index} images={images} isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
		</>
	)
}