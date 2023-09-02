import Image from "next/image"
import Button from "../button"
import HeroImage from "@/public/images/services-hero-main.jpg"
import SpinnerText from "../spinner-text"
import { dmSans } from "@/components/fonts"

export default function Hero() {
	return (
		<div className="relative">
			<div className="grid grid-cols-2 px-24 pt-20 pb-28 max-w-8xl mx-auto">
				<div className="flex flex-col justify-center gap-4">
					<div className="w-1/2">
						<h1 className="text-2xl font-bold leading-tight">Openstudio, kurzy a výpaly</h1>
					</div>
					<div className={`w-8/12 ${dmSans.className}`}>
						<p className="leading-6">Nabízíme lekce točení na kruhu, kurz modelování z ruky a openstudio určené pro individuální tvorbu. Můžete také využít možnost výpalů v naší elektrické peci. Ve vybavení máme tři hrnčířské kruhy, dva velké modelovací stoly a dvě pece o obsahu 120l a 60l.</p>
					</div>
					<div className="">
						<Button type="primary">Seznam služeb</Button>
					</div>
				</div>
				<div>
					<Image src={HeroImage} alt="Hlinotéka" className="object-cover rounded-2xl max-h-96 shadow-2xl shadow-black/30" />
				</div>
				<SpinnerText className="absolute right-16 bottom-2 -translate-x-1/3 z-10" />
			</div>
		</div>
	)
}