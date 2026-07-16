'use client';

import React, { useState, useEffect, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import { Input } from "@heroui/react";

const ProductPage = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://clothing-website-nextjs.vercel.app/data.json');
        const data = await res.json();
        setAllProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    if (search.trim() !== '') {
      result = result.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== '') {
      result = result.filter(product => product.category === category);
    }

    if (sortBy === 'low-to-high') {
      result.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortBy === 'high-to-low') {
      result.sort((a, b) => Number(b.price) - Number(a.price));
    }

    return result;
  }, [search, category, sortBy, allProducts]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white dark:bg-neutral-950">
        <p className="text-xs font-bold tracking-widest uppercase text-neutral-400 animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white py-10 dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header Section */}
        <div className="relative mb-16 flex flex-col items-center justify-between border-b border-neutral-100 pb-8 dark:border-neutral-900 md:flex-row md:items-end">
          <div>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-neutral-400 dark:text-neutral-500">
              Curated Collection
            </span>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-neutral-950 sm:text-5xl">
              ALL PRODUCTS
            </h1>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="text-xs font-semibold tracking-widest uppercase text-neutral-500 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-900/60 px-4 py-2 border border-neutral-100 dark:border-neutral-800">
              Showing <span className="font-bold text-neutral-950">{filteredProducts.length}</span> Silhouettes
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-12">
          
          <div className="w-full">
            <Input
              placeholder="Search by product name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-400"
            />
          </div>
        
          <div className="relative w-full md:w-72">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-neutral-300 dark:border-neutral-800 px-4 py-3 rounded-xl outline-none appearance-none cursor-pointer text-xs font-bold uppercase tracking-wider bg-white dark:bg-neutral-900"
            >
              <option value="">All Categories</option>
              <option value="Hoodie">Hoodies</option>
              <option value="T-Shirt">T-Shirts</option>
              <option value="Shirt">Shirt</option>
              <option value="Accessories">Accessories</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-xs">
              ▼
            </div>
          </div>

          <div className="relative w-full md:w-72">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full border border-neutral-300 dark:border-neutral-800 px-4 py-3 rounded-xl outline-none appearance-none cursor-pointer text-xs font-bold uppercase tracking-wider bg-white dark:bg-neutral-900"
            >
              <option value="">Default Sort</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-xs">
              ▼
            </div>
          </div>
        
        </div>

        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 border border-dashed border-neutral-200 dark:border-neutral-800 rounded-xl">
            <p className="text-xs font-bold tracking-widest uppercase text-neutral-400">No products found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </main>
  );
};

export default ProductPage;