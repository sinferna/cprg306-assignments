"use client";
import { useState, useEffect } from 'react';
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import MealIdeas from './meal-ideas.js';
import { useUserAuth } from '../../utils/AuthContext';
import { getItems, addItem } from '../_services/shopping-list-service.js'

export default function Page() {
  // get the current user
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  // load shopping list items
  async function loadItems() {
    const userItems = await getItems(user.uid);
    setItems(userItems);
  }

  // call loadItems when component is mounted
  useEffect (() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  // add item
    const handleAddItem = async (newItem) => {
    const id = await addItem(user.uid, newItem); // save to Firestore
    const savedItem = { id, ...newItem };        // attach Firestore ID

    setItems((prevItems) => [...prevItems, savedItem]);
  };

  const handleItemSelect = (item) => {
    if (!item.name) return;

    let cleanedName = item.name;
    // remove everything after first comma
    cleanedName = cleanedName.split(',')[0];
    // remove emojis
    cleanedName = cleanedName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    // remove whitespace 
    cleanedName = cleanedName.trim();

    setSelectedItemName(cleanedName);
  }

  // do not render page if user is not logged in
  if (!user) {
    return null; 
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