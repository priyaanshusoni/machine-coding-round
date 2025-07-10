import React from "react";
import Pagination from "./components/Pagination";
async function Page() {
  const res = await fetch("https://dummyjson.com/products?limit=0");
  const data = await res.json();
  const { products } = data;

  return <Pagination products={products} />;
}

export default Page;
