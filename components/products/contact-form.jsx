import Button from "@/components/button"

import { dmSans } from "@/components/fonts"

export default function ContactForm() {
	return (
		<div className="border-b border-b-hlinoteka-special">
			<div className="p-24 max-w-8xl mx-auto">
				<div className="flex flex-col justify-center text-center gap-6">
					<h2 className="text-2xl font-bold leading-tight">Nezávazná poptávka</h2>
					<div className={`${dmSans.className}`}>
						<div>Máte zájem o některé z našich produktů?</div>
						<div>Vyplňte formulář a my vás budeme kontaktovat.</div>
					</div>
					<form className="flex flex-col justify-center gap-5 w-5/12 mx-auto">
						<input type="text" placeholder="JMÉNO A PŘÍJMENÍ" className="text-center" />
						<input type="text" placeholder="E-MAIL" className="text-center" />
						<textarea name="" id="" cols="30" rows="10" placeholder="TEXT" className="text-center"></textarea>
						<div className="flex justify-center gap-4">
							<input type="checkbox" name="" id="" />
							<label htmlFor="" className={`${dmSans.className}`}>Souhlasím se <a>zpracováním osobních údajů</a></label>
						</div>
						<div className="w-auto">
							<Button type="primary">Odeslat</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}