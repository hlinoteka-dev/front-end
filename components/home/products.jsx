"use client"

import Button from "../ui/button"

export default function Products() {
	return (
		<div className="border-b border-b-hlinoteka-special">
		<div className="px-24 py-20 max-w-8xl mx-auto">
			<h2 className="text-2xl font-bold leading-tight">Produkty</h2>
			<div className="grid grid-cols-2 max-h-96 rounded-2xl overflow-hidden">
			</div>
			<div className="mt-6 w-full text-center">
				<Button type="primary">Zobrazit všechny</Button>
			</div>
		</div>
		</div>
	)
}