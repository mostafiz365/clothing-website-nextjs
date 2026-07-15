"use client";

import React, { useState, use } from 'react';
import { Button } from "@heroui/react";
import { ProductContext } from '@/context/ProductContext';

const ProductActions = ({ product }) => {
  const { handleCartBtn } = use(ProductContext);

  return (
    <div className="w-full">
      {/* Main Action: Add To Cart Button */}
      <div className="mt-10 border-t border-neutral-100 pt-8">
        <Button
          radius="none"
          size="lg"
          onClick={() => handleCartBtn(product)}
          className="w-full h-14 bg-neutral-950 text-white font-bold tracking-[0.25em] text-xs uppercase transition-all hover:bg-neutral-800 disabled:bg-neutral-200 disabled:text-neutral-400"
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductActions;