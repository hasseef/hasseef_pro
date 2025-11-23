import React, { useState } from "react";
import { ACCOUNTS, CORE_MODULES } from "../config/accounts";
import { AccountsSidebar } from "../components/layout/AccountsSidebar";
import { SectionView } from "../components/common/SectionView";
import { Pill } from "../components/common/Pill";
import { PrimaryButton } from "../components/common/Buttons";

export const AccountsDemo = ({ initialAccountId }) => {
  const [activeAccountId, setActiveAccountId] = useState(
    initialAccountId || ACCOUNTS[0].id
  );
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

  const modulesForAccount = CORE_MODULES.filter((m) =>
    (activeAccount.modules || []).includes(m.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:py-8 flex flex-col md:flex-row gap-4">
      <AccountsSidebar
        accounts={ACCOUNTS}
        activeId={activeAccountId}
        onChange={handleChangeAccount}
      />

      <main className="flex-1 flex flex-col gap-4">
        <section className="rounded-lg border border-brand-border bg-white p-4 md:p-5 space-y-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded-full bg-gray-50 border border-brand-border text-[10px] text-gray-600">
                  {activeAccount.typeLabel}
                </span>
                <span className="text-[11px] text-gray-500">
                  حساب من أصل ٨ حسابات
                </span>
              </div>
              <h1 className="text-sm md:text-base font-semibold text-brand-text mb-1">
                {activeAccount.label}
              </h1>
              <p className="text-xs md:text-sm text-gray-600 max-w-2xl leading-relaxed">
                {activeAccount.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-end text-[11px]">
              <PrimaryButton>
                استخدام هذا الحساب في العرض
              </PrimaryButton>
            </div>
          </div>
          <div className="border-t border-brand-border pt-3 mt-1">
            <h3 className="text-[11px] md:text-xs font-semibold text-brand-text mb-2">
              المكوّنات التشغيلية المرتبطة بهذا الحساب
            </h3>
            <div className="flex flex-wrap gap-2 text-[10px]">
              {modulesForAccount.map((m) => (
                <span
                  key={m.id}
                  className="px-2 py-1 rounded-full border border-brand-border bg-gray-50"
                >
                  {m.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-brand-border bg-white p-3 md:p-4">
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
          <SectionView section={activeSection} />
        </section>
      </main>
    </div>
  );
};
