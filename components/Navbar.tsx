"use client";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";

function Navbar() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <nav className="bg-gray-800 flex items-center justify-between p-24 text-white">
      <Link href="/">
        <h1>Lookym</h1>
      </Link>

      {session?.user ? (
      <div className="flex items-center gap-4">
        <Link href="/dashboard">Dashboard</Link>
        <p>
          {session?.user?.name} {session?.user?.email}
        </p>
        <button onClick={() => signOut()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign out</button>
        </div>
      ) : (
        <button onClick={() => signIn()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign in</button>
      )}
    </nav>
  );
}
        
       
export default Navbar;
