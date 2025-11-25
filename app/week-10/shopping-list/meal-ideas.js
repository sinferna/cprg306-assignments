"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // re-fetch meals whenever ingredient changes
  useEffect(() => { 
    if (!ingredient) return; 
    // loadMealIdeas(); }, [ingredient]

  async function loadMealIdeas() {
  const fetchedMeals = await fetchMealIdeas(ingredient);
  setMeals(fetchedMeals);
  }

  loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">
        Meal Ideas for {ingredient}
      </h1>

      {meals.length > 0 ? (
        <div className="flex flex-col gap-4">
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="flex items-center bg-gray-900/60 rounded-md p-3 gap-4"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-16 h-16 rounded-md object-cover"
              />
              <span className="text-white font-serif font-bold text-lg">{meal.strMeal}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white">No meal ideas found.</p>
      )}
    </div>
  );
}