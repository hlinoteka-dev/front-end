import Hero from "@/components/o-dilne/hero"
import Offering from "@/components/home/offering"
import Products from "@/components/home/products"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/ui/footer"

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