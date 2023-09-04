import Image from "next/image"
import HeroImage from "@/public/images/services-hero-main.jpg"
import SpinnerText from "../spinner-text"
import { dmSans } from "@/components/fonts"
import SocialIcons from "../social-icons"

export default function Hero() {
	return (
		<div className="border-b border-b-hlinoteka-special">
			<div className="relative grid lg:grid-cols-2 p-12 lg:px-24 lg:pt-20 lg:pb-32 max-w-8xl mx-auto">
				<div className="mt-4 lg:mt-0 order-2 lg:order-1 flex flex-col justify-center gap-4">
					<div className="md:w-1/2">
						<h1 className="text-2xl font-bold leading-tight">Hlinotéka</h1>
						<p className={`${dmSans.className}`}>Šternberkova 22, 107 00 Praha 7, ČR</p>
					</div>
					<div className="flex flex-col md:flex-row gap-4">
						<div className="md:w-1/2">
							<h3 className="text-sm text-hlinoteka-inactive font-bold uppercase leading-tight">Email</h3>
							<p className={`${dmSans.className}`}>Šternberkova 22, 107 00 Praha 7, ČR</p>
						</div>
						<div className="md:w-1/2">
							<h3 className="text-sm text-hlinoteka-inactive font-bold uppercase leading-tight">Telefon</h3>
							<p className={`${dmSans.className}`}>Johana +420 607 440 744</p>
							<p className={`${dmSans.className}`}>Borek +420 777 022 934</p>
						</div>
					</div>
					<div className="md:w-1/2">
						<h3 className="text-sm text-hlinoteka-inactive font-bold uppercase leading-tight">Otevřeno</h3>
						<p className={`${dmSans.className}`}>Po & Čt 18:00–21:00</p>
						<p className={`${dmSans.className}`}>+ vrámci pravidelných POP-UPů</p>
					</div>
					<SocialIcons />
				</div>
				<div className="order-1 lg:order-2">
					<Image src={HeroImage} alt="Hlinotéka" className="object-cover rounded-2xl max-h-96 shadow-2xl shadow-black/30" />
				</div>
				<SpinnerText className="absolute right-0 lg:right-16 bottom-32 lg:bottom-8 lg:translate-x-1/3 -z-10 lg:z-10 scale-75 lg:scale-100" />
			</div>
		</div>
	)
}