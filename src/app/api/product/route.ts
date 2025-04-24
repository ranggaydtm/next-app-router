import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextResponse, NextRequest } from "next/server";

// const data = [
//   {
//     id: 1,
//     title: "Nike Zoom Vomero 5",
//     price: 10000,
//     image:
//       "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1401d8b2-3daa-47cc-9c64-be0120375bda/W+NIKE+ZOOM+VOMERO+5.png",
//   },
//   {
//     id: 2,
//     title: "Nike Zoom Vomero 4",
//     price: 20000,
//     image:
//       "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0c1e5173-ecc6-4358-aafe-526ca0b12a16/W+NIKE+ZOOM+VOMERO+5.png",
//   },
//   {
//     id: 3,
//     title: "Nike Dunk Low Retro",
//     price: 20000,
//     image:
//       "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ae01c2a0-b415-404a-93e3-088b511cb192/NIKE+DUNK+LOW+RETRO.png",
//   },
//   {
//     id: 4,
//     title: "Nike Air Max Dn8",
//     price: 20000,
//     image:
//       "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0d641577-64b4-4963-92d5-2054a2f6de58/AIR+MAX+DN8+AMD.png",
//   },
//   {
//     id: 5,
//     title: "Nike Cortez Leather",
//     price: 20000,
//     image:
//       "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/464ab3ac-0dc0-4fd0-84bd-eae123a2db18/NIKE+CORTEZ.png",
//   },
// ];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (id) {
    // const detailProduct = data.find((item) => item.id === Number(id));
    const detailProduct = await retrieveDataById("products", id);

    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "success",
        data: detailProduct,
      });
    }

    return NextResponse.json({ status: 404, message: "Not found", data: {} });
  }

  const products = await retrieveData("products");

  return NextResponse.json({ status: 200, message: "success", data: products });
}
