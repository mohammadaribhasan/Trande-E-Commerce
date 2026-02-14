import ProductList from "@/components/ProductList";
import Image from "next/image";

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category || null;
  return (
    <div>
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="Featured Products" fill />
      </div>
      <ProductList category={category} params="homepage" />
    </div>
  );
};
export default Home;
