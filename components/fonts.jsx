import localFont from 'next/font/local'
import { DM_Sans } from 'next/font/google'

export const pano = localFont({
	src: [
		{
			path: '../public/fonts/pano-regular.ttf',
			weight: '400',
		},
		{
			path: '../public/fonts/pano-bold.ttf',
			weight: '700',
		}
	],
	variable: '--font-pano'
})

export const dmSans = DM_Sans({ subsets: ['latin'] })