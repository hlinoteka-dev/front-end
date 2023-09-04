import Image from "next/image"
import Button from "../button"
import ImageOffering from "@/public/images/home-offering.jpg"

import { dmSans } from "@/components/fonts"

export default function Offering() {
	return (
		<div className="border-b border-b-hlinoteka-special">
			<div className="grid grid-cols-1 lg:grid-cols-2 px-2 py-8 sm:p-12 lg:px-24 lg:py-20 max-w-8xl mx-auto">
				<div className="order-2 lg:order-1 flex flex-col justify-center gap-2">
					<h2 className="text-2xl pt-4 lg:py-2 font-bold leading-tight">Nabízíme</h2>
					<div className="w-full sm:w-[75%] py-2">
						<p className={`${dmSans.className} font-sans`}>Kurzy točení na kruhu, kurzy modelování z ruky<br />a openstudio určené pro individuální tvorbu. Můžete také využít možnost výpalů v naší elektrické peci.</p>
					</div>
					<div>
						<Button type="primary" className="w-full sm:w-auto">Zjistit více</Button>
					</div>
				</div>
				<div className="order-1 lg:order-2">
					<Image src={ImageOffering} alt="Kurzy točení na kruhu" className="object-cover rounded-2xl max-h-96 shadow-2xl shadow-black/30" />
				</div>
			</div>
		</div>
	)
}