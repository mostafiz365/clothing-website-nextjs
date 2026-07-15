'use client';
import { ProductContext } from '@/context/ProductContext';
import React, { useContext } from 'react';

const CartPage = () => {
    const {product} = useContext(ProductContext);
    console.log(product);
    return (
        <div>
            <h2>Add to Cart {product.length}</h2>
        </div>
    );
};

export default CartPage;