import React from "react";

export const StatCards = ({ cards }) => (
  <div className="grid gap-3 md:grid-cols-3">
    {cards.map((card) => (
      <div
        key={card.id}
        className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 flex flex-col gap-1"
      >
        <span className="text-xs text-slate-400">{card.label}</span>
        <span className="text-lg font-semibold text-slate-50">
          {card.value}
        </span>
      </div>
    ))}
  </div>
);
