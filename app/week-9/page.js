"use client";

import Link from "next/link";
// import the useUserAuth hook
import { useUserAuth } from "../utils/AuthContext";

export default function Page() {
  // use the custom auth hook
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // handle login
  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Uh oh, login failed:", error);
    }
  };

  // handle logout
  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Uh oh, logout failed:", error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      <h1 className="text-5xl font-bold mb-8">ShopMe<sup>©</sup></h1>

      {!user ? (
        // what user sees if not logged in
        <button
          onClick={handleLogin}
          className="bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 transition"
        >
          Login with GitHub
        </button>
      ) : (
        // what user sees if logged in
        <div className="text-center space-y-4">
          <p className="text-lg">
            Hello, <span className="text-lg font-bold">{user.displayName}</span> (
            {user.email})
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/week-9/shopping-list"
              className="bg-sky-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-sky-600"
            >
              Enter ShopMe<sup>©</sup>
            </Link>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
