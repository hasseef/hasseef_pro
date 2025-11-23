import React, { useState } from "react";
import { TableSkeleton } from "./TableSkeleton";
import { CardsGrid } from "./CardsGrid";
import { Pill } from "./Pill";
import { PrimaryButton, OutlineButton } from "./Buttons";

export const SectionView = ({ section }) => {
  const [activeTabId, setActiveTabId] = useState(
    section.type === "tabs" && section.tabs?.length ? section.tabs[0].id : null
  );

  if (section.type === "table") {
    return (
      <div className="space-y-4">
        {section.description && (
          <p className="text-sm text-gray-500 leading-relaxed">{section.description}</p>
        )}
        {section.actions?.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-end">
            <PrimaryButton>{section.actions[0]}</PrimaryButton>
            {section.actions.slice(1).map((a) => (
              <OutlineButton key={a}>{a}</OutlineButton>
            ))}
          </div>
        )}
        <TableSkeleton columns={section.columns || []} />
      </div>
    );
  }

  if (section.type === "cards") {
    return (
      <div className="space-y-4">
        {section.description && (
          <p className="text-sm text-gray-500 leading-relaxed">{section.description}</p>
        )}
        {section.actions?.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-end">
            <PrimaryButton>{section.actions[0]}</PrimaryButton>
            {section.actions.slice(1).map((a) => (
              <OutlineButton key={a}>{a}</OutlineButton>
            ))}
          </div>
        )}
        <CardsGrid cards={section.cards || []} />
      </div>
    );
  }

  if (section.type === "tabs") {
    const activeTab =
      section.tabs.find((t) => t.id === activeTabId) || section.tabs[0];

    return (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {section.tabs.map((tab) => (
            <Pill
              key={tab.id}
              active={tab.id === activeTabId}
              onClick={() => setActiveTabId(tab.id)}
            >
              {tab.label}
            </Pill>
          ))}
        </div>
        {activeTab.actions?.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-end">
            <PrimaryButton>{activeTab.actions[0]}</PrimaryButton>
            {activeTab.actions.slice(1).map((a) => (
              <OutlineButton key={a}>{a}</OutlineButton>
            ))}
          </div>
        )}
        {activeTab.type === "table" && (
          <TableSkeleton columns={activeTab.columns || []} />
        )}
      </div>
    );
  }

  return null;
};
