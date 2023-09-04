"use client"

import { dmSans } from '@/components/fonts'

export default function AccordionBasic({ children, title,  className, open, onClick }) {

	return (
		<div className={`px-5 py-4 rounded-sm ${className}`}>
			<button
				className={`flex items-center w-full group ${open && 'mb-6'}`}
				aria-expanded={open}
				onClick={onClick}
			>
				<div
					className="p-[8px] bg-hlinoteka-gray hover:bg-hlinoteka-active text-hlinoteka-active hover:text-hlinoteka-dark text-xs font-bold uppercase rounded-3xl transition-colors duration-300 ease-in-out">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${open && 'rotate-45'}`}>
						<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
					</svg>
				</div>
				<div className="ml-6 text-hlinoteka-light sm:text-xl text-left">{title}</div>
			</button>
			<div className={`${!open && 'hidden'} ${dmSans.className} pb-4`}>
				{children}
			</div>
		</div>
	)
}
