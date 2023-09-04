import Image from "next/image"
import Button from "../button"
import ImageOffering from "@/public/images/home-door.jpg"

import { dmSans } from "@/components/fonts"

export default function History() {
	return (
		<div className="border-b border-b-hlinoteka-special">
			<div className="grid grid-cols-1 lg:grid-cols-2 px-2 py-8 sm:p-12 lg:px-24 lg:py-20 max-w-8xl mx-auto">
				<div>
					<Image src={ImageOffering} alt="Kurzy točení na kruhu" className="object-cover rounded-2xl max-h-96 shadow-2xl shadow-black/30" />
				</div>
				<div className="mt-4 lg:mt-0 lg:ml-24 flex flex-col justify-center gap-2">
					<h2 className="text-2xl font-bold leading-tight">Keramická dílna</h2>
					<div className="w-full sm:w-[75%] py-2">
						<p className={`${dmSans.className} font-sans`}>Hlinotéka vznikla jako společný projekt umělců pracujících a experimentujících s materiálem.</p>
					</div>
					<div>
						<Button type="primary" className="w-full sm:w-auto">Zjistit více</Button>
					</div>
				</div>
			</div>
		</div>
	)
}