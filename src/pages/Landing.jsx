import React from "react";
import { ACCOUNTS } from "../config/accounts";
import { PrimaryButton, GhostButton } from "../components/common/Buttons";

export const Landing = ({ onChangeView }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
      <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] text-emerald-200 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            منصة رقمية وطنية متعددة الأطراف
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-50 leading-relaxed">
            حصيف… حلقة الوصل بين{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-l from-emerald-400 to-lime-300">
              الأفراد
            </span>{" "}
            والقطاعات لتحقيق
            <br className="hidden md:block" />{" "}
            مستهدفات رؤية المملكة 2030.
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-xl leading-relaxed">
            يجمع نظام حصيف بين الأفراد، والقطاع الخاص، والقطاع غير الربحي،
            والجامعات، والجهات المانحة، والجهات الحكومية، وهيئات التطوير، في
            منصة واحدة تنظّم الحلول والمشاريع والفعاليات والشراكات.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <PrimaryButton onClick={() => onChangeView("accounts")}>
              استعرض حسابات المنصة
            </PrimaryButton>
            <GhostButton onClick={() => onChangeView("about")}>
              كيف تعمل حصيف؟
            </GhostButton>
          </div>
          <div className="flex flex-wrap gap-4 pt-4 text-[11px] text-slate-400">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              ربط علمي عبر الجامعات
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              شفافية للجهات المانحة
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              تقارير ومؤشرات للإمارة والوزارات
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-6 -left-4 h-24 w-24 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute -bottom-6 -right-4 h-24 w-24 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="relative rounded-3xl border border-slate-800 bg-slate-950/60 p-4 shadow-2xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-slate-300">
                حسابات حصيف في لقطة واحدة
              </span>
              <span className="text-[10px] text-slate-500">
                Demo • واجهة عرض أولية
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              {ACCOUNTS.map((acc) => (
                <div
                  key={acc.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 px-3 py-2"
                >
                  <div className="text-slate-200 mb-1">{acc.label}</div>
                  <div className="text-[10px] text-slate-400">
                    {acc.typeLabel}
                  </div>
                  <div className="mt-2 h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full w-2/3 bg-gradient-to-l from-emerald-500 to-lime-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
          <h3 className="text-sm font-semibold text-slate-100 mb-2">
            ربط منهجي بالرؤية 2030
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            كل مشروع ومبادرة في حصيف يمر عبر نموذج اللبنات التسعة ويرتبط
            ببرامج وأهداف ومؤشرات رؤية 2030، مع قابلية المتابعة من جهة
            حكومية أو إمارة المنطقة.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
          <h3 className="text-sm font-semibold text-slate-100 mb-2">
            تكامل بين القطاعات
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            تتيح المنصة للقطاع الخاص والمانحين والقطاع غير الربحي والجامعات
            والجهات الحكومية وهيئات التطوير العمل على منصة موحدة، مع وضوح في
            الأدوار والفرص والمسؤوليات.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
          <h3 className="text-sm font-semibold text-slate-100 mb-2">
            قابلية عرض في الاجتماعات والمنتديات
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            تم تصميم هذا الديمو ليكون مناسبًا للعروض الرسمية أمام صناع القرار
            والقطاعات المختلفة، مع واجهة بسيطة تسهل توضيح رحلة المشروع عبر
            الأطراف الثمانية.
          </p>
        </div>
      </div>
    </div>
  );
};
