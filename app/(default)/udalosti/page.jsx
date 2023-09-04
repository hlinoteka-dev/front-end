import ContactForm from "@/components/contact-form"
import PastEvents from "@/components/events/past-events"
import Footer from "@/components/footer"
import Events from "@/components/events/events"

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