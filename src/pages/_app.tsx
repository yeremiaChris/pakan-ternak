import type { AppProps } from "next/app";
import "../styles/global.css";
import "tailwindcss/tailwind.css";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main className="pb-20">
        <Component {...pageProps} />
      </main>
    </>
  );
}
