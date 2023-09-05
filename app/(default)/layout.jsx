import '../globals.css'
import Header from '@/components/header'
import { pano } from '@/components/fonts'

export const metadata = {
	title: 'Hlinotéka',
	description: 'Hlinotéka je keramický ateliér v Praze, který nabízí lekce točení na kruhu, kurz modelování z ruky a openstudio určené pro individuální tvorbu. Můžete také využít možnost výpalů v naší elektrické peci. Ve vybavení máme tři hrnčířské kruhy, dva velké modelovací stoly a dvě pece o obsahu 120l a 60l.',
}
export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${pano.variable} font-sans`}>
			<body className="bg-hlinoteka-dark text-hlinoteka-light px-4 sm:px-8 mx-auto">
				<Header />
				<div className="mt-20 overflow-hidden">
					{children}
				</div>
			</body>
		</html>
	)
}
