import Hero from "@/components/studio/hero"
import Offering from "@/components/home/offering"
import Products from "@/components/home/products"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export const metadata = {
	title: 'O dílně - Hlinotéka',
	description: 'Hlinotéka je nezávislá keramická dílna v pražských Holešovicích. Nabízíme kurzy, openstudio, prodej keramiky a další služby.',
}
export default function O_dilne() {
	return (
		<main className="w-full">
			<Hero />
			<Offering />
			<Products />
			<ContactForm />
			<Footer />
		</main>
	)
}