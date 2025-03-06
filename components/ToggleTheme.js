"use client";

import { useTheme } from "@/app/context/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Basculer en mode {theme === "light" ? "sombre" : "clair"}
    </button>
  );
}
