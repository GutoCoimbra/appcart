import products from "@/data/database.json";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const product = products.find((prod) => prod.slug === params.slug);
    if (!product) {
      return new NextResponse("not found", { status: 404 });
    }

    return NextResponse.json({
      product,
    });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
