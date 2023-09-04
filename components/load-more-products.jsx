"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { fetchProducts } from "@/actions/fetchProducts"
import ProductsContainer from "@/components/products/products-container"
import Spinner from "./spinner"

export default function LoadMoreProducts() {
	const [products, setProducts] = useState([])
	const [pagesLoaded, setPagesLoaded] = useState(1)
	const [loading, setLoading] = useState(true)
	const { ref, inView } = useInView()

	useEffect(() => {
		if (inView) {
			loadMoreProducts()
		}
	}, [inView])

	function delay(ms) {
		new Promise((resolve) => setTimeout(resolve, ms))
	}

	async function loadMoreProducts() {
		delay(2000)
		const newProducts = await fetchProducts(pagesLoaded + 1)
		setProducts([...products, ...newProducts])
		setPagesLoaded(pagesLoaded + 1)
		if (newProducts.length === 0) {
			setLoading(false)
		}
	}

	return (
		<>
			<ProductsContainer products={products} />
			{loading && (
				<div ref={ref} className="flex justify-center">
					<Spinner />
				</div>
			)}
		</>
	)

}