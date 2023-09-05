import Image from "next/image"
import Button from "../button"
import HeroImage from "@/public/images/services-hero-main.jpg"
import SpinnerText from "../spinner-text"
import { dmSans } from "@/components/fonts"
import Link from "next/link"

export default function Hero() {
	return (
		<div className="">
			<div className="relative grid lg:grid-cols-2 px-2 py-8 sm:p-12 lg:px-24 lg:pt-20 lg:pb-28 max-w-8xl mx-auto">
				<div className="order-2 lg:order-1 flex flex-col justify-center gap-4">
					<div className="md:w-1/2">
						<h1 className="mt-4 lg:mt-0 text-2xl font-bold leading-tight">Openstudio, kurzy a výpaly</h1>
					</div>
					<div className={`md:w-8/12 ${dmSans.className}`}>
						<p className="leading-6">Nabízíme lekce točení na kruhu, kurz modelování z ruky a openstudio určené pro individuální tvorbu. Můžete také využít možnost výpalů v naší elektrické peci. Ve vybavení máme tři hrnčířské kruhy, dva velké modelovací stoly a dvě pece o obsahu 120l a 60l.</p>
					</div>
					<div className="">
						<Link href="#services">
							<Button type="primary" className="w-full sm:w-auto">Seznam služeb</Button>
						</Link>
					</div>
				</div>
				<div className="order-1 lg:order-2">
					<Image src={HeroImage} alt="Hlinotéka" className="w-full object-cover rounded-2xl max-h-96 shadow-2xl shadow-black/30" />
				</div>
				<SpinnerText className="absolute right-6 lg:right-16 bottom-32 lg:bottom-2 lg:translate-x-1/2 scale-75 lg:scale-100 -z-10 lg:z-10" />
			</div>
		</div>
	)
}