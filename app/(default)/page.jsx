import Hero from "@/components/home/hero"
import Events from "@/components/home/events"
import Offering from "@/components/home/offering"
import Products from "@/components/home/products"
import History from "@/components/home/history"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
			<Hero />
			<Events />
			<Offering />
			<Products />
			<History />
			<ContactForm />
			<Footer />
    </main>
  )
}
