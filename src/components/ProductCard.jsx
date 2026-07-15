"use client";

import Link from "next/link";
import Image from "next/image";
import { Card } from "@heroui/react";
import { ArrowRight } from "@gravity-ui/icons";

const ProductCard = ({ product }) => {
  const {
    id,
    name,
    category,
    price,
    image,
  } = product;

  return (
    <Card className="group relative w-full overflow-hidden rounded-none border border-neutral-100 !bg-white p-0 shadow-none transition-all duration-500 hover:shadow-lg dark:border-neutral-800 dark:!bg-white">
      
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-50 p-4">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={400}
            height={533}
            priority
            className="h-full w-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
          />
        </div>
      </div>

      <div className="flex flex-col items-start bg-white p-5 dark:bg-white">
        
        <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-neutral-400">
          {category}
        </span>
        
        <h3 className="mt-1 text-base font-bold tracking-tight text-neutral-900 line-clamp-1">
          <Link href={`/products/${id}`} className="focus:outline-none hover:text-neutral-600">
            {name}
          </Link>
        </h3>
        
        <p className="mt-2 text-sm font-black text-neutral-950">
          {price}
        </p>

        <Link
          href={`/products/${id}`}
          className="mt-5 flex w-full items-center justify-between h-11 bg-neutral-950 px-4 text-[10px] font-bold tracking-[0.25em] uppercase text-white transition-all duration-300 hover:bg-neutral-800"
        >
          <span>VIEW DETAILS</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </Link>
      </div>
      
    </Card>
  );
};

export default ProductCard;