import React from "react";
import { ACCOUNTS, CORE_MODULES } from "../config/accounts";
import { PrimaryButton, GhostButton } from "../components/common/Buttons";

export const Landing = ({ onChangeView }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 md:py-12 space-y-8">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-light px-3 py-1 text-[11px] text-brand-green mb-1">
            منصة حصيف - نموذج تشغيلي (ديمو)
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-brand-text leading-relaxed">
            منصة حصيف الوطنية لتنظيم الحلول والمشاريع والفعاليات
            <br className="hidden md:block" />
            وربطها برؤية المملكة 2030.
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-xl leading-relaxed">
            يجمع هذا النموذج بين ثمانية حسابات رئيسية وتمانية عشر مكوّن تشغيلي
            (مشاريع، فعاليات، تمويل، رعايات، تطوع، تقارير، ربط بالرؤية...) في
            واجهة واحدة توضح منطق عمل المنصة أمام الجهات الحكومية والقطاعين
            الخاص وغير الربحي والجامعات والجهات المانحة.
          </p>

          <div className="grid md:grid-cols-2 gap-3 pt-2">
            <div className="rounded-lg border border-brand-border bg-white p-3">
              <h3 className="text-sm font-semibold text-brand-text mb-1">
                الرؤية
              </h3>
              <p className="text-[11px] md:text-xs text-gray-600 leading-relaxed">
                أن تكون حصيف منصة وطنية مرجعية لتنظيم وتفعيل الحلول والمشاريع
                والشراكات وربطها بمستهدفات رؤية المملكة 2030.
              </p>
            </div>
            <div className="rounded-lg border border-brand-border bg-white p-3">
              <h3 className="text-sm font-semibold text-brand-text mb-1">
                الرسالة
              </h3>
              <p className="text-[11px] md:text-xs text-gray-600 leading-relaxed">
                تمكين التكامل بين الإمارة والوزارات والقطاع الخاص والقطاع غير
                الربحي والجامعات والجهات المانحة والأفراد من خلال منصة رقمية
                موحّدة تعتمد نماذج عمل واضحة وتقارير أثر تنموية.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <PrimaryButton onClick={() => onChangeView("accounts")}>
              استعراض حسابات المنصة
            </PrimaryButton>
            <GhostButton onClick={() => onChangeView("about")}>
              كيف تعمل حصيف؟
            </GhostButton>
          </div>
        </div>

        <div className="rounded-lg border border-brand-border bg-white p-4 space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-brand-text">
                الحسابات المشاركة في حصيف
              </span>
              <span className="text-[10px] text-gray-500">٨ حسابات</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              {ACCOUNTS.map((acc) => (
                <div
                  key={acc.id}
                  className="rounded-md border border-brand-border bg-gray-50 px-3 py-2"
                >
                  <div className="text-brand-text mb-1 font-medium">
                    {acc.label}
                  </div>
                  <div className="text-[10px] text-gray-500">
                    {acc.typeLabel}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-brand-text">
                المكوّنات التشغيلية الأساسية
              </span>
              <span className="text-[10px] text-gray-500">١٩ مكوّن</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-[10px]">
              {CORE_MODULES.map((m) => (
                <div
                  key={m.id}
                  className="rounded-md border border-brand-border bg-white px-2 py-1 text-center"
                >
                  {m.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
