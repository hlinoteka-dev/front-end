import Image from "next/image"
import HeroImage from "@/public/images/contacts-hero-main.jpg"
import SpinnerText from "../spinner-text"
import { dmSans } from "@/components/fonts"
import SocialIcons from "../social-icons"

export default function Hero() {
	return (
		<div className="py-8 border-b border-b-hlinoteka-special">
			<div className="grid lg:grid-cols-2 px-8 py-8 sm:p-12 lg:px-24 lg:pt-20 lg:pb-28 max-w-8xl mx-auto">
				<div className="mt-4 lg:mt-0 order-2 lg:order-1 flex flex-col justify-center gap-4">
					<div className="md:w-1/2">
						<h1 className="text-2xl font-bold leading-tight">Hlinotéka</h1>
						<p className={`${dmSans.className}`}><a href="https://goo.gl/maps/EEi8EKvSaT5xUuKRA" className="hover:text-hlinoteka-active transition-color duration-300" target="_blank">Šternberkova 22, 107 00 Praha 7, ČR</a></p>
					</div>
					<div className="flex flex-col md:flex-row gap-4">
						<div className="md:w-1/2">
							<h3 className="text-sm text-hlinoteka-inactive font-bold uppercase leading-tight">Email</h3>
							<p className={`${dmSans.className}`}><a href="mailto:hlinoteka@gmail.com" className="hover:text-hlinoteka-active transition-color duration-300" target="_blank">hlinoteka@gmail.com</a></p>
						</div>
						<div className="md:w-1/2">
							<h3 className="text-sm text-hlinoteka-inactive font-bold uppercase leading-tight">Telefon</h3>
							<p className={`${dmSans.className}`}>Johana <a href="tel:+420607440744" className="hover:text-hlinoteka-active transition-color duration-300" target="_blank">+420 607 440 744</a></p>
							<p className={`${dmSans.className}`}>Borek <a href="tel:+420777022934" className="hover:text-hlinoteka-active transition-color duration-300" target="_blank">+420 777 022 934</a></p>
						</div>
					</div>
					<div className="md:w-1/2">
						<h3 className="text-sm text-hlinoteka-inactive font-bold uppercase leading-tight">Otevřeno</h3>
						<p className={`${dmSans.className}`}>Po & Čt 18:00–21:00</p>
						<p className={`${dmSans.className}`}>+ vrámci pravidelných POP-UPů</p>
					</div>
					<SocialIcons />
				</div>
				<div className="relative order-1 lg:order-2">
					<Image src={HeroImage} alt="Hlinotéka" className="object-cover rounded-2xl max-h-96 shadow-2xl shadow-black/30" />
					<SpinnerText className="absolute -right-20 -bottom-32 lg:-right-40 scale-75 -z-10" />
				</div>
			</div>
		</div>
	)
}