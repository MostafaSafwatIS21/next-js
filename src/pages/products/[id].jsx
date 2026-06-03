import ProductDetailsCard from "@/components/ProductDetails";

export default function ProductPage({ product }) {
  return (
    <div className="min-h-screen bg-gray-800 p-8 m-auto">
      <button
        onClick={() => {
          navigation.back();
        }}
        className="mb-4 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Go Back
      </button>
      <ProductDetailsCard product={product} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();
  return {
    props: {
      product,
    },
  };
}
