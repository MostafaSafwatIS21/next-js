import mongoose from "mongoose";
import { NextResponse } from "next/server";
import db from "@/lib/db";
import Product from "@/models/products";

export async function GET(request, { params }) {
  try {
    await db();
    const { id } = await params;
    console.log("id", id);

    const product =
      mongoose.Types.ObjectId.isValid(id) && (await Product.findById(id));
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    return NextResponse.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 },
    );
  }
}
