'use client';
import React, { useState } from 'react';
import { ProductContext } from './ProductContext';
import { toast } from 'react-toastify';

const ProductContextApi = ({children}) => {
    const [product, setProduct] = useState([]);

    const handleCartBtn = (item) =>{
        setProduct([...product, item])
        toast.success('Add to Cart Successfully!');
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