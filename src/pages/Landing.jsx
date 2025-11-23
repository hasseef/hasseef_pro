import React from "react";
import { ACCOUNTS } from "../config/accounts";
import { PrimaryButton, GhostButton } from "../components/common/Buttons";

export const Landing = ({ onChangeView }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 md:py-12 space-y-8">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-light px-3 py-1 text-[11px] text-brand-green mb-1">
            منصة حصيف - الملف التشغيلي والتقني (ديمو بصري)
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-brand-text leading-relaxed">
            منصة حصيف الوطنية للتكامل التنموي
            <br className="hidden md:block" />
            وتمكين المشاركة المجتمعية وفق رؤية المملكة 2030.
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-xl leading-relaxed">
            تُعد منصة حصيف منظومة وطنية مبتكرة تتجاوز مفهوم النظام الإلكتروني
            التقليدي؛ فهي بنية تشغيلية شاملة تربط بين الحلول والمشاريع
            والفعاليات والمرافق والفرص الاستثمارية والتطوعية والوظيفية في شبكة
            واحدة تضم الجهات الحكومية، وهيئات التطوير، وإمارات المناطق، والقطاع
            الخاص، والقطاع غير الربحي، والجامعات، والجهات المانحة، والأفراد
            المبادرين.
          </p>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-3 pt-2">
            <div className="rounded-lg border border-brand-border bg-white p-3">
              <h3 className="text-sm font-semibold text-brand-text mb-1">
                الرؤية
              </h3>
              <p className="text-[11px] md:text-xs text-gray-600 leading-relaxed">
                أن تكون منصة حصيف المنظومة الوطنية المرجعية لتنظيم الحلول
                والمشاريع والفعاليات والشراكات وربطها بمستهدفات رؤية المملكة
                2030، بما يعمّق الأثر التنموي ويحّفز المشاركة المجتمعية.
              </p>
            </div>
            <div className="rounded-lg border border-brand-border bg-white p-3">
              <h3 className="text-sm font-semibold text-brand-text mb-1">
                الرسالة
              </h3>
              <p className="text-[11px] md:text-xs text-gray-600 leading-relaxed">
                تمكين التكامل بين الأفراد والجهات الحكومية والقطاعين الخاص وغير
                الربحي والجامعات والجهات المانحة عبر منصة رقمية موحدة تعتمد
                مكوّنات تشغيلية واضحة ونماذج علمية لقياس الأثر وربط كل مشاركة
                ببرامج وأهداف ومؤشرات الرؤية.
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

        <div className="rounded-lg border border-brand-border bg-white p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-brand-text">
              الأطراف المشاركة في حصيف
            </span>
            <span className="text-[10px] text-gray-500">لقطة ديمو</span>
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
      </div>

      {/* Main goals section */}
      <section className="grid md:grid-cols-3 gap-4">
        <div className="rounded-lg border border-brand-border bg-white p-4">
          <h3 className="text-sm font-semibold text-brand-text mb-2">
            تنظيم تدفق الحلول والمشاريع
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            توحيد مسار استقبال الحلول والمبادرات والمشاريع من مختلف الأطراف
            وتحويلها إلى نماذج عمل واضحة قابلة للتنفيذ والمتابعة وقياس الأثر.
          </p>
        </div>
        <div className="rounded-lg border border-brand-border bg-white p-4">
          <h3 className="text-sm font-semibold text-brand-text mb-2">
            تعميق ارتباط المجتمع بالرؤية 2030
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            ربط كل مشروع أو مبادرة أو فعالية ببرامج وأهداف ومؤشرات رؤية
            المملكة 2030، مع إمكان استعراض هذا الارتباط أمام الجهات الحكومية
            والجهات المانحة.
          </p>
        </div>
        <div className="rounded-lg border border-brand-border bg-white p-4">
          <h3 className="text-sm font-semibold text-brand-text mb-2">
            رفع كفاءة الإنفاق وشفافية الأثر
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            إتاحة تقارير ولوحات قياس تدعم اتخاذ القرار لدى الإمارة والوزارات
            والجهات المانحة والقطاع الخاص، بما يسهم في توجيه الموارد نحو
            المشاريع الأعلى أثرًا.
          </p>
        </div>
      </section>
    </div>
  );
};
