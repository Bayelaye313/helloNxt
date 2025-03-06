import React from "react";

const Cards = ({ title, description }) => {
  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg p-6 bg-white">
      <h2 className="font-bold text-xl mb-2">{title}</h2>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  );
};

export default Cards;
