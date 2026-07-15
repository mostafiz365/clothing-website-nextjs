"use client";

import { useState } from "react";
import Link from "next/link";
import { LocationArrowFill, TextAlignLeft, Xmark } from "@gravity-ui/icons";
import MyNavLink from "./MyNavLink";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-neutral-100 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80">
      <header className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
       
        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle */}
          <button
            className="text-neutral-700 transition-colors hover:text-black dark:text-neutral-300 dark:hover:text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <Xmark className="h-6 w-6" />
            ) : (
              <TextAlignLeft className="h-6 w-6" />
            )}
          </button>

          {/* Premium Typographic Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-white dark:bg-white dark:text-black transition-transform group-hover:rotate-12">
              <LocationArrowFill className="h-4 w-4" />
            </div>
            <span className="text-xl font-bold tracking-[0.2em] uppercase text-neutral-900 dark:text-white">
              OXIVOS
            </span>
          </Link>
        </div>

        {/* RIGHT PART: Desktop Navigation Links */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <MyNavLink 
              href="/" 
              className="text-sm font-medium tracking-wider uppercase text-neutral-600 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
            >
              Home
            </MyNavLink>
          </li>
          <li>
            <MyNavLink 
              href="/products" 
              className="text-sm font-medium tracking-wider uppercase text-neutral-600 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
            >
              Products
            </MyNavLink>
          </li>
          <li>
            <MyNavLink 
              href="/cart" 
              className="text-sm font-medium tracking-wider uppercase text-neutral-600 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
            >
              Cart
            </MyNavLink>
          </li>
        </ul>
      </header>

      {/* MOBILE DRAWER / MENU */}
      {isMenuOpen && (
        <div className="border-t border-neutral-100 bg-white dark:border-neutral-800 dark:bg-neutral-950 md:hidden animate-fade-in">
          <ul className="flex flex-col gap-1 p-6">
            <li>
              <MyNavLink 
                href="/" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-base font-semibold tracking-wide uppercase text-neutral-800 hover:text-black dark:text-neutral-200 dark:hover:text-white"
              >
                Home
              </MyNavLink>
            </li>
            <li>
              <MyNavLink 
                href="/products" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-base font-semibold tracking-wide uppercase text-neutral-800 hover:text-black dark:text-neutral-200 dark:hover:text-white"
              >
                Products
              </MyNavLink>
            </li>
            <li>
              <MyNavLink 
                href="/cart" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 text-base font-semibold tracking-wide uppercase text-neutral-800 hover:text-black dark:text-neutral-200 dark:hover:text-white"
              >
                Cart
              </MyNavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}