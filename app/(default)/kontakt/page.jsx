import ContactForm from "@/components/contact-form"
import Hero from "@/components/contacts/hero"
import Footer from "@/components/footer"

export const metadata = {
	title: 'Kontakt - Hlinotéka',
	description: 'Kontaktujte nás',
}
export default function Kontakt() {
	return (
		<main className="w-full">
			<Hero />
			<ContactForm />
			<Footer />
		</main>
	)
}