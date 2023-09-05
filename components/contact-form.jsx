"use client"

import Button from "@/components/button"
import { dmSans } from "@/components/fonts"
import { useState } from "react"

export default function ContactForm() {

	const [checked, setChecked] = useState(false)

	return (
		<div className="border-b border-b-hlinoteka-special">
			<div className="px-8 py-12 lg:p-24 max-w-8xl mx-auto">
				<div className="flex flex-col justify-center text-center gap-6">
					<h2 className="text-2xl font-bold leading-tight">Kontaktujte nás</h2>
					<div className={`${dmSans.className}`}>
						<div>Máte jakýkoliv dotaz ohledně naší dílny?</div>
						<div>Vyplňte formulář a my vám ho radi zodpovíme.</div>
					</div>
					<form className="flex flex-col justify-center gap-5 w-full lg:w-5/12 mx-auto">
						<input type="text" placeholder="JMÉNO A PŘÍJMENÍ" className="text-center" />
						<input type="text" placeholder="E-MAIL" className="text-center" />
						<textarea name="" id="" cols="30" rows="10" placeholder="TEXT" className="text-center"></textarea>
						<div className="flex place-items-center gap-4">
							<input type="checkbox" name="" id="agree" className="hidden" checked={checked} onChange={() => setChecked(!checked)} />
							<button className={`bg-hlinoteka-dark border-2 border-hlinoteka-special rounded-full ${checked ? "p-2 bg-hlinoteka-special" : "p-4"}`} onClick={() => setChecked(!checked)} type="button">
								{checked && (
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
										<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
									</svg>
								)}
							</button>
							<label htmlFor="agree" className={`${dmSans.className}`}>Souhlasím se <a className="underline hover:no-underline" href="#" target="_blank">zpracováním osobních údajů</a></label>
						</div>
						<div className="w-auto">
							<Button type="primary" className="w-full sm:w-auto">Odeslat</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}