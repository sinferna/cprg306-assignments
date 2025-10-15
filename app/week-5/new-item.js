"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce")

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

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name: name,
      quantity: quantity,
      category: category
    };

    console.log(item);
    alert(`An item was submitted!\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    
    setName("");
    setQuantity(1);
    setCategory("Produce");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 w-full bg-white rounded-lg shadow-md py-6 px-8">
    
      <div className="flex flex-col items-center gap-4 w-full bg-white rounded py-2 px-8">
        
        <div className="w-full">
          <label className="block text-black mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            placeholder="Enter item name"
            className="text-gray-600 w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        
        <p className="text-m text-black">Quantity: {quantity}</p>
        <div className="flex flex-row gap-3">
          <button
            type="button"
            className="w-12 h-12 flex items-center justify-center bg-gray-600 hover:bg-gray-800 disabled:bg-gray-400 text-white text-xl font-bold rounded"
            onClick={decrement}
            disabled={quantity === 1}>
            -
          </button>

          <button
            type="button"
            className="w-12 h-12 flex items-center justify-center bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 text-white text-xl font-bold rounded"
            onClick={increment}
            disabled={quantity === 20}>
            +
          </button>
        </div>

        <div>
          <p className="text-sm italic text-gray-600">Allowed range: 1–20</p>
        </div>

      <div className="w-full">
        <label className="block text-black mb-1">Category</label>
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="text-gray-600 w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button type="submit" className="mt-2 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded">
        Submit
      </button>
      </div>

    </form>
  );
}
