"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import ProductDetails from "@/components/ProductDetails";
import { use, useEffect, useState } from "react";

export default function ProductPage({ params }) {
  const { id } = use(params);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/product/${id}`);
        if (!response.ok) {
          throw new Error("Failed to load products");
        }
        const data = await response.json();
        if (isActive) {
          setProduct(data || null);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        if (isActive) {
          setProduct(null);
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    fetchProduct();

    return () => {
      isActive = false;
    };
  }, [id]);

  if (!isLoading && (!product || (!product.id && !product._id))) {
    notFound();
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-800 p-8 text-white">
        Loading product...
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-800 p-8">
      <Link
        href="/products"
        className="mb-4 inline-block rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Go Back
      </Link>
      <ProductDetails product={product} />
    </div>
  );
}
