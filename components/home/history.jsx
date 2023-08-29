import Image from "next/image"
import Button from "../ui/button"
import ImageOffering from "@/public/images/home-door.jpg"

import { dmSans } from "../../app/(default)/layout"

export default function History() {
	return (
		<div className="border-b border-b-hlinoteka-special">
			<div className="grid grid-cols-2 px-24 py-20 max-w-8xl mx-auto">
				<div>
					<Image src={ImageOffering} alt="Kurzy točení na kruhu" className="object-cover rounded-2xl max-h-96 shadow-2xl shadow-black/30" />
				</div>
				<div className="ml-24 flex flex-col justify-center gap-2">
					<h2 className="text-2xl font-bold leading-tight">Keramická dílna</h2>
					<div className="w-[75%] py-2">
						<p className={`${dmSans.className} font-sans`}>Hlinotéka vznikla jako společný projekt umělců pracujících a experimentujících s materiálem.</p>
					</div>
					<div>
						<Button type="primary">Zjistit více</Button>
					</div>
				</div>
			</div>
		</div>
	)
}