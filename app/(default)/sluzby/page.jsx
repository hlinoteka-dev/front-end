import ContactForm from "@/components/contact-form"
import Accordion from "@/components/services/accordion"
import Hero from "@/components/services/hero"
import Footer from "@/components/footer"

export const metadata = {
	title: 'Služby - Hlinotéka',
	description: 'Nabízíme lekce točení na kruhu, kurz modelování z ruky a openstudio určené pro individuální tvorbu. Můžete také využít možnost výpalů v naší elektrické peci. Ve vybavení máme tři hrnčířské kruhy, dva velké modelovací stoly a dvě pece o obsahu 120l a 60l.',
}
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