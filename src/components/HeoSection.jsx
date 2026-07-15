"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import { ArrowRight } from "@gravity-ui/icons";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-neutral-950 px-6 py-20 md:px-12 lg:px-24">
      {/* Background Subtle Gradient & Overlay Patterns */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/20 z-10" />
       
        <Image
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1600"
          alt="Premium Men's Fashion Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transition-transform"
        />
      </div>

      {/* Hero Content Area */}
      <div className="container relative z-20 mx-auto flex flex-col items-start max-w-7xl">
        
        <div className="mb-4 flex items-center gap-2">
          <span className="h-[1px] w-8 bg-amber-500/80" />
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-amber-500/90">
            Summer Collection 2026
          </span>
        </div>

        <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          ELEVATE YOUR <br />
          <span className="font-light italic text-neutral-300">Everyday Look</span>
        </h1>

        <p className="mt-6 max-w-lg text-sm leading-relaxed text-neutral-300 md:text-base">
          Experience the ultimate blend of luxury, comfort, and sustainable design. 
          Discover minimalist aesthetics curated for the modern wardrobe.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          {/* Main CTA: Explore Collection */}
          <Button
            as={Link}
            href="/products"
            size="lg"
            radius="none"
            className="group h-14 bg-white px-8 text-sm font-semibold tracking-widest uppercase text-black transition-all hover:bg-neutral-200"
            endContent={
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            }
          >
            Explore Collection
          </Button>

          <Button
            as={Link}
            href="/products?category=new"
            variant="bordered"
            size="lg"
            radius="none"
            className="h-14 border-white/30 px-8 text-sm font-semibold tracking-widest uppercase text-white transition-all hover:border-white hover:bg-white/10"
          >
            New Arrivals
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-white/10 pt-8 sm:grid-cols-3">
          <div>
            <p className="text-xl font-bold tracking-wider text-white">01 / UNIQUE</p>
            <p className="mt-1 text-xs text-neutral-400">Handcrafted & Limited Run</p>
          </div>
          <div>
            <p className="text-xl font-bold tracking-wider text-white">02 / ECOLOGIC</p>
            <p className="mt-1 text-xs text-neutral-400">100% Organic & Recycled</p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-xl font-bold tracking-wider text-white">03 / PREMIUM</p>
            <p className="mt-1 text-xs text-neutral-400">Lifetime Quality Guarantee</p>
          </div>
        </div>

      </div>
    </section>
  );
}