'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Table } from "@heroui/react";
import { ProductContext } from '@/context/ProductContext';

const CartPage = () => {
  const { product } = useContext(ProductContext);

  const totalPrice = product?.reduce((acc, item) => acc + (Number(item.price) || 0), 0) || 0;

  const hasItems = product.length > 0;

  return (
    <main className="min-h-screen bg-white py-12 text-neutral-900">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Page Title */}
        <div className="border-b border-neutral-100 pb-6 flex items-center justify-between">
          <h1 className="text-3xl font-black tracking-tight text-neutral-950 uppercase">
            Shopping Cart
          </h1>
          <span className="text-xs font-bold tracking-widest uppercase text-neutral-400">
            [ {product?.length || 0} {product?.length === 1 ? 'Item' : 'Items'} ]
          </span>
        </div>

        {!hasItems ? (
          <div className="flex flex-col items-center justify-center py-24 border border-dashed border-neutral-200 bg-neutral-50/30">
            <svg 
              className="h-12 w-12 text-neutral-300 mb-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="1.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <h3 className="text-sm font-bold tracking-widest uppercase text-neutral-400 mb-2">
              Your cart is empty
            </h3>
            <p className="text-xs text-neutral-400 mb-6 uppercase tracking-wider">
              No products found in your shopping cart.
            </p>
            <Link 
              href="/products" 
              className="border border-neutral-950 bg-neutral-950 px-6 py-3 text-[10px] font-bold tracking-[0.2em] uppercase text-white transition-all hover:bg-neutral-800"
            >
              Continue Shopping
            </Link>
          </div>

        ) : (
          <>
            {/* Hero UI Table */}
            <Table>
              <Table.ScrollContainer>
                <Table.Content aria-label="Cart Items" className="!bg-white">
                  <Table.Header>
                    <Table.Column isRowHeader className="text-xs font-bold tracking-wider uppercase text-neutral-500 py-4">Image</Table.Column>
                    <Table.Column className="text-xs font-bold tracking-wider uppercase text-neutral-500 py-4">Name</Table.Column>
                    <Table.Column className="text-xs font-bold tracking-wider uppercase text-neutral-500 py-4">Category</Table.Column>
                    <Table.Column className="text-xs font-bold tracking-wider uppercase text-neutral-500 py-4">Price</Table.Column>
                  </Table.Header>
                  <Table.Body>
                    {product.map((item) => (
                      <Table.Row key={item.id} className="border-b border-neutral-100">
                        
                        <Table.Cell>
                          <div className="relative h-16 w-12 overflow-hidden bg-neutral-50">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={40}
                              height={40}
                              className="h-full w-full object-cover object-center rounded-lg"
                            />
                          </div>
                        </Table.Cell>

                        <Table.Cell>
                          <span className="text-sm font-bold text-neutral-950 uppercase">{item.name}</span>
                        </Table.Cell>

                        <Table.Cell>
                          <span className="text-xs text-neutral-500 uppercase">{item.category}</span>
                        </Table.Cell>

                        <Table.Cell>
                          <span className="text-sm font-black text-neutral-950">{item.price}</span>
                        </Table.Cell>

                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Content>
              </Table.ScrollContainer>
            </Table>

            <div className="mt-8 flex justify-end border-t border-neutral-100 pt-6">
              <div className="text-right">
                <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">Total Price</span>
                <p className="text-2xl font-black text-neutral-950 mt-1">{totalPrice}</p>
              </div>
            </div>
          </>

        )}

      </div>
    </main>
  );
};

export default CartPage;