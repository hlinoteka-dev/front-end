
import { Dialog, Transition } from '@headlessui/react'
import { useState } from 'react'
import Image from 'next/image'
import Button from '../button'

export default function GalleryBlank({ images, isOpen, setIsOpen }) {

	const [index, setIndex] = useState(0)
	const [total, setTotal] = useState(images.length)

	return (
		<Transition appear show={isOpen}>
			<Dialog as="div" onClose={() => setIsOpen(false)}>
				<Transition.Child
					className="fixed inset-0 bg-hlinoteka-dark bg-opacity-50 z-50 transition-opacity"
					enter="transition ease-out duration-200"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition ease-out duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
					aria-hidden="true"
				/>
				<Transition.Child
					className="fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center px-4 sm:px-6"
					enter="transition ease-in-out duration-200"
					enterFrom="opacity-0 translate-y-4"
					enterTo="opacity-100 translate-y-0"
					leave="transition ease-in-out duration-200"
					leaveFrom="opacity-100 translate-y-0"
					leaveTo="opacity-0 translate-y-4"
				>
					<Dialog.Panel className="flex justify-center items-center bg-red-500 p-4">
						<div>
							<div className="flex justify-center items-center gap-16">
								<div>
									<Button type="icon" onClick={() => { setIndex(index - 1 < 0 ? 0 : index - 1) }}>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
										</svg>
									</Button>
								</div>
								<img src={images[index].url} alt={images[index].text} className="max-w-4xl max-h-[56rem] rounded-2xl" />
								<div>
									<Button type="icon" onClick={() => { setIndex(index + 1 > total - 1 ? index : index + 1) }}>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
											<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
										</svg>
									</Button>
								</div>
							</div>
							<div>
							<span><pre>{JSON.stringify(images[index], null, 2)}</pre></span>
							</div>
						</div>
					</Dialog.Panel>
				</Transition.Child>
			</Dialog>
		</Transition>
	)
}
