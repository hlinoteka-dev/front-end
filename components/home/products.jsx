"use client"

import Button from "../button"

export default function Products() {
	return (
		<div className="border-b border-b-hlinoteka-special">
			<div className="px-24 py-20 max-w-8xl mx-auto">
				<h2 className="text-2xl font-bold leading-tight">Produkty</h2>
				<div className="mb-4 mx-auto max-w-8xl flex justify-end gap-2">
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
				<div className="grid grid-cols-2 max-h-96 rounded-2xl overflow-hidden">
				</div>
				<div className="mt-6 w-full text-center">
					<Button type="primary">Zobrazit všechny</Button>
				</div>
			</div>
		</div>
	)
}