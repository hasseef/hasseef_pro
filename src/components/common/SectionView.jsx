import React from "react";
import { DemoTable } from "./DemoTable";
import { StatCards } from "./StatCards";

export const SectionView = ({ section }) => {
  if (!section) return null;

  return (
    <div className="space-y-4">
      {section.description && (
        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
          {section.description}
        </p>
      )}
      {section.type === "table" && <DemoTable columns={section.columns || []} />}
      {section.type === "cards" && <StatCards cards={section.cards || []} />}
    </div>
  );
};
