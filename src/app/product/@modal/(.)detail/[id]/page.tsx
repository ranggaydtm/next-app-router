/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Modal from "@/components/core/Modal";
import { getData } from "@/services/products";

export default async function ModalDetailProduct(props: any) {
  const { params } = props;
  const products = await getData(
    "http://localhost:3000/api/product?id=" + params.id
  );

  return (
    <Modal>
      <img
        src={products.data?.image}
        alt="product"
        className="w-full object-cover aspect-square col-span-2"
      />

      <div className="bg-white p-4 px-6">
        <h3>{products.data?.title}</h3>
        <p>Price $ {products.data?.price}</p>
      </div>
    </Modal>
  );
}
