"use client";

import Link from "next/link";
import Image from "next/image"; // Next.js Image Component ইমপোর্ট করা হলো
import { Button } from "@heroui/react";
import { ArrowRight } from "@gravity-ui/icons";

export default function EditorialSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-neutral-950 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-8">
          
          {/* LEFT PART: Asymmetric Overlapping Lookbook Collage (Cols 1-7) */}
          <div className="relative flex h-[550px] w-full items-center justify-center lg:col-span-7">
            
            {/* Background Elegant Frame (Decorative) */}
            <div className="absolute -left-4 top-10 h-[80%] w-[70%] border border-neutral-100 bg-neutral-50/50 dark:border-neutral-900 dark:bg-neutral-900/30 -z-10" />

            {/* Main Image 01: Large Vertical Portrait (Men's Premium Overcoat Style) */}
            <div className="absolute left-0 top-0 z-10 h-[450px] w-[60%] overflow-hidden bg-neutral-100 shadow-xl transition-all duration-700 hover:z-20 hover:scale-[1.02]">
              <Image
                src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800"
                alt="Oxivos premium men's tailored look"
                fill
                sizes="(max-width: 1024px) 60vw, 35vw"
                priority // উপরের দিকের ইমেজ হওয়ায় এটিকে দ্রুত লোড করার জন্য priority দেওয়া হয়েছে
                className="object-cover object-center"
              />
            </div>

            {/* Overlapping Image 02: Smaller Square Offset Portrait (Men's Minimalist Suit Detail) */}
            <div className="absolute right-0 bottom-0 z-20 h-[300px] w-[50%] overflow-hidden border-8 border-white bg-neutral-100 shadow-2xl transition-all duration-700 hover:scale-[1.05] dark:border-neutral-950">
              <Image
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600"
                alt="Oxivos minimalist men's tailoring detail"
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover object-center"
              />
            </div>
            
          </div>

          {/* RIGHT PART: Bold Brand Philosophy & Typography (Cols 8-12) */}
          <div className="lg:col-span-5 lg:pl-6">
            
            {/* Subtle Line Accent */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-6 bg-neutral-900 dark:bg-white" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-neutral-500">
                Art De Vivre
              </span>
            </div>

            {/* Giant Statement Title */}
            <h2 className="text-4xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-5xl">
              DESIGNED <br />
              TO BE <br />
              <span className="font-light italic text-neutral-400 dark:text-neutral-500">
                Remembered.
              </span>
            </h2>

            {/* Editorial Body Text */}
            <p className="mt-8 text-sm font-medium leading-relaxed text-neutral-500 dark:text-neutral-400">
              Style is a deeply personal form of self-expression. At OXIVOS, we craft minimalist silhouettes that speak volume without making a noise.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-neutral-400 dark:text-neutral-500">
              Each garment undergoes a meticulous design process, utilizing high-grade organic fibers and ethically sourced materials designed to endure generations.
            </p>

            {/* Solid Minimalist Action CTA Button with Next.js Link Integration */}
            <div className="mt-10">
              <Button
                href="/products"
                radius="none"
                size="lg"
                className="group h-12 bg-neutral-900 px-6 text-xs font-bold tracking-[0.2em] uppercase text-white transition-all hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                endContent={
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                }
              >
                Explore The Story
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}