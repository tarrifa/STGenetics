import React from "react";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";

export default function Card({ productImage, productName, price }) {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="bg-[#FFF9EB] p-6 rounded-lg shadow-lg flex flex-col items-center">
      <img
        src={productImage}
        alt={productName}
        className="w-48 h-48 object-cover mb-6 rounded-full shadow-lg"
      />
      <h2 className="text-2xl font-bold mb-2">{productName}</h2>
      <p className="mb-6">${price} </p>
      <button
        className="bg-[#F44336] text-white px-4 py-2 rounded-lg"
        onClick={() => addToCart([productImage, productName, price])}
      >
        Add to Order
      </button>
    </div>
  );
}
