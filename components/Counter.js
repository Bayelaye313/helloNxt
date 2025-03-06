"use client";
import { useTheme } from "@/app/context/ThemeProvider";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCounter] = useState(0);
  const { theme } = useTheme();
  return (
    <div
      className={`p-6 border rounded-lg shadow-sm ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-xl font-semibold mb-4">Compteur</h2>
      <p className="text-gray-600 mb-4">Valeur : {count}</p>
      <div className="space-x-2 space-y-2">
        <button
          onClick={() => setCounter(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Incrementer
        </button>
        <button
          onClick={() => setCounter(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Décrémenter
        </button>
      </div>
    </div>
  );
};

export default Counter;
