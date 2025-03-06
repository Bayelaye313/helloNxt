import Link from "next/link";
// import { useEffect, useState } from "react";

export default async function UsersPage() {
  // const [users, setUsers] = useState([]);

  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Liste des Utilisateurs</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="p-4 bg-white shadow rounded">
            <Link href={`/dashboard/users/${user.id}`}>
              <span className="text-blue-600 hover:underline">{user.name}</span>
            </Link>
            <p className="text-gray-500">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
