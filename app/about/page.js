import Counter from "@/components/Counter";
import { ServerComponents } from "@/components/ServerComponents";
import ThemeToggle from "@/components/ToggleTheme";
import Link from "next/link";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">À propos de nous</h1>
      <p className="mt-4 text-lg">Ceci est la page À propos.</p>
      <Link href={"/"} className="mt-4 text-lg text-purple-950 underline">
        {" "}
        retour à l'accueil
      </Link>
      <ServerComponents />
      <Counter />
      <ThemeToggle />
    </main>
  );
}
