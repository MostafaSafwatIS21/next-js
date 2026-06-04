import ProductCard from "@/components/ProductCard";

export default function Products({ products }) {
  return (
    <div className="min-h-screen bg-gray-800 p-8">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return {
    props: {
      products: data.products,
    },
  };
}
