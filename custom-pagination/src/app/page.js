import Home from "@/components/Home";
async function Page() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return (
    <>
      <Home data={data} />
    </>
  );
}

export default Page;
