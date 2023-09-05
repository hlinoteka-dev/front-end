import Product from "@/components/products/product"
import Select from "../dropdown-filter"
import { fetchProducts } from "@/actions/fetchProducts"
import LoadMoreProducts from "@/components/load-more-products"
import ProductsContainer from "./products-container"
export default async function Products() {

	const products = await fetchProducts(1)

	if (products === null) {
		return <></>
	}

	return (
		<div className="border-b border-b-hlinoteka-special">
			<div className="px-2 py-8 sm:p-12 lg:px-24 lg:pt-20 lg:pb-28 flex flex-col max-w-8xl mx-auto">
				<div className="mb-8">
					<span className="mr-4">Filter produktů</span>
					{/* <Select /> */}
				</div>
				<ProductsContainer products={products} />
				<div className="mt-16">
					<LoadMoreProducts />
				</div>
			</div>
		</div>
	)
}