import Product from "@/components/products/product"
import Select from "../dropdown-filter"
import { fetchProducts } from "@/actions/fetchProducts"
import LoadMoreProducts from "@/components/load-more-products"
import ProductsContainer from "./products-container"
export default async function Products({ params }) {

	let queryString = '';
	for (const key in params) {
		if (params.hasOwnProperty(key)) {
			queryString += `&${key}=${params[key]}`;
		}
	}

	queryString = queryString.slice(1);

	const products = await fetchProducts(1, queryString)

	if (products === null) {
		return <></>
	}

	return (
		<div className="py-8 border-b border-b-hlinoteka-special">
			<div className="px-2 py-8 sm:p-12 lg:px-24 lg:pt-20 lg:pb-28 flex flex-col max-w-8xl mx-auto">
				<div className="mb-8">
					<span className="mr-4 text-sm">Filter produktů</span>
					<Select query={params} />
				</div>
				<ProductsContainer products={products} />
				<div className="mt-16">
					<LoadMoreProducts query={queryString} />
				</div>
			</div>
		</div>
	)
}