"use client";
import PaymentForm from "@/components/PaymentForm";
import ShippingForm from "@/components/ShippingForm";
import { CartItemsType } from "@/types";
import { ArrowRight, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
const steps = [
  {
    id: 1,
    title: "Review your order",
  },
  {
    id: 2,
    title: "Shipping Address",
  },
  {
    id: 3,
    title: "Payment Method",
  },
];

// temp data for cart items
const cartItems: CartItemsType = [
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
    quantity: 2,
    selectedSize: "m",
    selectedColor: "purple",
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
    quantity: 2,
    selectedSize: "l",
    selectedColor: "pink",
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
    quantity: 1,
    selectedSize: "xl",
    selectedColor: "blue",
  },
];

export default function page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [shippingform, setShippingForm] = useState(null);

  const activeStep = parseInt(searchParams.get("step") || "1");
  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12">
      {/* title */}
      <h1 className="text-2xl font-medium">Your Cart</h1>
      {/* steps */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {steps.map((step) => (
          <div
            className={`flex items-center gap-2 border-b-2 pb-4 ${step.id === activeStep ? "border-gray-800" : "border-gray-200"}`}
            key={step.id}
          >
            <div
              className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${step.id === activeStep ? "bg-gray-800" : "bg-gray-400"}`}
            >
              {step.id}
            </div>
            <p
              className={` text-sm font-medium ${step.id === activeStep ? "text-gray-800" : "text-gray-400"}`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>
      {/* steps & details */}
      <div className="w-full flex flex-col lg:flex-row gap-16">
        {/* steps */}
        <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
          {activeStep === 1 ? (
            cartItems.map((item) => (
              // single cart item
              <div
                className="  flex items-center justify-between"
                key={item.id}
              >
                {/* img and details */}
                <div className="flex gap-8">
                  {/* image */}
                  <div className="relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
                    <Image
                      src={item.images[item.selectedColor] || null}
                      alt={item.name}
                      fill
                      classname="object-contain"
                    />
                  </div>
                  {/* item details */}
                  <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        Quantity : {item.quantity}
                      </p>
                      <p className="text-xs text-gray-500">
                        Size : {item.selectedSize}
                      </p>
                      <p className="text-xs text-gray-500">
                        {" "}
                        Color: {item.selectedColor}
                      </p>
                    </div>
                    <p className="font-medium">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                {/* delete btn */}
                <button className=" w-8 h-8 flex rounded-full hover:bg-red-200 transition-all duration-300 bg-red-100 text-red-400 justify-center items-center cursor-pointer">
                  <Trash2 className="w-3 h-3 " />
                </button>
              </div>
            ))
          ) : activeStep === 2 ? (
            <ShippingForm />
          ) : activeStep === 3 && shippingform ? (
            <PaymentForm />
          ) : (
            <p className="text-sm text-gray-500">
              Please fill in the Shipping Form To Continue
            </p>
          )}
        </div>
        {/* details */}
        <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8 h-max">
          <h2 className="font-semibold "> Cart Details</h2>
          <div className="flex flex-col gap-4">
            <div className="text-sm flex justify-between  ">
              <p className="text-gray-500">Subtotal</p>
              <p className=" font-medium">
                $
                {cartItems
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>

            <div className="text-sm flex justify-between  ">
              <p className="text-gray-500">Discount (10%)</p>
              <p className=" font-medium text-red-500">- $ 10</p>
            </div>

            <div className="text-sm flex justify-between  ">
              <p className="text-gray-500">Shipping Fee</p>
              <p className=" font-medium">$ 10</p>
            </div>
            <hr className="border-gray-200" />

            <div className=" flex justify-between  ">
              <p className="text-gray-800 font-semibold">Total </p>
              <p className=" font-medium">
                $
                {cartItems
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
          </div>

          {activeStep === 1 && (
            <button
              onClick={() => router.push("/cart?step=2", { scroll: false })}
              className="w-full bg-gray-800 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2 hover:bg-gray-700 duration-300"
            >
              Continue
              <ArrowRight className="w-3 h-3 " />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
