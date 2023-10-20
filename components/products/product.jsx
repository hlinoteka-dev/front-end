"use client";

import Button from "../button";
import Image from "next/image";
import { dmSans } from "@/components/fonts";
import GalleryBlank from "../gallery/gallery-blank";
import ModalBlank from "../modal-blank";
import { useState } from "react";
import ContactForm from "./contact-form";

export default function Product({ product }) {
  const { _id, name, price, author, size, topProduct, newProduct, images } = product;
  const [GalleryOpen, setGalleryOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative h-[430px] border-2 border-hlinoteka-dark hover:border-hlinoteka-special overflow-hidden rounded-2xl shadow-2xl shadow-black/30 cursor-pointer">
        <Image
          src={images[0].url}
          width={365}
          height={430}
          className="w-[100%] h-[100%] object-cover"
          alt={name}
          onClick={() => {
            setGalleryOpen(true);
          }}
        />
        {newProduct && <span className="absolute top-2 right-2 px-4 py-1.5 text-xs bg-hlinoteka-special text-hlinoteka-light rounded-2xl">NOVINKA</span>}
      </div>
      <div className={`flex flex-col ${dmSans.className} text-md`}>
        <span>
          {name}&nbsp;<span className="text-hlinoteka-inactive font-bold">{price}</span>
        </span>
        <span>Autor:&nbsp;{author}</span>
        <span>{size}</span>
      </div>
      <div>
        <Button type="secondary" className="text-xs" onClick={() => setContactOpen(true)}>
          Mám zájem
        </Button>
      </div>
      <GalleryBlank indexFirstImage={0} images={images} isOpen={GalleryOpen} setIsOpen={setGalleryOpen} />
      <ModalBlank isOpen={contactOpen} setIsOpen={setContactOpen}>
        <div className={`relative p-6 ${dmSans.className}`}>
          <ContactForm />
          <Button
            type="icon-dark"
            className="absolute top-4 right-4"
            onClick={() => {
              setContactOpen(false);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Button>
        </div>
      </ModalBlank>
    </div>
  );
}
