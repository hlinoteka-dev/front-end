import Button from "../button"
import SpinnerText from "../spinner-text"
import { dmSans } from "@/components/fonts"
import HeroGallery from "./hero-swiper"
import Link from "next/link"

export default function Hero() {
	return (
		<div className="border-b border-b-hlinoteka-special">
			<div className="grid grid-cols-1 lg:grid-cols-2 px-2 py-8 sm:p-12 lg:px-24 lg:py-20 lg:pt-40 lg:pb-24 max-w-8xl mx-auto">
				<div className="relative flex flex-col justify-center gap-2">
					<div className="lg:w-[62%] py-2">
						<h1 className="text-2xl font-bold leading-tight">Hlinotéka vznikla jako společný projekt umělců pracujících a experimentujících s materiálem.</h1>
					</div>
					<div className="mb-4">
						<Link href="/clenove">
							<Button type="primary" className="text-xs">Členové dílny</Button>
						</Link>
					</div>
					<SpinnerText className="absolute right-0 top-16 lg:top-12 lg:-translate-x-1/3 lg:-translate-y-1/2 scale-75 lg:scale-100 -z-10" />
				</div>
				<div className={`flex flex-col gap-4 justify-center xl:w-8/12 ${dmSans.className}`}>
					<p>Jejímy členy jsou Karolína Kučerová, Johana Hnízdilová a Borek Smažinka a rezidenti Markéta Špundová, Timur Aloev a Olga Osnach.</p>
					<p>Prostor slouží jako laboratoř nápadů, studio pro práci rezidentů, makerspace, showroom našich produktů a vzdělávací centrum s lekcemi keramických technik. </p>
				</div>
			</div>
			<div>
			</div>
			<div className="px-2 py-8 sm:px-12 sm:pb-12 lg:px-24 lg:py-0 max-w-8xl mx-auto">
				<div className="lg:pb-24 relative lg:before:absolute lg:before:inset-0 lg:before:-translate-x-full lg:before:z-20 lg:before:bg-gradient-to-l lg:before:from-transparent lg:before:to-hlinoteka-dark lg:before:to-20% lg:after:absolute lg:after:inset-0 lg:after:translate-x-full lg:after:z-20 after:bg-gradient-to-r lg:after:from-transparent lg:after:to-hlinoteka-dark lg:after:to-20%">
					<HeroGallery />
				</div>
			</div>
		</div>
	)
}