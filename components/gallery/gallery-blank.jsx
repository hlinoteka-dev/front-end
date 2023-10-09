"use client"

import { Dialog, Transition } from '@headlessui/react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Button from '../button'
import { dmSans } from '../fonts'

export default function GalleryBlank({ indexFirstImage, images, isOpen, setIsOpen }) {

	const [index, setIndex] = useState(indexFirstImage || 0)
	const [total, setTotal] = useState(images.length)

	useEffect(() => {
		if (indexFirstImage !== undefined) {
			setIndex(indexFirstImage)
		}
		setTotal(images.length)
		function handleKeyDown(e) {
			if (e.key === 'ArrowLeft') {
				setIndex(index - 1 < 0 ? 0 : index - 1)
			}
			if (e.key === 'ArrowRight') {
				setIndex(index + 1 > total - 1 ? index : index + 1)
			}
		}
		window.addEventListener('keydown', handleKeyDown)
		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [images, indexFirstImage, total])


	return (
		<Transition appear show={isOpen}>
			<Dialog as="div" onClose={() => {
				setIsOpen(false); 
				if (indexFirstImage !== undefined) {
					setIndex(indexFirstImage)
				} else {
					setIndex(0)
				}
			}}>
				<Transition.Child
					className="fixed inset-0 bg-hlinoteka-dark bg-opacity-90 z-50 transition-opacity"
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
					<Dialog.Panel className="flex justify-center items-center">
						<div>
							<div className="mb-4 flex justify-between text-left">
								<span>{index + 1} / {total}</span>
								<Button type="icon-dark" className="" onClick={() => { setIsOpen(false) }}>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
										<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</Button>
							</div>
							<div className="md:px-8 w-full grid grid-cols-10 items-center">
								<div className='w-full col-span-1 text-left'>
									{index - 1 >= 0 && (
										<Button type="icon" onClick={() => { setIndex(index - 1 < 0 ? 0 : index - 1) }}>
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
												<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
											</svg>
										</Button>
									)}
								</div>
								<Image src={images[index].url} width={1024} height={1024} alt={images[index].text || ""} className="w-full h-full max-w-3xl max-h-[48rem] col-span-8 rounded-2xl" />
								<div className='w-full col-span-1 text-right'>
									{index + 1 < total && (
										<Button type="icon" onClick={() => { setIndex(index + 1 > total - 1 ? index : index + 1) }}>
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
												<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
											</svg>
										</Button>
									)}
								</div>
							</div>
							{images[index].description && (
								<div className={`mt-4 text-center ${dmSans.className}`}>
									<span>{images[index].description}</span>
								</div>
							)}
						</div>
					</Dialog.Panel>
				</Transition.Child>
			</Dialog>
		</Transition>
	)
}
