import React, { useState } from "react";
import Card from "./Card";
import { PRODUCTS } from "../../assets/Products";
import History from "./History";

export default function Hambuger() {
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  const handleFilterBurgers = () => {
    const burgers = PRODUCTS.filter(
      (item) =>
        item.productName === "X Burger" ||
        item.productName === "X Egg" ||
        item.productName === "X Bacon"
    );
    setFilteredProducts(burgers);
  };
  const handleFilterExtras = () => {
    const extras = PRODUCTS.filter(
      (item) =>
        item.productName === "Fries" || item.productName === "Soft Drink"
    );
    setFilteredProducts(extras);
  };
  const handleFilterAll = () => {
    setFilteredProducts(PRODUCTS);
  };

  return (
    <div>
      <nav className="flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
        <button
          onClick={handleFilterAll}
          className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#F44336] before:left-0 before:rounded-full before:-bottom-[1px] text-[#F44336]"
        >
          All
        </button>
        <button
          onClick={handleFilterBurgers}
          className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#F44336] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]"
        >
          Burgers
        </button>
        <button
          onClick={handleFilterExtras}
          className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#F44336] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]"
        >
          Extras
        </button>
      </nav>
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {filteredProducts.map((item) => (
          <Card
            key={item.id}
            productImage={item.productImage}
            productName={item.productName}
            price={item.price}
          />
        ))}
      </div>
      <History />
    </div>
  );
}
