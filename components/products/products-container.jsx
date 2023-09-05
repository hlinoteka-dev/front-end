"use client"

import Product from "@/components/products/product"
export default function ProductsContainer({ products }) {

	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-16">
			{products.map((product) => (
				<Product product={product} key={product._id} />
			))}
		</div>
	)
}