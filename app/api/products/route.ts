import { NextResponse } from "next/server";
import products from "@/data/database.json";
export async function GET() {
  return NextResponse.json(products);
}

// import products from "@/data/database.json";
// import { NextApiRequest, NextApiResponse } from "next";
// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   res.status(200).json(products);
// }
