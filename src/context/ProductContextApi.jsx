'use client';
import React, { useState } from 'react';
import { ProductContext } from './ProductContext';

const ProductContextApi = ({children}) => {
    const [product, setProduct] = useState([]);

    const handleCartBtn = (item) =>{
        setProduct([...product, item])
    }

    const data = {
        product,
        setProduct,
        handleCartBtn
    }
    return (
        <ProductContext value= {data}>
            {children}
        </ProductContext>
    );
};

export default ProductContextApi;