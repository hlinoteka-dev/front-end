import Link from "next/link"
import Button from "../button"
import ProductsSwiper from "./products-swiper"
import { fetchProducts } from "@/actions/fetchProducts"

export default async function Products() {

	const products = await fetchProducts(1, "&filter=random")

	if (products === null) {
		return <></>
	}

	return (
		<div className="border-b border-b-hlinoteka-special">
			<div className="px-2 py-8 sm:p-12 lg:px-24 lg:py-20 max-w-8xl mx-auto">
				<div className="w-full flex justify-between items-center">
					<h2 className="text-2xl font-bold leading-tight">Produkty</h2>
					<div className="mb-4 max-w-8xl flex justify-end gap-2">
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
				</div>
				<div className="relative lg:before:absolute lg:before:inset-0 lg:before:-translate-x-full lg:before:z-20 lg:before:bg-gradient-to-l lg:before:from-transparent lg:before:to-hlinoteka-dark lg:before:to-25% lg:after:absolute lg:after:inset-0 lg:after:translate-x-full lg:after:z-20 lg:after:bg-gradient-to-r lg:after:from-transparent lg:after:to-hlinoteka-dark lg:after:to-25%">
					<ProductsSwiper products={products} />
				</div>
				<div className="mt-6 w-full text-center">
					<Link href="/produkty">
						<Button type="primary" className="w-full sm:w-auto">Zobrazit všechny</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}