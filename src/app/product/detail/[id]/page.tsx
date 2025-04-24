/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { getData } from "@/services/products";

export default async function DetailProduct(props: any) {
  const { params } = props;
  const products = await getData(
    "http://localhost:3000/api/product?id=" + params.id
  );

  return (
    <div className="container mx-auto my-10">
      <h1>Detail Product</h1>
      <div className="w-1/2 mx-auto border border-gray-700">
        <img
          src={products.data?.image}
          alt="product"
          className="w-full object-cover aspect-square col-span-2"
        />

        <div className="bg-white p-4 px-6">
          <h3>{products.data?.title}</h3>
          <p>Price $ {products.data?.price}</p>
        </div>
      </div>
    </div>
  );
}
