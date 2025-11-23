import React from "react";

export const VisionMappingDemo = () => {
  return (
    <div className="rounded-lg border border-brand-border bg-white p-3 md:p-4 space-y-3">
      <h3 className="text-xs md:text-sm font-semibold text-brand-text mb-1">
        نموذج ربط بالرؤية 2030 (ديمو)
      </h3>
      <div className="grid md:grid-cols-3 gap-3 text-[11px] md:text-xs">
        <div className="space-y-1">
          <label className="text-brand-text">برنامج الرؤية</label>
          <select className="w-full rounded-md border border-brand-border bg-white px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-brand-green">
            <option>تنمية القدرات البشرية</option>
            <option>جودة الحياة</option>
            <option>تحويل القطاع غير الربحي</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-brand-text">الهدف الاستراتيجي</label>
          <input
            className="w-full rounded-md border border-brand-border bg-white px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-brand-green"
            placeholder="مثال: رفع نسبة المشاركة المجتمعية"
          />
        </div>
        <div className="space-y-1">
          <label className="text-brand-text">الهدف الفرعي</label>
          <input
            className="w-full rounded-md border border-brand-border bg-white px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-brand-green"
            placeholder="وصف مختصر"
          />
        </div>
        <div className="space-y-1">
          <label className="text-brand-text">الجهة الحكومية الرئيسة</label>
          <input
            className="w-full rounded-md border border-brand-border bg-white px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-brand-green"
            placeholder="مثال: وزارة الموارد البشرية والتنمية الاجتماعية"
          />
        </div>
        <div className="space-y-1">
          <label className="text-brand-text">المنطقة</label>
          <input
            className="w-full rounded-md border border-brand-border bg-white px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-brand-green"
            placeholder="منطقة حائل"
          />
        </div>
        <div className="space-y-1">
          <label className="text-brand-text">هيئة التطوير (إن وجدت)</label>
          <input
            className="w-full rounded-md border border-brand-border bg-white px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-brand-green"
            placeholder="مثل: هيئة تطوير منطقة حائل"
          />
        </div>
      </div>
      <p className="text-[10px] text-gray-500">
        هذا النموذج توضيحي لآلية ربط المشاريع والفعاليات ببرامج وأهداف الرؤية 2030، ويمكن تخصيص الحقول والخيارات لاحقًا.
      </p>
    </div>
  );
};
