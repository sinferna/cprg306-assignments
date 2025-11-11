// import Link from "next/link";

// export default function DisplayAssignments() {
//   return (
//     <main>
//       <h1>CPRG 306: Web Development 2 - Assignments</h1>
//       <Link href="/week-2">Week 2 - </Link>
//       <Link href="/week-3">Week 3 - </Link>
//       <Link href="/week-4">Week 4 - </Link>
//       <Link href="/week-5">Week 5 - </Link>
//       <Link href="/week-6">Week 6 - </Link>
//       <Link href="/week-7">Week 7</ Link>
//     </main>
//   )
// };

"use client";
import Link from "next/link";

export default function DisplayAssignments() {
  return (
    <main className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/mall_background.jpg')" }}>
      <div className="absolute inset-0 bg-black/65"></div>

      <div className="relative z-10 flex flex-col items-center p-6">
        <h1 className="text-3xl font-bold text-center text-white">
          CPRG 306: Web Development 2
        </h1>

        <p className="mb-4 text-lg">Assignments by Jasprit Grewal</p>

        <div className="flex flex-col items-center gap-4 w-full max-w-md">
          <Link href="/week-2" className="w-full text-center bg-black/65 hover:bg-black/80 text-white py-3 rounded-sm">
            Week 2
          </Link>
          <Link href="/week-3" className="w-full text-center bg-black/65 hover:bg-black/80 text-white py-3 rounded-sm">
            Week 3
          </Link>
          <Link href="/week-4" className="w-full text-center bg-black/65 hover:bg-black/80 text-white py-3 rounded-sm">
            Week 4
          </Link>
          <Link href="/week-5" className="w-full text-center bg-black/65 hover:bg-black/80 text-white py-3 rounded-sm">
            Week 5
          </Link>
          <Link href="/week-6" className="w-full text-center bg-black/65 hover:bg-black/80 text-white py-3 rounded-sm">
            Week 6
          </Link>
          <Link href="/week-7" className="w-full text-center bg-black/65 hover:bg-black/80 text-white py-3 rounded-sm">
            Week 7
          </Link>
          <Link href="/week-8" className="w-full text-center bg-black/65 hover:bg-black/80 text-white py-3 rounded-sm">
            Week 8
          </Link>
                    <Link href="/week-9" className="w-full text-center bg-black/65 hover:bg-black/80 text-white py-3 rounded-sm">
            Week 9
          </Link>
        </div>
      </div>
    </main>
  );
}
