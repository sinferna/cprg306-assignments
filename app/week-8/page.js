"use client";
import { useState } from 'react';
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import itemsData from './items.json';
import MealIdeas from './meal-ideas.js';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  const handleItemSelect = (item) => {
    if (!item.name) return;

    let cleanedName = item.name;
    // remove everything after first comma
    cleanedName = cleanedName.split(',')[0];
    // remove emojis
    // text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    cleanedName = cleanedName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    // remove whitespace 
    cleanedName = cleanedName.trim();

    setSelectedItemName(cleanedName);
  }

  return (
      <main className="relative min-h-screen bg-cover bg-center">
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 p-6">
          <h1 className="text-5xl font-bold font-serif text-center mb-6 text-white">
            ShopMe<sup>©</sup>
          </h1>

          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex flex-col items-center md:items-start w-full md:w-1/2 gap-6">
              <div className="w-full max-w-md flex flex-col gap-4">
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              {selectedItemName && (
                <MealIdeas ingredient={selectedItemName} />
            )}
            </div>
          </div>
        </div>
      </main>
  )
}