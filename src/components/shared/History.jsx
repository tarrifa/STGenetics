import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

export default function History() {
  const { history } = useContext(ShopContext);
  console.log(history);
  return (
    <>
      <h1 className="text-4xl text-300">All the orders Submitted</h1>
      {history.map((data) => (
        <div className="bg-[#4E342E] p-4 rounded-xl mb-4">
          <div className="grid grid-cols-6 mb-4">
            {/* Product description */}
            <div className="col-span-4 flex items-center gap-3">
              <div>
                <h5 className="text-gray-100 text-center">{data[1]}</h5>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
