import Link from "next/link";
import ProductCard from "./ProductCard";
import { ArrowRight } from "@gravity-ui/icons";


const FeaturedProducts = async () => {
  // প্রোডাক্ট লিস্ট থেকে ডেটা ফেচ করা হচ্ছে
  const res = await fetch('https://clothing-website-nextjs.vercel.app/data.json');
  const products = await res.json();

  // slice(2, 5) দিয়ে ইনডেক্স ২, ৩ এবং ৪ (অর্থাৎ ৩য়, ৪র্থ ও ৫ ম প্রোডাক্ট) কেটে নেওয়া হলো
  const featuredProducts = products.slice(2, 5);

  return (
    <section className="min-h-fit !bg-white py-10 text-neutral-900 dark:!bg-white border-t border-neutral-100">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          {/* Subtle Tagline */}
          <span className="text-sm font-bold tracking-[0.4em] uppercase text-neutral-400">
            The Editorial Selection
          </span>
          {/* Main Title */}
          <h2 className="mt-3 text-3xl font-black tracking-tight text-neutral-950 sm:text-5xl uppercase">
            Featured Products
          </h2>
          {/* Decorative Minimal Line */}
          <div className="mt-4 h-[2px] w-10 bg-neutral-950" />
        </div>

        {/* 3-Column Premium Grid Layout */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
          {
            featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          }
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/products"
            className="group flex items-center gap-3 border border-neutral-950 bg-white px-8 py-4 text-xs font-bold tracking-[0.25em] uppercase text-neutral-950 transition-all duration-300 hover:bg-neutral-950 hover:text-white"
          >
            <span>View All Products</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;