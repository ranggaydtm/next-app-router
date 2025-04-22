import { NextResponse, NextRequest } from "next/server";

const data = [
  {
    id: 1,
    title: "Nike Zoom Vomero 5",
    price: 10000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1401d8b2-3daa-47cc-9c64-be0120375bda/W+NIKE+ZOOM+VOMERO+5.png",
  },
  {
    id: 2,
    title: "Nike Zoom Vomero 4",
    price: 20000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0c1e5173-ecc6-4358-aafe-526ca0b12a16/W+NIKE+ZOOM+VOMERO+5.png",
  },
];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));

    if (detailProduct) {
      return NextResponse.json({
        message: "success",
        status: 200,
        data: detailProduct,
      });
    }

    return NextResponse.json({ status: 404, message: "Not found" });
  }

  return NextResponse.json({ message: "success", status: 200, data });
}
