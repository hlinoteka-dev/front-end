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
		return new Promise((resolve) => setTimeout(resolve, ms))
	}

	async function loadMoreProducts() {
		await delay(2000)
		const newProducts = await fetchProducts(pagesLoaded + 1)
		setProducts((prevProducts) => [...prevProducts, ...newProducts])
		setPagesLoaded(pagesLoaded + 1)
		setLoading(newProducts.length > 0)
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