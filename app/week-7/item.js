// Item functional component that accepts name, quantity and category as props and displays in list item element
export default function Item({ name, quantity, category }) {
  return (
      <li className="bg-gray-900/60 rounded-sm p-2 w-100 my-1">
        <p className="text-lg font-serif"><strong>{name}</strong></p>
        <p>Quantity: {quantity}</p>
        <p>Category: {category.charAt(0).toUpperCase() + category.slice(1)}</p>
      </li>
  );

}