
import ProductCard from '@/components/ProductCard';
import React from 'react';

const ProductPage = async () => {
  // তোমার দেওয়া এপিআই সোর্স থেকেই ডেটা ফেচ করা হচ্ছে
  const res = await fetch('https://clothing-website-nextjs.vercel.app/data.json');
  const products = await res.json();

  return (
    <main className="min-h-screen bg-white py-10 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Elegant Page Header */}
        <div className="relative mb-16 flex flex-col items-center justify-between border-b border-neutral-100 pb-8 dark:border-neutral-900 md:flex-row md:items-end">
          <div>
            {/* Subtle Tagline */}
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-neutral-400 dark:text-neutral-500">
              Curated Collection
            </span>
            {/* Main Title */}
            <h1 className="mt-2 text-3xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-4xl">
              ALL PRODUCTS
            </h1>
          </div>
          
          {/* Product Count Badge */}
          <div className="mt-4 md:mt-0">
            <p className="text-xs font-semibold tracking-widest uppercase text-neutral-500 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-900/60 px-4 py-2 border border-neutral-100 dark:border-neutral-800">
              Showing <span className="font-bold text-neutral-950 dark:text-white">{products.length}</span> Silhouettes
            </p>
          </div>
        </div>

        {/* Responsive Luxury 4-Column Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
            products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          }
        </div>

      </div>
    </main>
  );
};

export default ProductPage;