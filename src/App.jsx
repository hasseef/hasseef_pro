import React, { useState, useEffect } from "react";
import { PLATFORM_ACCOUNTS } from "./data/platformAccounts";
import { Header } from "./components/layout/Header";
import { Sidebar } from "./components/layout/Sidebar";
import { Pill } from "./components/common/Pill";
import { PrimaryButton, OutlineButton } from "./components/common/Buttons";
import { SectionView } from "./components/common/SectionView";

export default function App() {
  const [activeAccountId, setActiveAccountId] = useState(PLATFORM_ACCOUNTS[0].id);
  const [activeSectionId, setActiveSectionId] = useState(
    PLATFORM_ACCOUNTS[0].sections[0].id
  );

  const activeAccount =
    PLATFORM_ACCOUNTS.find((acc) => acc.id === activeAccountId) || PLATFORM_ACCOUNTS[0];

  const activeSection =
    activeAccount.sections.find((sec) => sec.id === activeSectionId) ||
    activeAccount.sections[0];

  useEffect(() => {
    setActiveSectionId(activeAccount.sections[0]?.id);
  }, [activeAccountId]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="flex-1 w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 px-4 py-4 md:py-6">
          <Sidebar
            accounts={PLATFORM_ACCOUNTS}
            activeAccountId={activeAccountId}
            onChangeAccount={setActiveAccountId}
          />

          <main className="flex-1 flex flex-col gap-4">
            <section
              className={`rounded-2xl border p-4 md:p-5 ${activeAccount.colorClass}`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h1 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                    {activeAccount.label}
                  </h1>
                  <p className="text-xs md:text-sm text-gray-600 max-w-2xl">
                    {activeAccount.description}
                  </p>
                </div>
                <div className="flex gap-2">
                  <PrimaryButton>إجراء رئيسي</PrimaryButton>
                  <OutlineButton>إعدادات الحساب</OutlineButton>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-white p-3 md:p-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {activeAccount.sections.map((sec) => (
                  <Pill
                    key={sec.id}
                    active={sec.id === activeSectionId}
                    onClick={() => setActiveSectionId(sec.id)}
                  >
                    {sec.label}
                  </Pill>
                ))}
              </div>

              <div className="mb-4 flex items-center justify-between gap-2">
                <div>
                  <h2 className="text-sm md:text-base font-semibold text-gray-900">
                    {activeSection.label}
                  </h2>
                  {activeSection.description && (
                    <p className="text-xs text-gray-500 mt-0.5">
                      {activeSection.description}
                    </p>
                  )}
                </div>
              </div>

              <SectionView section={activeSection} />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
