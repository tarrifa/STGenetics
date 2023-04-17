import React, { useContext, useEffect, useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { ShopContext } from "../../context/ShopContext";

const Card = (props) => {
  const { cartItems, getTotalCartAmount, addToHistory } =
  useContext(ShopContext);
  const { showOrder, setShowOrder } = props;
  const subtotal = getTotalCartAmount();

const [discount, setDiscount] = useState(0);
const [error, setError] = useState("");

const numFries = cartItems.filter((item) => item[1] === "Fries").length;
const numSoft = cartItems.filter((item) => item[1] === "Soft Drink").length;
const numBurgers = cartItems.filter((item) =>
  ["X Bacon", "X Burger", "X Egg"].includes(item[1])
).length;

useEffect(() => {
  if (numFries > 1 || numSoft > 1 || numBurgers > 1) {
    setError("Only one Fries, Soft Drink, or Burger allowed in order.");
    setDiscount(0);
  } else if (numFries === 1 && numSoft === 1 && numBurgers === 1) {
    setDiscount(subtotal * 0.2);
    setError("");
  } else if (numFries === 1 && numSoft !== 1 && numBurgers === 1) {
    setDiscount(subtotal * 0.1);
    setError("");
  } else if (numFries !== 1 && numSoft === 1 && numBurgers === 1) {
    setDiscount(subtotal * 0.15);
    setError("");
  } else {
    setDiscount(0);
    setError("");
  }
}, [ numFries, numSoft, numBurgers, cartItems]);

  return (
    <div
      className={`lg:col-span-2 fixed top-0 bg-[#33221E] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${
        showOrder ? "right-0" : "-right-full"
      }`}
    >
      {/* Orders */}
      <div className="relative pt-16 lg:pt-8 text-gray-100 p-8 h-full">
        <RiCloseLine
          onClick={() => setShowOrder(false)}
          className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#4E342E] rounded-full text-xl"
        />
        <h1 className="text-2xl my-4">Orders #151416</h1>

        {/* Car */}
        <div>
          <div className="grid grid-cols-6 mb-4 p-4">
            <h5 className="col-span-4">Item</h5>
            <h5>Price</h5>
          </div>
          {/* Products */}
          <div className="h-[300px] md:h-[600px] lg:h-[440px] overflow-scroll">
                {/* Product */}
          {cartItems.map((data) => (
                <div className="bg-[#4E342E] p-4 rounded-xl mb-4">
                  <div className="grid grid-cols-6 mb-4">
                    {/* Product description */}
                    <div className="col-span-4 flex items-center gap-3">
                      <img src={data[0]} className="w-10 h-10 object-cover" />
                      <div>
                        <h5 className="text-sm">{data[1]}</h5>
                        <p className="text-xs text-gray-400">{data[2]}</p>
                      </div>
                    </div>

                    {/* Price */}
                    <div>
                      <span>${data[2]}</span>
                    </div>
                      
                  </div>
                </div>
              ))}
              </div>
            
        </div>
        {/* Submit payment */}
        <div className="bg-[#4E342E] absolute w-full bottom-0 left-0 p-4">
        <div className="flex items-center justify-between mb-4">
            <span className="text-red-400">{error}</span>
            
          </div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-100">Discount</span>
            <span>${discount}</span>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-100">Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-gray-100">Total</span>
            <span>${subtotal-discount}</span>
          </div>
          <div>
            <button className="bg-[#81C784] text-gray-800 font-bold w-full py-2 px-4 rounded-lg" onClick={() => addToHistory([cartItems, subtotal-discount])}>
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
