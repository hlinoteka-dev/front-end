import ContactForm from "@/components/products/contact-form"
import Products from "@/components/products/products"
import Footer from "@/components/footer"

export default function Produkty() {
	return (
		<main className="w-full">
			<Products />
			<ContactForm />
			<Footer />
		</main>
	)
}