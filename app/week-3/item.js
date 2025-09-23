// Item functional component that accepts name, quantity and category as props and displays in list item element
export default function Item({ name, quantity, category }) {
  return (
    <li className="border rounded-sm p-2 mx-20 my-2">
      <strong>{name}</strong>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );

}