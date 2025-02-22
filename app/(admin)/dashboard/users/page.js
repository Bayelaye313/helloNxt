"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Erreur lors du chargement des utilisateurs :", error);
      }
    };

    fetchUsers();
  }, []);

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
