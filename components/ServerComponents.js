import React from "react";

export const ServerComponents = () => {
  const currentDate = new Date().toLocaleString();
  return (
    <div className="bg-transparent border-gray-800 font-bold">
      <p>
        La date d'aujourd'hui :{" "}
        <span className="font-semibold text-red-900">{currentDate}</span>{" "}
      </p>
    </div>
  );
};
