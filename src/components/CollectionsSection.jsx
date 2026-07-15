"use client";

import Link from "next/link";
import { ArrowRight } from "@gravity-ui/icons";

export default function CollectionsSection() {
  const collections = [
    {
      title: "Women's Edit",
      tagline: "Effortless Silhouettes",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600",
      link: "/products?category=women"
    },
    {
      title: "Men's Atelier",
      tagline: "Tailored Minimalism",
      image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&w=600",
      link: "/products?category=men"
    },
    {
      title: "Curated Accents",
      tagline: "Timeless Accessories",
      image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&q=80&w=600",
      link: "/products?category=accessories"
    }
  ];

  return (
    <section className="bg-neutral-50 py-24 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-neutral-500">
            Curated Lines
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-neutral-950 dark:text-white md:text-4xl">
            SHOP BY COLLECTION
          </h2>
          <div className="mt-4 h-[2px] w-12 bg-neutral-950 dark:bg-white" />
        </div>

        {/* 3-Column Image Card Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {collections.map((col, idx) => (
            <Link 
              key={idx} 
              href={col.link} 
              className="group relative flex h-[450px] w-full items-end overflow-hidden bg-neutral-950 p-8"
            >
              {/* Background Zoom Image */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <img
                  src={col.image}
                  alt={col.title}
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Text & Action on top of image */}
              <div className="relative z-20 w-full text-white">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-300">
                  {col.tagline}
                </span>
                <h3 className="mt-1 text-2xl font-bold tracking-wide uppercase">
                  {col.title}
                </h3>
                
                {/* Underline and arrow that appears/extends on hover */}
                <div className="mt-4 flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white">
                  <span>Shop Now</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}