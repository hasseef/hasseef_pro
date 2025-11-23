import React from "react";

export const CardsGrid = ({ cards }) => (
  <div className="grid gap-4 md:grid-cols-3">
    {cards.map((card) => (
      <div
        key={card.id}
        className="rounded-2xl border border-gray-100 bg-white p-4 flex flex-col gap-2"
      >
        <span className="text-sm text-gray-500">{card.label}</span>
        <span className="text-lg font-semibold text-gray-900">{card.value}</span>
      </div>
    ))}
  </div>
);
