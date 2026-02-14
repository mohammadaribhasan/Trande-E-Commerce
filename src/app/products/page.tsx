import ProductList from "@/components/ProductList";
import React from "react";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category || null;
  return (
    <div>
      <ProductList category={category} params="products" />
    </div>
  );
};
export default Page;
