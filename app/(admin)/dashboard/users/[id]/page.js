"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function UserDetailPage() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    if (!params?.id) return;

    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Utilisateur non trouvé !");
        return res.json();
      })
      .then((data) => setUser(data))
      .catch(() => router.push("/dashboard/users"));
  }, [params?.id, router]);

  if (!user) return <p className="text-center mt-8">Chargement...</p>;

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Détail de l'utilisateur</h1>
      <p>
        <strong>Nom :</strong> {user.name}
      </p>
      <p>
        <strong>Email :</strong> {user.email}
      </p>
      <p>
        <strong>Téléphone :</strong> {user.phone}
      </p>
      <p>
        <strong>Site web :</strong>{" "}
        <a
          href={`http://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          {user.website}
        </a>
      </p>
      <button
        onClick={() => router.push("/dashboard/users")}
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
      >
        Retour à la liste des utilisateurs
      </button>
    </div>
  );
}
