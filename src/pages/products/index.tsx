import React from 'react';
import { GetServerSideProps } from 'next';
import withLayout from '@/components/hoc/withLayout';
import { getBaseUrl } from '@/helpers/utils';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  creatorId: string;
  createdAt: Date;
  updatedAt: Date;
}

interface ProductProps {
  products: Product[];
}

const url = getBaseUrl();

const Products = ({ products }: ProductProps) => {
  console.log({ url });
  return (
    <div className={`flex min-h-screen flex-col px-4 md:px-24 my-10`}>
      <h1 className="text-4xl mb-5">Product Listings</h1>
      <div className="border rounded p-4">
        <div className="flex border">
          {products.map((p) => (
            <div key={p.id} className="border  border-accent">
              {p.name} - ${p.price}.00
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${url}/api/products/readAll`);
  const products = await res.json();
  return {
    props: { products },
  };
};

export default withLayout(Products);
