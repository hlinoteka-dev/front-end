"use client"

import Button from "../button"
import Image from "next/image"
import { dmSans } from "@/components/fonts"
import Link from "next/link"
import GalleryBlank from "../gallery/gallery-blank"
import { useState } from "react"

export default function Product({ product }) {

	const { _id, name, price, author, size, topProduct, newProduct, images } = product
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className="flex flex-col gap-4">
			<div className="relative h-[430px] border-2 border-hlinoteka-dark hover:border-hlinoteka-special overflow-hidden rounded-2xl shadow-2xl shadow-black/30">
				<img src={images[0].url} width={365} height={430} className="w-[100%] h-[100%] object-cover" alt={name} onClick={() => { setIsOpen(true) }} />
				{newProduct && <span className="absolute top-2 right-2 px-4 py-1.5 text-xs bg-hlinoteka-special text-hlinoteka-light rounded-2xl">NOVINKA</span>}
			</div>
			<div className={`flex flex-col ${dmSans.className}`}>
				<span>{name}&nbsp;<span className="text-hlinoteka-inactive font-bold">{price}</span></span>
				<span>Autor:&nbsp;{author}</span>
				<span>{size}</span>
			</div>
			<div>
				<Link href="#contact-form">
					<Button type="secondary">Mám zájem</Button>
				</Link>
			</div>
			<GalleryBlank images={images} index={_id} isOpen={isOpen} setIsOpen={setIsOpen} />
		</div>
	)
}