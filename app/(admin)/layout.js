import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div className="flex">
      {/* Barre latérale de navigation */}
      <aside className="w-60 p-4 bg-gray-800 text-white h-screen">
        <nav>
          <ul className="space-y-4">
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/dashboard/analytics">Analytics</Link>
            </li>
            <li>
              <Link href="/dashboard/users">Users</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Contenu principal */}
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
}
