import NewItem from './new-item.js';

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="p-2 text-xl font-bold text-center">Add New Item</h1>
      <div>
        <NewItem />
      </div>
    </main>
  );
}
