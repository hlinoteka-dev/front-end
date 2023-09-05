import ContactForm from "@/components/contact-form"
import PastEvents from "@/components/events/past-events"
import Footer from "@/components/footer"
import Events from "@/components/events/events"

export const metadata = {
	title: 'Události - Hlinotéka',
	description: 'Přehled všech událostí, které se v Hlinotéce konají.',
}
export default function Udalosti() {
	return (
		<main className="w-full">
			<Events />
			<PastEvents />
			<ContactForm />
			<Footer />
		</main>
	)
}