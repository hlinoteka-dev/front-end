'use client'

import { useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import { fetchTags } from '@/actions/fetchTags'
import { fetchAuthors } from '@/actions/fetchAuthors'

export default function Select({ query }) {

	const [selectedOption, setSelectedOption] = useState(query.sortBy === "topProduct" ? 0 : query.sortBy === "author" ? 1 : query.sortBy === "type" ? 2 : 0)
	const [tags, setTags] = useState([])
	const [authors, setAuthors] = useState([])
	const [selectedTag, setSelectedTag] = useState(null)
	const [selectedAuthor, setSelectedAuthor] = useState(null)

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
			period: 'Podle typu',
			key: "type"
		}
	]

	useEffect(() => {
		fetchTags().then((tags) => {
			if (query.tag) {
				setSelectedTag({ _id: query.tag, name: tags.length > 0 ? tags.find((tag) => tag._id === query.tag).name : 'Všechny' })
			} else {
				setSelectedTag({ _id: "", name: 'Všechny' })
			}
			setTags([{
				_id: "",
				name: 'Všechny',
			},
			...tags])
		})
		fetchAuthors().then((authors) => {
			if (query.author) {
				setSelectedAuthor( () => authors.length > 0 ? authors.find((author) => author === query.author) : 'Všichni')
			} else {
				setSelectedAuthor("Všichni")
			}
			setAuthors(['Všichni', ...authors])
		})
	}, [])

	return (
		<>
			<Menu as="div" className="relative inline-flex">
				{({ open }) => (
					<>
						<Menu.Button className="px-4 py-2 btn flex justify-between items-center min-w-[18rem] bg-hlinoteka-gray text-hlinoteka-light hover:text-hlinoteka-active rounded-2xl" aria-label="Select date range">
							<span className="flex items">
								<span className="uppercase">{options[selectedOption].period}</span>
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
											<Link
												href={`/produkty?sortBy=${option.key}`}
												className={`flex items-center w-full py-1 px-3 cursor-pointer ${active ? 'bg-hlinoteka-inactive' : ''} ${option.id === selectedOption && 'text-hlinoteka-active'}`}
												onClick={() => { setSelectedOption(option.id) }}
											>
												<svg className={`shrink-0 mr-2 fill-current text-hlinoteka-active ${option.id !== selectedOption && 'invisible'}`} width="12" height="9" viewBox="0 0 12 9">
													<path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
												</svg>
												<span>{option.period}</span>
											</Link>
										)}
									</Menu.Item>
								))}
							</Menu.Items>
						</Transition>
					</>
				)}
			</Menu>
			{selectedOption === 1 && (
				<Menu as="div" className="ml-4 relative inline-flex">
					{({ open }) => (
						<>
							<Menu.Button className="px-4 py-2 btn flex justify-between items-center min-w-[18rem] bg-hlinoteka-gray text-hlinoteka-light hover:text-hlinoteka-active rounded-2xl" aria-label="Select date range">
								<span className="flex items">
									<span className="uppercase">{selectedAuthor ? selectedAuthor : 'Všichni'}</span>
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
									{authors.map((author, authorIndex) => (
										<Menu.Item key={authorIndex}>
											{({ active }) => (
												<Link
													href={`/produkty?sortBy=author&author=${author}`}
													className={`flex items-center w-full py-1 px-3 cursor-pointer ${active ? 'bg-hlinoteka-inactive' : ''} ${author === selectedAuthor && 'text-hlinoteka-active'}`}
													onClick={() => { setSelectedAuthor(author) }}
												>
													<svg className={`shrink-0 mr-2 fill-current text-hlinoteka-active ${author !== selectedAuthor && 'invisible'}`} width="12" height="9" viewBox="0 0 12 9">
														<path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
													</svg>
													<span>{author}</span>
												</Link>
											)}
										</Menu.Item>
									))}
								</Menu.Items>
							</Transition>
						</>
					)}
				</Menu>
			)}
			{selectedOption === 2 && (
				<Menu as="div" className="ml-4 relative inline-flex">
					{({ open }) => (
						<>
							<Menu.Button className="px-4 py-2 btn flex justify-between items-center min-w-[18rem] bg-hlinoteka-gray text-hlinoteka-light hover:text-hlinoteka-active rounded-2xl" aria-label="Select date range">
								<span className="flex items">
									<span className="uppercase">{selectedTag ? tags.find((tag) => tag._id === selectedTag._id).name : 'Všechny'}</span>
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
									{tags.map((tag, tagIndex) => (
										<Menu.Item key={tagIndex}>
											{({ active }) => (
												<Link
													href={`/produkty?sortBy=type&tag=${tag._id}`}
													className={`flex items-center w-full py-1 px-3 cursor-pointer ${active ? 'bg-hlinoteka-inactive' : ''} ${tag._id === selectedTag._id && 'text-hlinoteka-active'}`}
													onClick={() => { setSelectedTag(tag) }}
												>
													<svg className={`shrink-0 mr-2 fill-current text-hlinoteka-active ${tag._id !== selectedTag._id && 'invisible'}`} width="12" height="9" viewBox="0 0 12 9">
														<path d="M10.28.28L3.989 6.575 1.695 4.28A1 1 0 00.28 5.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28.28z" />
													</svg>
													<span>{tag.name}</span>
												</Link>
											)}
										</Menu.Item>
									))}
								</Menu.Items>
							</Transition>
						</>
					)}
				</Menu>
			)}
		</>
	)
}
