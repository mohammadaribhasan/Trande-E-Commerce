"use client";
import { ProductType } from "@/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductCard({ product }: { product: ProductType }) {
  const [ProductTypes, setProductTypes] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });
  const handleProductType = ({
    type,
    value,
  }: {
    type: "size" | "color";
    value: string;
  }) => {
    setProductTypes((prev) => ({ ...prev, [type]: value }));
  };
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-2/3 bg-gray-100 overflow-hidden">
          {product?.images?.[ProductTypes.color] ? (
            <Image
              src={product.images[ProductTypes.color]}
              alt={product?.name || "Product Image"}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400 text-xs">
              No Image available
            </div>
          )}
        </div>
      </Link>
      {/* Product details */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium">{product?.name}</h1>
        <p className="text-sm text-gray-500">{product?.shortDescription}</p>
        {/* Product types */}
        <div className="flex items-center gap-4 text-xs">
          {/* size */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500 ">Size</span>
            <select
              name="size"
              id="size"
              className="ring ring-gray-300 rounded-md px-2 py-1"
              onChange={(e) =>
                handleProductType({ type: "size", value: e.target.value })
              }
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {/* color */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Color</span>
            <div className="flex items-center gap-2">
              {product.colors.map((color) => (
                <div
                  className={`cursor-pointer rounded-full p-0.5 border-1 ${ProductTypes.color === color ? "border-gray-400" : "border-transparent"}`}
                  key={color}
                  onClick={() =>
                    handleProductType({ type: "color", value: color })
                  }
                >
                  <div
                    className="w-3.5 h-3.5 rounded-full "
                    style={{ backgroundColor: color }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Price and add to cart */}
        <div className="flex items-center justify-between">
          <p className="font-medium">{product.price.toFixed(2)} $</p>
          <button className="ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300 flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
