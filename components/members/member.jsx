"use client"

import Image from "next/image"
import Button from "../button"
import { useState } from "react"
import ModalBlank from "../modal-blank"
import { dmSans } from "@/components/fonts"

export default function Member({ member }) {

	const { name, tel, email, photo, text, socials, modal } = member
	const photoUrl = `/images/members/${photo}`
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={`flex flex-col gap-4 ${dmSans.className}`}>
			<div className="overflow-hidden">
				<Image src={photoUrl} width={365} height={430}alt={name} className="w-full object-cover h-[320px] md:h-[420px] xl:h-auto lg:max-h-[480px] rounded-2xl shadow-2xl shadow-black/30" />
			</div>
			<div className="flex justify-between lg:flex-col gap-4">
				<div>
					{name}
					{socials.map((social, index) => (
						<div key={index}>
							<span>{social.name}</span>
							&nbsp;
							<a
								href={`${social.name == "IG" ? `https://www.instagram.com/${social.link}` : social.link}`}
								target="_blank"
							>
								<span className="text-hlinoteka-inactive hover:text-hlinoteka-active transition-colors duration-300 ease-in-out">{social.name == "IG" ? `@${social.link}` : social.link}</span>
							</a>
						</div>
					))}
				</div>
				<div className={`${!modal && "hidden"}`}>
					<Button type="icon" onClick={() => { setIsOpen(true) }}>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
						</svg>
					</Button>
					<ModalBlank isOpen={isOpen} setIsOpen={setIsOpen}>
						<div className={`relative p-6 ${dmSans.className}`}>
							<div className={`${(tel || email) && 'mb-4'} w-11/12`}>
								<p dangerouslySetInnerHTML={{ __html: text }} className="space-y-2"></p>
							</div>
							{tel && (
								<div>
									<span>tel:</span>
									&nbsp;
									<span className="text-hlinoteka-inactive"><a href={`tel:${tel.replace(/\s/g, '')}`} className="hover:text-hlinoteka-active transition-color duration-300" target="_blank">{tel}</a></span>
								</div>
							)}
							{email && (
								<div>
									<span>email:</span>
									&nbsp;
									<span className="text-hlinoteka-inactive"><a href={`mailto:${email}`} className="hover:text-hlinoteka-active transition-color duration-300" target="_blank">{email}</a></span>
								</div>
							)}
							<Button type="icon-dark" className="absolute top-4 right-4" onClick={() => { setIsOpen(false) }}>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
									<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</Button>
						</div>
					</ModalBlank>
				</div>
			</div>
		</div>
	)
}