import React, { useState } from "react";
import { ACCOUNTS } from "../config/accounts";
import { AccountsSidebar } from "../components/layout/AccountsSidebar";
import { SectionView } from "../components/common/SectionView";
import { Pill } from "../components/common/Pill";
import { PrimaryButton, GhostButton } from "../components/common/Buttons";

export const AccountsDemo = () => {
  const [activeAccountId, setActiveAccountId] = useState(ACCOUNTS[0].id);
  const activeAccount =
    ACCOUNTS.find((acc) => acc.id === activeAccountId) || ACCOUNTS[0];
  const [activeSectionId, setActiveSectionId] = useState(
    activeAccount.sections[0].id
  );
  const activeSection =
    activeAccount.sections.find((s) => s.id === activeSectionId) ||
    activeAccount.sections[0];

  const handleChangeAccount = (id) => {
    const account = ACCOUNTS.find((a) => a.id === id);
    setActiveAccountId(id);
    setActiveSectionId(account?.sections[0]?.id || "");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:py-8 flex flex-col md:flex-row gap-4">
      <AccountsSidebar
        accounts={ACCOUNTS}
        activeId={activeAccountId}
        onChange={handleChangeAccount}
      />

      <main className="flex-1 flex flex-col gap-4">
        <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-4 md:p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] text-slate-300">
                  {activeAccount.typeLabel}
                </span>
                <span className="h-1 w-1 rounded-full bg-emerald-400" />
                <span className="text-[11px] text-slate-400">
                  حساب من أصل 8 حسابات رئيسية في المنصة
                </span>
              </div>
              <h1 className="text-sm md:text-base font-semibold text-slate-50 mb-1">
                {activeAccount.label}
              </h1>
              <p className="text-xs md:text-sm text-slate-300 max-w-2xl leading-relaxed">
                {activeAccount.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-end">
              <PrimaryButton>عرض هذا الحساب في العرض</PrimaryButton>
              <GhostButton>تفاصيل الربط الفني</GhostButton>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-3 md:p-4">
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
              <h2 className="text-xs md:text-sm font-semibold text-slate-50">
                {activeSection.label}
              </h2>
              {activeSection.description && (
                <p className="text-[11px] md:text-xs text-slate-400 mt-1 max-w-xl">
                  {activeSection.description}
                </p>
              )}
            </div>
            <div className="hidden md:flex gap-2 text-[11px] text-slate-500">
              <span>هذه بيانات تجريبية للعرض فقط</span>
            </div>
          </div>
          <SectionView section={activeSection} />
        </section>
      </main>
    </div>
  );
};
