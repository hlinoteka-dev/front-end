import ContactForm from "@/components/products/contact-form"
import Products from "@/components/products/products"
import Footer from "@/components/footer"

import { layoutTester } from "@/actions/layoutTester"

export const metadata = {
	title: 'Produkty - Hlinoteka',
	description: 'V naší nabídce najdete keramické výrobky od českých výrobců. Všechny produkty jsou ručně vyráběné a vyráběné v České republice.',
}
export default async function Produkty(props) {

	await layoutTester(props.searchParams)

	return (
		<main className="w-full">
			<Products />
			<ContactForm />
			<Footer />
		</main>
	)
}