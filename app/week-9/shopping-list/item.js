// Item functional component that accepts name, quantity and category as props and displays in list item element
export default function Item({ name, quantity, category, onSelect }) {
  return (
      <li className="bg-gray-900/60 rounded-sm p-2 w-full my-1 hover:bg-gray-950/60" 
      onClick={ onSelect }
      >
        <p className="text-lg font-serif"><strong>{name}</strong></p>
        <p>Quantity: {quantity}</p>
        <p>Category: {category.charAt(0).toUpperCase() + category.slice(1)}</p>
      </li>
  );
}