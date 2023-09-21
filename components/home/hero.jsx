import Image from "next/image"
import Button from "../button"
import HeroImage from "@/public/images/home-hero-main.jpg"
import SpinnerText from "../spinner-text"
import Link from "next/link"

export default function Hero() {
	return (
		<div className="border-b border-b-hlinoteka-special">
			<div className="grid grid-cols-1 lg:grid-cols-2 px-2 py-8 sm:p-12 lg:px-24 lg:py-20 max-w-8xl mx-auto">
				<div className="order-2 lg:order-1 relative flex flex-col justify-center gap-2">
					<div className="lg:w-[62%] pt-6 pb-4 lg:py-2 z-10">
						<h1 className="text-xl md:text-2xl font-bold leading-tight">Hlinotéka je nezávislá keramická dílna v pražských Holešovicích.</h1>
					</div>
					<div className="">
						<Link href="/sluzby">
							<Button type="primary" className="w-full sm:w-auto text-xs">Kurzy a Openstudio</Button>
						</Link>
					</div>
					<div className="">
						<Link href="/produkty">
							<Button type="secondary" className="w-full sm:w-auto text-xs">Produkty</Button>
						</Link>
					</div>
					<SpinnerText className="absolute right-0 bottom-12 lg:top-12 translate-x-1/3 lg:-translate-x-1/3 lg:-translate-y-1/3 scale-75 z-5 lg:-z-10" />
				</div>
				<div className="order-1 lg:order-2">
					<Image src={HeroImage} alt="Hlinotéka" className="object-cover rounded-2xl max-h-96 shadow-2xl shadow-black/30" />
				</div>
			</div>
		</div>
	)
}