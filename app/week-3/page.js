import ItemList from './item-list.js';

export default function Page() {
  return (
    <main className="p-2">
      <h1 className="p-2 text-xl font-bold text-center">Shopping List</h1>
      <ItemList />
    </main>
  )

}