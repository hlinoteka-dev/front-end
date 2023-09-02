import Image from "next/image"
import Button from "../button"
import ImageOffering from "@/public/images/home-offering.jpg"

import { dmSans } from "@/components/fonts"

export default function Offering() {
	return (
		<div className="border-b border-b-hlinoteka-special">
			<div className="grid grid-cols-2 px-24 py-20 max-w-8xl mx-auto">
				<div className="flex flex-col justify-center gap-2">
					<h2 className="text-2xl font-bold leading-tight">Nabízíme</h2>
					<div className="w-[75%] py-2">
						<p className={`${dmSans.className} font-sans`}>Kurzy točení na kruhu, kurzy modelování z ruky<br />a openstudio určené pro individuální tvorbu. Můžete také využít možnost výpalů v naší elektrické peci.</p>
					</div>
					<div>
						<Button type="primary">Zjistit více</Button>
					</div>
				</div>
				<div>
					<Image src={ImageOffering} alt="Kurzy točení na kruhu" className="object-cover rounded-2xl max-h-96 shadow-2xl shadow-black/30" />
				</div>
			</div>
		</div>
	)
}