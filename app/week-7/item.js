// Item functional component that accepts name, quantity and category as props and displays in list item element
export default function Item({ name, quantity, category }) {
  return (
      <li className="bg-black/65 rounded-sm p-2 w-100 my-2 mx-auto">
        <p className="text-lg"><strong>{name}</strong></p>
        <p>Quantity: {quantity}</p>
        <p>Category: {category}</p>
      </li>
  );

}