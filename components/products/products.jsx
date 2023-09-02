"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import Product from "@/components/products/product"
import { dmSans } from "@/components/fonts"
import Select from "../dropdown-filter"
import { get } from "mongoose"
export default function Products() {

	const [products, setProducts] = useState([])
	useEffect(() => {
		getProducts()
	}, [])

	function getProducts() {
		axios.get('/api/products')
			.then(res => setProducts(res.data))
			.catch(err => console.log(err))
	}

	function sortProducts(sortBy) {
		axios.get(`/api/products?sortBy=${sortBy}`)
			.then(res => setProducts(res.data))
			.catch(err => console.log(err))
	}

	function handleSortChange(sortBy) {
		sortProducts(sortBy)
	}

	return (
		<div className="border-b border-b-hlinoteka-special">
			<div className="p-24 flex flex-col max-w-8xl mx-auto">
				<div className="mb-8">
					<span className="mr-4">Filter produktů</span>
					<Select onOptionChange={handleSortChange} />
				</div>
				<div className="grid grid-cols-3 gap-x-4 gap-y-16">
					{products.map((product) => (
						<Product product={product} />
					))}
				</div>
			</div>
		</div>
	)
}