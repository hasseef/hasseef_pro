import React from "react";
import { GhostButton, PrimaryButton } from "../components/common/Buttons";
import { ACCOUNTS } from "../config/accounts";

export const Signup = ({ onChangeView, onPickAccount }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-10">
      <div className="rounded-lg border border-brand-border bg-white p-5 md:p-6 space-y-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-brand-text mb-1">
              إنشاء حساب في منصة حصيف (ديمو)
            </h2>
            <p className="text-xs text-gray-600 max-w-xl leading-relaxed">
              يمكن اختيار نوع الحساب لتوضيح رحلة المستخدم؛ عند اختيار نوع
              الحساب تنتقل مباشرةً لواجهة الحساب كتجربة عرض.
            </p>
          </div>
          <GhostButton onClick={() => onChangeView("login")}>
            لديّ حساب
          </GhostButton>
        </div>
        <div className="grid md:grid-cols-3 gap-3 pt-2 text-[11px]">
          {ACCOUNTS.map((acc) => (
            <button
              key={acc.id}
              className="rounded-md border border-brand-border bg-gray-50 px-4 py-3 text-right hover:bg-white transition"
              onClick={() => {
                onPickAccount(acc.id);
                onChangeView("accounts");
              }}
            >
              <div className="font-semibold mb-1">{acc.label}</div>
              <div className="text-[10px] text-gray-500">
                {acc.typeLabel}
              </div>
            </button>
          ))}
        </div>
        <div className="pt-2 border-t border-brand-border/70 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[11px] text-gray-600">
            هذه الشاشة لعرض أنواع الحسابات فقط، أما آليات التحقق والاعتماد
            فتكون في النسخة التشغيلية الكاملة.
          </p>
          <PrimaryButton onClick={() => onChangeView("accounts")}>
            متابعة إلى واجهة الحسابات
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};
