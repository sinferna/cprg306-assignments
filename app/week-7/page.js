"use client";
import { useState } from 'react';
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import itemsData from './items.json';


export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = newItem => {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    // <main className="p-2">
    //   <h1 className="p-2 text-3xl font-bold text-center mb-3">Shopping List</h1>
    //   <NewItem onAddItem={handleAddItem} />
    //   <ItemList items={items} />
    // </main>
    
      <main
        className="relative min-h-screen bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 p-6">
          <h1 className="text-5xl font-bold text-center mb-6 text-white">
            ShopMe<sup>©</sup>
          </h1>

          <div className="flex flex-col items-center gap-6">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
          </div>
        </div>
      </main>
  )

}