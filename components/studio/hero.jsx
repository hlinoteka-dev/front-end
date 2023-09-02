import Button from "../button"
import SpinnerText from "../spinner-text"
import { dmSans } from "@/components/fonts"
import HeroGallery from "./hero-swiper"

export default function Hero() {
	return (
		<div className="border-b border-b-hlinoteka-special">
			<div className="grid grid-cols-2 px-24 pt-40 pb-24 max-w-8xl mx-auto">
				<div className="relative flex flex-col justify-center gap-2">
					<div className="w-[62%] py-2">
						<h1 className="text-2xl font-bold leading-tight">Hlinotéka vznikla jako společný projekt umělců pracujících a experimentujících s materiálem.</h1>
					</div>
					<div className="">
						<Button type="primary">Členové dílny</Button>
					</div>
					<SpinnerText className="absolute right-0 top-12 -translate-x-1/3 -translate-y-1/2 -z-10" />
				</div>
				<div className={`flex flex-col gap-4 justify-center w-8/12 ${dmSans.className}`}>
					<p>Jejímy členy jsou Karolína Kučerová, Johana Hnízdilová a Borek Smažinka a rezidenti Markéta Špundová, Timur Aloev a Olga Osnach.</p>
					<p>Prostor slouží jako laboratoř nápadů, studio pro práci rezidentů, makerspace, showroom našich produktů a vzdělávací centrum s lekcemi keramických technik. </p>
				</div>
			</div>
			<div>
			</div>
			<div className="px-24 max-w-8xl mx-auto">
				<div className="pb-24 relative before:absolute before:inset-0 before:-translate-x-full before:z-20 before:bg-gradient-to-l before:from-transparent before:to-hlinoteka-dark before:to-20% after:absolute after:inset-0 after:translate-x-full after:z-20 after:bg-gradient-to-r after:from-transparent after:to-hlinoteka-dark after:to-20%">
						<HeroGallery />
				</div>
			</div>
		</div>
	)
}