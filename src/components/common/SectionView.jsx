import React from "react";
import { DemoTable } from "./DemoTable";
import { StatCards } from "./StatCards";

export const SectionView = ({ section }) => {
  if (!section) return null;

  const renderContent = () => {
    switch (section.type) {
      case "table":
        return <DemoTable columns={section.columns || []} />;
      case "cards":
        return <StatCards cards={section.cards || []} />;
      case "code":
        return (
          <div className="rounded-lg border border-brand-border bg-gray-900 text-gray-100 text-xs md:text-sm p-3 overflow-x-auto">
            <pre className="whitespace-pre text-[11px] md:text-xs leading-relaxed">
{section.code}
            </pre>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {section.description && (
        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
          {section.description}
        </p>
      )}
      {renderContent()}
    </div>
  );
};
