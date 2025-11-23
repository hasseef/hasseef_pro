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
    <div className="max-w-4xl mx_AUTO px-4 py-8 md:py-10">
      <div className="rounded-lg border border-brand-border bg_WHITE p-5 md:p-6 space-y-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold text-brand-text mb-1">
              إنشاء حساب في منصة حصيف (ديمو)
            </h2>
            <p className="text-xs text-gray-600 max-w-xl leading-relaxed">
              في النسخة التشغيلية يتم ربط إنشاء الحساب بآليات تحقق رسمية. في هذا
              الديمو الهدف هو توضيح أنواع الحسابات والأدوار التنموية لكل نوع
              أمام الجهات.
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
              className="rounded-md border border-brand-border bg-gray-50 px-4 py-3 text-right text-xs text-brand-text hover:bg-white transition"
              onClick={() => onChangeView("accounts")}
            >
              <div className="font-semibold mb-1">{t.label}</div>
              <div className="text-[11px] text-gray-600">
                عرض تجربة هذا النوع في الديمو.
              </div>
            </button>
          ))}
        </div>
        <div className="pt-2 border-t border-brand-border/70 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[11px] text-gray-600">
            بمجرد اختيار نوع الحساب سيتم نقلك إلى واجهة حسابات المنصة لشرح
            الديمو أمام أي جهة.
          </p>
          <PrimaryButton onClick={() => onChangeView("accounts")}>
            متابعة إلى واجهة الحسابات
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};
