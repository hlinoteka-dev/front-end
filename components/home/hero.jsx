import Image from "next/image"
import Button from "../button"
import HeroImage from "@/public/images/home-hero-main.jpg"
import SpinnerText from "../spinner-text"

export default function Hero() {
	return (
		<div className="border-b border-b-hlinoteka-special">
			<div className="grid grid-cols-2 px-24 py-20 max-w-8xl mx-auto">
				<div className="relative flex flex-col justify-center gap-2">
					<div className="w-[62%] py-2">
						<h1 className="text-2xl font-bold leading-tight">Hlinotéka je nezávislá keramická dílna v pražských Holešovicích.</h1>
					</div>
					<div className="">
						<Button type="primary">Kurzy a Openstudio</Button>
					</div>
					<div>
						<Button type="secondary">Produkty</Button>
					</div>
					<SpinnerText className="absolute right-0 top-12 -translate-x-1/3 -translate-y-1/3 -z-10" />
				</div>
				<div>
					<Image src={HeroImage} alt="Hlinotéka" className="object-cover rounded-2xl max-h-96 shadow-2xl shadow-black/30" />
				</div>
			</div>
		</div>
	)
}