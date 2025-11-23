import React from "react";
import { ACCOUNTS } from "../config/accounts";
import { PrimaryButton, GhostButton } from "../components/common/Buttons";

export const Landing = ({ onChangeView }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 md:py-12">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-light px-3 py-1 text-[11px] text-brand-green mb-1">
            منصة رقمية وطنية متعددة الأطراف
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-brand-text leading-relaxed">
            حصيف… منصة وطنية لربط الأفراد والقطاعات
            <br className="hidden md:block" />
            وتفعيل الحلول والمشاريع المرتبطة برؤية 2030.
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-xl leading-relaxed">
            تجمع منصة حصيف بين الأفراد، والقطاع الخاص، والقطاع غير الربحي،
            والجامعات، والجهات المانحة، والجهات الحكومية، وهيئات التطوير، في
            منظومة واحدة تنظّم الحلول والمبادرات والفعاليات والشراكات، مع ربط
            منهجي بمستهدفات رؤية المملكة 2030.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <PrimaryButton onClick={() => onChangeView("accounts")}>
              استعراض حسابات المنصة
            </PrimaryButton>
            <GhostButton onClick={() => onChangeView("about")}>
              كيف تعمل حصيف؟
            </GhostButton>
          </div>
          <div className="flex flex-wrap gap-4 pt-4 text-[11px] text-gray-500">
            <div>ربط بالمؤشرات والبرامج الوطنية</div>
            <div>مسؤولية اجتماعية واستثمار اجتماعي</div>
            <div>تعزيز علمي عبر الجامعات</div>
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

      <div className="grid md:grid-cols-3 gap-4">
        <div className="rounded-lg border border-brand-border bg-white p-4">
          <h3 className="text-sm font-semibold text-brand-text mb-2">
            ربط بالرؤية 2030
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            كل مشروع أو مبادرة في حصيف يمر عبر نموذج عمل واضح ويرتبط ببرامج
            وأهداف ومؤشرات رؤية 2030، مع إمكانية المتابعة من الجهات الحكومية
            والجهات المانحة.
          </p>
        </div>
        <div className="rounded-lg border border-brand-border bg-white p-4">
          <h3 className="text-sm font-semibold text-brand-text mb-2">
            تكامل بين القطاعات
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            تتيح المنصة للقطاع الخاص والقطاع غير الربحي والجامعات والأفراد
            والجهات الحكومية وهيئات التطوير العمل على منصة واحدة، مع وضوح
            في الأدوار والفرص والمسؤوليات.
          </p>
        </div>
        <div className="rounded-lg border border-brand-border bg-white p-4">
          <h3 className="text-sm font-semibold text-brand-text mb-2">
            مناسبة للعروض الرسمية
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            تم تصميم هذا الديمو ليتناسب مع العروض الرسمية أمام صناع القرار
            والقطاعات المختلفة، مع واجهة بسيطة وواضحة وخطوط وألوان متوافقة
            مع الهوية الوطنية.
          </p>
        </div>
      </div>
    </div>
  );
};
