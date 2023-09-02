import Hero from "@/components/members/hero"
import History from "@/components/home/history"
import Products from "@/components/home/products"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Clenove() {
	return (
		<main className="w-full">
			<Hero />
			<History />
			<Products />
			<ContactForm />
			<Footer />
		</main>
	)
}