"use client"

import Button from "@/components/button"
import { dmSans } from "@/components/fonts"
import { useState } from "react"

export default function ContactForm() {

	const [checked, setChecked] = useState(false)
	const [loading, setLoading] = useState(false)
	const [message, setMessage] = useState("")

	// Send email via API
	const sendEmail = (event) => {
		setLoading(true)
		fetch("/api/mail", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				fullName: event.target.fullName.value,
				email: event.target.email.value,
				message: event.target.message.value,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.status === "success") {
					setMessage("Děkujeme za vaši zprávu. Brzy vám odpovíme.")
				} else if (data.status === "fail") {
					setMessage("Něco se pokazilo. Zkuste to prosím znovu.")
				}
				// clear fields
				event.target.fullName.value = ""
				event.target.email.value = ""
				event.target.message.value = ""
				setChecked(false)
				setLoading(false)
			});
		event.preventDefault();
	};

	return (
		<div className="border-b border-b-hlinoteka-special">
			<div className="px-8 py-12 lg:p-24 max-w-8xl mx-auto">
				<div className="flex flex-col justify-center text-center gap-6">
					<h2 className="text-2xl font-bold leading-tight">Kontaktujte nás</h2>
					<div className={`${dmSans.className}`}>
						<div>Máte jakýkoliv dotaz ohledně naší dílny?</div>
						<div>Vyplňte formulář a my vám ho radi zodpovíme.</div>
					</div>
					{message ? (
						<div className="flex flex-col justify-center w-full lg:w-5/12 mx-auto">
							<div className="p-4 my-2 text-center text-sm bg-hlinoteka-special rounded-2xl">{message}</div>
						</div>
					) : (
						<form className="flex flex-col justify-center gap-5 w-full lg:w-5/12 mx-auto" onSubmit={sendEmail}>
							<input type="text" name="fullName" placeholder="JMÉNO A PŘÍJMENÍ" className="text-center" required={true} />
							<input type="email" name="email" placeholder="E-MAIL" className="text-center" required={true} />
							<textarea name="message" id="" cols="30" rows="10" placeholder="TEXT" className="text-center" required={true} />
							<div className="flex place-items-center gap-4">
								<input type="checkbox" id="agree" className="hidden" checked={checked} onChange={() => setChecked(!checked)} required={true} />
								<button className={`bg-hlinoteka-dark border-2 border-hlinoteka-special rounded-full ${checked ? "p-2 bg-hlinoteka-special" : "p-4"}`} onClick={() => setChecked(!checked)} type="button">
									{checked && (
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
											<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
										</svg>
									)}
								</button>
								<label htmlFor="agree" className={`${dmSans.className}`}>Souhlasím se <a className="underline hover:no-underline" href="/privacy" target="_blank">zpracováním osobních údajů</a></label>
							</div>
							<div className="w-auto">
								<Button type={`${(checked && !loading) ? "primary" : "disabled"}`} className="w-full sm:w-auto text-xs" loading={loading}>Odeslat</Button>
							</div>
						</form>
					)}
				</div>
			</div>
		</div>
	)
}