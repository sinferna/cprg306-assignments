import ItemList from './item-list.js';

export default function Page() {
  return (
    <main className="p-2">
      <h1 className="p-2 text-3xl font-bold text-center mb-3">Shopping List</h1>
      <ItemList />
    </main>
  )

}