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
			<div className="p-8 md:p-16 xl:p-24 flex flex-col max-w-8xl mx-auto">
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