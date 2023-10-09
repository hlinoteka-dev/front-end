"use client"

import AccordionBasic from "../accordion-basic"
import Button from "../button"
import ServiceSwiper from "./service-swiper"
import ServiceSwiperButtons from "./service-swiper-buttons"
import { dmSans } from '@/components/fonts'

export default function Accordion() {

	const accordions = [
		{
			className: "border-t border-hlinoteka-special",
			title: "Openstudio",
			subtitle1: "Cena: 750,-/3hod",
			subtitle2: "Každé pondělí a čtvrtek od 18:00 do 21:00",
			textA1: "<p>Openstudio je prostor pro individuální vlastní tvorbu s využitím naší dílny a jejího vybavení. Je určeno pro všechny, kteří u nás absolvovali kurz, nebo již s keramikou mají zkušenosti. Openstudio můžete využít pro všechny druhy keramické tvorby, jak modelování, tak točení na hrnčířském kruhu. Volba je jen na vás. K dispozici máme velký pracovní stůl a tři hrnčířské kruhy. Openstudio má maximální kapacitu čtyři osoby, takže v Hlinotéce vždy najdete dostatek prostoru i soukromí svou tvorbu.</p>",
			textA2: "<p>V ceně openstudia je zahrnutý veškerý materiál, glazury i cena za výpal v peci. K dispozici budete mít ruční nástroje, kyblíky na vodu, válečky atd. V ceně je tedy vše, co k práci potřebujete. V kuchyňce si můžete kdykoliv uvařit čaj nebo kávu.</p>",
			textA3: "<p></p>",
			textB1: "<p>V časovém úseku vymezeném pro práci je také započítána příprava i úklid po práci. Takže je potřeba si vše dobře dopředu rozvrhnout.</p>",
			textB2: "<p>Počítejte také s tím, že pokud potřebujete v práci pokračovat, je důležité si naplánovat i dalšítermín.</p>",
			textB3: "<p><strong>Openstudio se platí předem</strong> a to převodem na účet 2402435196/2010</p>",
			button: "Rezervace",
			images: [
				{
					url: "/images/services/26A1575.jpg",
					width: 667,
					height: 1000
				},
				{
					url: "/images/services/26A1561.jpg",
					width: 1360,
					height: 1000
				},
				{
					url: "/images/services/IMG2372.jpg",
					width: 750,
					height: 1000
				},
				{
					url: "/images/services/IMG6303.jpg",
					width: 750,
					height: 1000
				}
			]
		},
		{
			className: "border-t border-hlinoteka-special",
			title: "Kurz točení na hrnčířském kruhu",
			subtitle1: "Cena: 3600,- Kč",
			subtitle2: "Probíhá jednou měsíčně (pondělí, úterý a čtvrtek) vždy ve večerních hodinách.",
			textA1: "<p>Tento \"týdenní\" (4 x 2,5h) kurz je zaměřený na točení na hrnčířském kruhu. Během prvních dvou večerů budeme vytáčet základní tvary jako malou misku a nebo šálek. Třetí večer budeme tzv. obtáčet výrobky do jejich finálního tvaru a cca o dva týdny později si projdeme základní techniky glazování vašich vytočených objektů. Mezi třetí a čtvrtou částí kurzu musíme Vaše předměty vysušit a vypálit prvním nízkým výpalem tzv. přežahem (900C). Proto potřebujeme jeden až dva týdny před glazováním.</p>",
			textA2: "<p>V ceně kurzu jsou dva po sobě jdoucí výpaly v peci a veškerý spotřebovaný materiál, jak hlína tak glazury.</p>",
			textA3: "<p></p>",
			textB1: "<p></p>",
			textB2: "<p></p>",
			textB3: "<p></p>",
			button: "Rezervace",
			images: [
				{
					url: "/images/services/IMG8428.jpg",
					width: 750,
					height: 1000
				},
				{
					url: "/images/services/IMG8430.jpg",
					width: 750,
					height: 1000
				},
				{
					url: "/images/services/IMG8435.jpg",
					width: 750,
					height: 1000
				},
				{
					url: "/images/services/IMG8443.jpg",
					width: 1334,
					height: 1000
				},
				{
					url: "/images/services/IMG8467.jpg",
					width: 750,
					height: 1000
				}
			]
		},
		{
			className: "border-t border-hlinoteka-special",
			title: "Kurz modelování z ruky",
			subtitle1: "Cena: 2000,- Kč",
			subtitle2: "Probíhá jednou měsíčně vždy v sobotu.",
			textA1: "<p>Jednodenní kurz modelování (5h+2h) je určený pro ty, kteří se chtějí naučit základní techniky modelování, lepení a stavění z plátů. Během prvního dne si vymodelujeme několik objektů, na kterých si zkusíme zmíněné techniky. O dva týdny později proběhne lekce glazování, kde si všechny vaše výtvory naglazujeme. Na glazovací den potřebujeme nejdříve všechny vaše věci vysušit a poté vypálit na teplotu 900°C (tzv. přežah), proto potřebujeme jeden až dva týdny mezi první a druhou částí kurzu.</p>",
			textA2: "<p>V ceně kurzu jsou zahrnuty dva potřebné výpaly vašich výrobků a veškerý spotřebovaný materiál.</p>",
			textA3: "<p></p>",
			textB1: "<p></p>",
			textB2: "<p></p>",
			textB3: "<p></p>",
			button: "Rezervace",
			images: [
				{
					url: "/images/services/Hlinoteka_Juan-Calderon_-123.jpg",
					width: 1500,
					height: 1000
				},
				{
					url: "/images/services/Hlinoteka_Juan-Calderon_-139.jpg",
					width: 667,
					height: 1000
				},
				{
					url: "/images/services/Hlinoteka_Juan-Calderon_-145.jpg",
					width: 750,
					height: 1000
				},
				{
					url: "/images/services/Hlinoteka_Juan-Calderon_-188.jpg",
					width: 750,
					height: 1000
				}
			]
		},
		{
			className: "border-t border-b border-hlinoteka-special",
			title: "Výpaly",
			subtitle1: "",
			subtitle2: "V rámci naší dílny nabízíme i výpaly vašich produktů, které jste vytvořili jinde.",
			textA1: "<p>Vypalujeme v poklopové peci Rohde, jejíž vnitřní rozměr je 55x65 cm (šířka x výška). Výpal s glazurou klasicky provádíme na 1100 stupňů, v případě že potřebujete teplotu jinou, můžeme se individuálně domluvit.</p>",
			textA2: "<p>Cena za jeden výpal celé pece je 1800,-.<br />Cena za přežah je 1500,-.</p>",
			textA3: "<p>Pokud nenaplníte celou pec, bude se cena odvíjet od objemu vašich výrobků, ale poloprázdnou pec zapínáme neradi.</p>",
			textB1: "<p></p>",
			textB2: "<p></p>",
			textB3: "<p></p>",
			button: "Rezervace",
			images: [
				{
					url: "/images/services/IMG3966.jpg",
					width: 750,
					height: 1000
				},
				{
					url: "/images/services/IMG3916.jpg",
					width: 1180,
					height: 1000
				},
				{
					url: "/images/services/IMG3910.jpg",
					width: 750,
					height: 1000
				},
				{
					url: "/images/services/IMG1503.jpg",
					width: 750,
					height: 1000
				}
			]
		}
	]

	return (
		<div name="services">
			<div className="relative">
				<div className="py-8 lg:px-24 lg:pt-20 lg:pb-28 max-w-8xl mx-auto">
					<div className="">
						{accordions.map((accordion, index) => (
							<AccordionBasic title={accordion.title} className={accordion.className} key={index}>
								<div className="flex flex-col">
									<div className={`mb-4 w-full flex justify-between items-center ${dmSans.className}`}>
										{(accordion.subtitle1 || accordion.subtitle2) && (
											<div className="flex flex-col">
												{accordion.subtitle1 && (<span className="text-hlinoteka-inactive">{accordion.subtitle1}</span>)}
												{accordion.subtitle2 && (<span>{accordion.subtitle2}</span>)}
											</div>
										)}
										<ServiceSwiperButtons index={index} />
									</div>
									<div className="mb-8 relative before:absolute before:inset-0 before:-translate-x-full before:z-20 before:bg-gradient-to-l before:from-transparent before:to-hlinoteka-dark before:to-20% after:absolute after:inset-0 after:translate-x-full after:z-20 after:bg-gradient-to-r after:from-transparent after:to-hlinoteka-dark after:to-20% before:pointer-events-none after:pointer-events-none">
										<ServiceSwiper images={accordion.images} index={index} />
									</div>
									<div className={`lg:mb-8 grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-4 ${dmSans.className}`}>
										<div className="space-y-4" dangerouslySetInnerHTML={{ __html: accordion.textA1 + accordion.textA2 + accordion.textA3 }}></div>
										<div className="space-y-4" dangerouslySetInnerHTML={{ __html: accordion.textB1 + accordion.textB2 + accordion.textB3 }}></div>
									</div>
									<div>
										<Button type="secondary" className="text-xs px-12 w-full md:w-auto">
											<a href="https://hlinoteka.reenio.cz/" target="_blank" rel="noopener noreferrer">
												{accordion.button}
											</a>
										</Button>
									</div>
								</div>
							</AccordionBasic>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}