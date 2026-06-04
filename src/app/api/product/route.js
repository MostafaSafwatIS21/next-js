import { NextResponse } from "next/server";
import db from "@/lib/db";
import Product from "@/models/products";

export async function GET(request) {
  try {
    await db();
    // console.log("Connected to database");
    const products = await Product.find();
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 },
    );
  }
}
