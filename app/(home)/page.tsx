import { FC } from "react";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Products from "./_components/Products";

type pageProps = object;

export default function page({}: pageProps) {
  return (
    <>
      <Hero />
      <About />
      <Products />
    </>
  );
}
