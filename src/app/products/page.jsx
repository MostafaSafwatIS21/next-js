"use client";

import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";

// const productsUrl = "https://dummyjson.com/products";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(products);

  useEffect(() => {
    let isActive = true;

    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/product");
        if (!response.ok) {
          throw new Error("Failed to load products");
        }
        const data = await response.json();
        if (isActive) {
          setProducts(Array.isArray(data) ? data : []);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        if (isActive) {
          setProducts([]);
        }
      } finally {
        if (isActive) {
          setIsLoading(false);
        }
      }
    };

    fetchProducts();

    return () => {
      isActive = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-800 p-8">
      <div className="grid gap-5 justify-items-center sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id ?? product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
