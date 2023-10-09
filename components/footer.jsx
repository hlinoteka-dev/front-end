import Image from "next/image"
import { dmSans } from "@/components/fonts"
import FooterImage from "@/public/images/footer.jpg"
import SocialIcons from "./social-icons"

export default function Footer() {
	return (
		<div className="flex justify-center max-w-8xl mx-auto">
			<div className="flex flex-col pt-10 md:pt-20">
				<div className="px-2 sm:p-12 lg:px-24 grid grid-cols-2 md:flex justify-between gap-y-4 text-sm">
					<div className="flex flex-col">
						<h3 className="text-hlinoteka-inactive font-bold">ADRESA</h3>
						<span className={`${dmSans.className}`}>Hlinotéka Ceramic Studio</span>
						<a href="https://goo.gl/maps/EEi8EKvSaT5xUuKRA" className="hover:text-hlinoteka-active transition-color duration-300" target="_blank">
						<span className={`${dmSans.className}`}>Šternberkova 22<br />107 00 Praha 7, ČR</span>
						</a>
						<SocialIcons />
					</div>
					<div className="flex flex-col">
						<h3 className="text-hlinoteka-inactive font-bold">OTEVŘENO</h3>
						<span className={`${dmSans.className}`}>Po & Čt 18:00–21:00</span>
						<span className={`${dmSans.className}`}>+ vrámci pravidelných akcí</span>
					</div>
					<div className="flex flex-col">
						<h3 className="text-hlinoteka-inactive font-bold">KONTAKT</h3>
						<span className={`${dmSans.className}`}><a href="mailto:hlinoteka@gmail.com" className="hover:text-hlinoteka-active transition-color duration-300" target="_blank">hlinoteka@gmail.com</a></span>
						<span className={`mt-4 ${dmSans.className}`}>Johana <a href="tel:+420607440744" className="hover:text-hlinoteka-active transition-color duration-300" target="_blank">+420 607 440 744</a></span>
						<span className={`${dmSans.className}`}>Borek <a href="tel:+420777022934" className="hover:text-hlinoteka-active transition-color duration-300" target="_blank">+420 777 022 934</a></span>
						<span className={`${dmSans.className}`}>Karo <a href="tel:+420773680332" className="hover:text-hlinoteka-active transition-color duration-300" target="_blank">+420 773 680 332</a></span>
					</div>
				</div>
				<div className="mt-8 md:mt-16 py-4 md:py-20 flex flex-col gap-4">
					<Image src={FooterImage} alt="Hlinotéka" className="object-cover max-h-[500px] rounded-2xl" />
					<span className={`${dmSans.className} text-center`}>Hlinotéka © 2023</span>
				</div>
			</div>
		</div>
	)
}