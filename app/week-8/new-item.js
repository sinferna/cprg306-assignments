"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
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
      id: Math.random().toString(36).substring(2, 9),
      name: name,
      quantity: quantity,
      category: category
    };

    onAddItem(item);
    // console.log(item);
    // alert(`An item was submitted!\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    
    setName("");
    setQuantity(1);
    setCategory("Produce");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center bg-black/65 rounded-lg shadow-md py-3 px-4">
    
      <div className="flex flex-col items-center gap-2 w-full rounded py-2 px-5">   
        <div className="w-full">
          <label className="text-white">Name</label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            placeholder="Enter item name"
            className="text-gray-300 bg-white/10 w-full border border-gray-300 rounded px-3 py-1.5"
          />
        </div>
        
        <p className="text-white mt-2">Quantity</p>
        <div className="flex flex-row items-center gap-3">
          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center bg-gray-600 hover:bg-gray-700 disabled:bg-gray-500 text-white text-xl font-bold rounded-full"
            onClick={decrement}
            disabled={quantity === 1}
          >
            -
          </button>

          <span className="font-mono text-white text-3xl w-10 font-medium text-center">{quantity}</span>

          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center bg-sky-500 hover:bg-sky-700 disabled:bg-sky-600 text-white text-xl font-bold rounded-full"
            onClick={increment}
            disabled={quantity === 20}
          >
            +
          </button>
        </div>

        <div>
          <p className="text-xs italic text-gray-400 mt-1">Allowed range: 1–20</p>
        </div>

        <div className="w-full">
          <label className="block text-white mb-1">Category</label>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="text-gray-300 bg-black/85 w-full border border-gray-300 rounded px-3 py-2"
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

        <button type="submit" className="font-m mt-2 bg-sky-500 hover:bg-sky-700 text-white font-medium py-1 px-6 rounded-3xl">
          Add Item
        </button>
      </div>

    </form>
  );
}
