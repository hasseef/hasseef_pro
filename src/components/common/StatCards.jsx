import React from "react";

export const StatCards = ({ cards }) => (
  <div className="grid gap-3 md:grid-cols-3">
    {cards.map((card) => (
      <div
        key={card.id}
        className="rounded-lg border border-brand-border bg-white px-4 py-3 flex flex-col gap-1"
      >
        <span className="text-xs text-gray-500">{card.label}</span>
        <span className="text-lg font-semibold text-brand-text">
          {card.value}
        </span>
      </div>
    ))}
  </div>
);
