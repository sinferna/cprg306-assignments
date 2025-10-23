"use client";

import { useState } from "react"; 
import Item from './item.js';
// import items from './items.json';

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items];

  // if (sortBy === "name") {
  //   sortedItems.sort((a, b) => {
  //     if (a.name < b.name) return -1;
  //     if (a.name > b.name) return 1;

  //     return 0;
  //   })
  // }

  // if (sortBy === "category") {
  //   sortedItems.sort((a, b) => {
  //     if (a.category < b.category) return -1;
  //     if (a.category > b.category) return 1;

  //     if (a.name < b.name) return -1;
  //     if (a.name > b.name) return 1;

  //     return 0;
  //   })
  // }
  sortedItems.sort((a, b) => {
    if (sortBy === "category") {
      const categoryCompare = a.category.toLowerCase().localeCompare(b.category.toLowerCase());
      if (categoryCompare !== 0) return categoryCompare;
    }
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  });

  return (
    <div>
      <div className="flex justify-center items-center gap-1 m-4">
        <h1 className="text-m text-white mr-1">Sort list by: </h1>

        <button onClick={() => setSortBy("name")}
          className={`text-sm px-2 py-1 rounded-md
          ${sortBy === "name" ? "bg-pink-500 text-white" : "bg-white text-black"}`}>
            Name
        </button>

        <button onClick={() => setSortBy("category")}
          className={`text-sm px-2 py-1 rounded-md
          ${sortBy === "category" ? "bg-pink-500 text-white" : "bg-white text-black"}`}>
            Category
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