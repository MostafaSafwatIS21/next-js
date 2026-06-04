import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="py-10 px-4">
        <Component {...pageProps} />
      </div>
    </>
  );
}
