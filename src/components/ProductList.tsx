import { ProductsType } from "@/types";
import Categories from "./Categories";
import { Suspense } from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import Filter from "./Filter";
// Dummy product data
const products: ProductsType = [
  {
    id: 1,
    name: "Adidas CoreFit T—Shirt",
    shortDescription: "Lore ipsum dolor sit art consect elit tore dolor sit.",
    description:
      "Lore• ipsum dolor sit aret consect elit tor— dolor sit. Uor—  ipsum dolor sit art consect",
    price: 39.9,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "purple", "green"],
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
  },
  {
    id: 2,
    name: "Nike Air Zoom Pegasus",
    shortDescription:
      "High-performance running shoes with responsive cushioning.",
    description:
      "Built for every runner, the Nike Air Zoom Pegasus features a lightweight mesh upper and React foam for a smooth, energetic ride over any distance.",
    price: 120.0,
    sizes: ["s", "m", "l", "xl"],
    colors: ["black", "blue"],
    images: {
      black: "/products/2g.png",
      white: "/products/2gr.png",
    },
  },
  {
    id: 3,
    name: "Puma Essentials Hoodie",
    shortDescription:
      "Classic comfort meets street-ready style in soft fleece.",
    description:
      "Stay warm and stylish with this fleece-lined hoodie. Featuring a kangaroo pocket and ribbed cuffs, it is perfect for post-workout or casual wear.",
    price: 55.0,
    sizes: ["s", "m", "l", "xl"],
    colors: ["blue", "green", "black"],
    images: {
      red: "/products/3b.png",
      navy: "/products/3bl.png",
      black: "/products/3gr.png",
    },
  },
  {
    id: 4,
    name: "Under Armour Tech Shorts",
    shortDescription:
      "Quick-drying fabric designed for intense training sessions.",
    description:
      "UA Tech fabric is quick-drying, ultra-soft, and has a more natural feel. Material wicks sweat and dries really fast for ultimate comfort.",
    price: 29.5,
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "charcoal"],
    images: {
      gray: "/products/4p.png",
      blue: "/products/4w.png",
    },
  },
  {
    id: 5,
    name: "Reebok Workout Plus",
    shortDescription: "Iconic 80s trainers reimagined for modern comfort.",
    description:
      "This heritage shoe brings back the classic H-strap design with premium leather uppers and an EVA midsole for lightweight cushioning.",
    price: 80.0,
    sizes: ["s", "m", "l", "xl"],
    colors: ["orange", "red", "black"],
    images: {
      white: "/products/5bl.png",
      cream: "/products/5o.png",
      black: "/products/5r.png",
    },
  },
  {
    id: 6,
    name: "Champion Reverse Weave",
    shortDescription: "The original heavyweight sweatshirt built to last.",
    description:
      "Designed to resist vertical shrinkage, this sweatshirt features signature stretch side panels and a double-needle construction for long-term durability.",
    price: 60.0,
    sizes: ["s", "m", "l", "xl"],
    colors: ["silver", "gold"],
    images: {
      silver: "/products/6w.png",
      gold: "/products/6g.png",
    },
  },
  {
    id: 7,
    name: "Columbia Watertight II",
    shortDescription: "Packable rain protection for outdoor adventures.",
    description:
      "Fully seam-sealed and breathable, this jacket is designed for heavy downpours. It easily packs into its own hand pocket for travel convenience.",
    price: 89.0,
    sizes: ["s", "m", "l", "xl"],
    colors: ["white", "pink"],
    images: {
      green: "/products/7g.png",
      blue: "/products/7p.png",
    },
  },
  {
    id: 8,
    name: "Columbia Watertight Shirt",
    shortDescription: "Packable rain protection for outdoor adventures.",
    description:
      "Fully seam-sealed and breathable, this jacket is designed for heavy downpours. It easily packs into its own hand pocket for travel convenience.",
    price: 89.0,
    sizes: ["s", "m", "l", "xl"],
    colors: ["green", "blue"],
    images: {
      green: "/products/8gr.png",
      blue: "/products/8b.png",
    },
  },
];
export default function ProductList({
  category,
  params,
}: {
  category: string;
  params: "homepage" | "products";
}) {
  return (
    <div className="w-ful mx-auto ">
      <Suspense fallback={<div>Loading...</div>}>
        <Categories />
        {params === "products" && <Filter />}
      </Suspense>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
        {products?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
      <Link
        href={category ? `/products/?category=${category}` : "/products"}
        className="flex justify-end mt-4 underline text-sm text-gray-500"
      >
        {" "}
        View All Products
      </Link>
    </div>
  );
}
