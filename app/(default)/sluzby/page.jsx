import ContactForm from "@/components/contact-form"
import Accordion from "@/components/services/accordion"
import Hero from "@/components/services/hero"
import Footer from "@/components/footer"

export default function Sluzby() {
	return (
		<main className="w-full">
			<Hero />
			<Accordion />
			<ContactForm />
			<Footer />
		</main>
	)
}