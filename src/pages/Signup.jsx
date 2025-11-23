import React from "react";
import { GhostButton, PrimaryButton } from "../components/common/Buttons";

export const Signup = ({ onChangeView }) => {
  const types = [
    { id: "individual", label: "فرد / شاب/ـة" },
    { id: "nonprofit", label: "جمعية / منظمة غير ربحية" },
    { id: "private", label: "شركة / منشأة خاصة" },
    { id: "university", label: "جامعة / كلية" },
    { id: "donor", label: "جهة مانحة / صندوق" },
    { id: "gov", label: "جهة حكومية / إمارة / هيئة تطوير" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-10">
      <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5 md:p-6 space-y-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-slate-50 mb-1">
              إنشاء حساب في منصة حصيف (ديمو)
            </h2>
            <p className="text-xs text-slate-400 max-w-xl leading-relaxed">
              في النسخة التشغيلية الفعلية يتم ربط إنشاء الحساب بآليات تحقق
              رسمية. في هذا الديمو الهدف توضيح تنوع الحسابات والأدوار
              التنموية لكل نوع.
            </p>
          </div>
          <GhostButton onClick={() => onChangeView("login")}>
            لديّ حساب مسبق
          </GhostButton>
        </div>
        <div className="grid md:grid-cols-3 gap-3 pt-2">
          {types.map((t) => (
            <button
              key={t.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 text-right text-xs text-slate-200 hover:border-emerald-500 hover:bg-slate-900 transition"
              onClick={() => onChangeView("accounts")}
            >
              <div className="font-semibold mb-1">{t.label}</div>
              <div className="text-[11px] text-slate-400">
                عرض تجربة هذا النوع في الديمو.
              </div>
            </button>
          ))}
        </div>
        <div className="pt-2 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[11px] text-slate-400">
            بمجرد اختيار نوع الحساب سيتم نقلك إلى واجهة حسابات المنصة لشرح
            الديمو أمام الجهات.
          </p>
          <PrimaryButton onClick={() => onChangeView("accounts")}>
            متابعة إلى واجهة الحسابات
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};
