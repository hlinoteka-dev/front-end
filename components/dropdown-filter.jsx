'use client'

import { useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'

export default function Select({ onOptionChange }) {

	const [selected, setSelected] = useState(1)

	const options = [
		{
			id: 0,
			period: 'Top',
			key: "topProduct"
		},
		{
			id: 1,
			period: 'Autor',
			key: "author"
		},
		{
			id: 2,
			period: 'Nejnovější',
			key: "newProduct"
		}
	]

	// useEffect(() => {
	// 	onOptionChange(options[selected].key)
	// }, [selected])

	return (
		<Menu as="div" className="relative inline-flex">
			{({ open }) => (
				<>
					<Menu.Button className="px-4 py-2 btn flex justify-between items-center min-w-[18rem] bg-hlinoteka-gray text-hlinoteka-light hover:text-hlinoteka-active rounded-2xl" aria-label="Select date range">
						<span className="flex items">
							<span className="uppercase">{options[selected].period}</span>
						</span>
						<svg className="shrink-0 ml-1 fill-current text-hlinoteka-light" width="11" height="7" viewBox="0 0 11 7">
							<path d="M5.4 6.8L0 1.4 1.4 0l4 4 4-4 1.4 1.4z" />
						</svg>
					</Menu.Button>
					<Transition
						className="z-10 absolute top-full right-0 w-full bg-hlinoteka-gray py-1.5 rounded shadow-lg overflow-hidden mt-1"
						enter="transition ease-out duration-100 transform"
						enterFrom="opacity-0 -translate-y-2"
						enterTo="opacity-100 translate-y-0"
						leave="transition ease-out duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Menu.Items className="font-medium text-sm text-hlinoteka-light focus:outline-none">
							{options.map((option, optionIndex) => (
								<Menu.Item key={optionIndex}>
									{({ active }) => (
										<button
											className={`flex items-center w-full py-1 px-3 cursor-pointer ${active ? 'bg-hlinoteka-inactive' : ''} ${option.id === selected && 'text-hlinoteka-active'}`}
											onClick={() => { setSelected(option.id) }}
										>
											<svg className={`shrink-0 mr-2 fill-current text-hlinoteka-active ${option.id !== selected && 'invisible'}`} width="12" height="9" viewBox="0 0 12 9">
												<path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
											</svg>
											<span>{option.period}</span>
										</button>
									)}
								</Menu.Item>
							))}
						</Menu.Items>
					</Transition>
				</>
			)}
		</Menu>
	)
}