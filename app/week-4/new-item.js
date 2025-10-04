"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full bg-white rounded py-2 px-8">
      <p className="text-m text-black">Quantity: {quantity}</p>

      <div className="flex flex-row gap-3">
        <button
          className="w-12 h-12 flex items-center justify-center bg-gray-600 hover:bg-gray-800 disabled:bg-gray-400 text-white text-xl font-bold rounded"
          onClick={decrement}
          disabled={quantity === 1}>
          -
        </button>

        <button
          className="w-12 h-12 flex items-center justify-center bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 text-white text-xl font-bold rounded"
          onClick={increment}
          disabled={quantity === 20}>
          +
        </button>
      </div>

      <div>
        <p className="text-sm italic text-gray-600">Allowed range: 1–20</p>
      </div>
    </div>
  );
}
