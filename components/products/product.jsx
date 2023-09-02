"use client"

import Button from "../button"
import Image from "next/image"
import { dmSans } from "@/components/fonts"

export default function Product({ product }) {

	const { name, price, author, size, topProduct, newProduct, images } = product

	return (
		<div className="flex flex-col gap-4">
			<div className="relative">
				<Image src={images[0].url} width={365} height={430} className="w-full h-[430px] object-cover rounded-2xl shadow-2xl shadow-black/30" />
				{newProduct && <span className="absolute top-2 right-2 px-4 py-1.5 text-xs bg-hlinoteka-special text-hlinoteka-light rounded-2xl">NOVINKA</span>}
			</div>
			<div className={`flex flex-col ${dmSans.className}`}>
				<span>{name}&nbsp;<span className="text-hlinoteka-inactive font-bold">{price}</span></span>
				<span>Autor:&nbsp;{author}</span>
				<span>{size}</span>
			</div>
			<div>
				<Button type="secondary">Mám zájem</Button>
			</div>
		</div>
	)
}