import Link from "next/link";
import {
  LogoLinkedin, 
  LogoFacebook, 
  LogoGithub,
  LocationArrowFill
} from "@gravity-ui/icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-100 bg-neutral-950 text-neutral-400 dark:border-neutral-900">
      
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-white text-black transition-transform group-hover:rotate-12">
                <LocationArrowFill className="h-4 w-4" />
              </div>
              <span className="text-lg font-bold tracking-[0.2em] uppercase text-white">
                OXIVOS
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-neutral-400">
              Crafting minimalist essentials and modern wardrobe classics. We combine sustainable materials with premium design.
            </p>
            {/* Social Icons with Elegant Circular Frames */}
            <div className="mt-6 flex gap-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-800 text-neutral-400 transition-colors hover:border-white hover:text-white" aria-label="Instagram">
                <LogoLinkedin className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-800 text-neutral-400 transition-colors hover:border-white hover:text-white" aria-label="Facebook">
                <LogoFacebook className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-800 text-neutral-400 transition-colors hover:border-white hover:text-white" aria-label="Pinterest">
                <LogoGithub className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2/12 cols) */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-sm font-bold tracking-[0.2em] uppercase text-white">Shop</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/products" className="transition-colors hover:text-white">All Products</Link></li>
              <li><Link href="/products?category=new" className="transition-colors hover:text-white">New Arrivals</Link></li>
              <li><Link href="/products?category=essentials" className="transition-colors hover:text-white">Essentials</Link></li>
            </ul>
          </div>

          {/* Column 3: Customer Care (2/12 cols) */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-sm font-bold tracking-[0.2em] uppercase text-white">Support</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="transition-colors hover:text-white">Size Guide</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Shipping & Returns</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4: Premium Newsletter (4/12 cols) */}
          <div className="lg:col-span-4">
            <h3 className="mb-4 text-sm font-bold tracking-[0.2em] uppercase text-white">The Oxivos Club</h3>
            <p className="mb-6 text-sm text-neutral-400">
              Subscribe to receive exclusive offers, early access to new collections, and design insights.
            </p>
          </div>

        </div>
      </div>

      {/* Lower Footer: Copyright & Fine Print */}
      <div className="border-t border-neutral-900 bg-black">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs md:flex-row">
          <p className="text-neutral-500">
            &copy; {currentYear} OXIVOS. All rights reserved. Built for professional submission.
          </p>
          <div className="flex gap-6 text-neutral-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

    </footer>
  );
}