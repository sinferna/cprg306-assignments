"use client";

import { useState } from "react"; 
import Item from './item.js';
import items from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items];

  if (sortBy === "name") {
    sortedItems.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
    })
  }

  if (sortBy === "category") {
    sortedItems.sort((a, b) => {
      if (a.category < b.category) return -1;
      if (a.category > b.category) return 1;

      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
    })
  }

  return (
    <div>
      <div className="flex justify-center items-center gap-1">
        <h1 className="text-m text-gray-400 mr-1">Items: </h1>

        <button onClick={() => setSortBy("name")}
          className={`text-sm px-2 py-1 rounded-md
          ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-white text-black"}`}>
            Sort by Name
        </button>

        <button onClick={() => setSortBy("category")}
          className={`text-sm px-2 py-1 rounded-md
          ${sortBy === "category" ? "bg-blue-500 text-white" : "bg-white text-black"}`}>
            Sort by Category
        </button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>

    </div>
  );

}