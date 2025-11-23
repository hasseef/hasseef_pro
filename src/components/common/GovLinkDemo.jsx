import React from "react";

export const GovLinkDemo = () => {
  return (
    <div className="rounded-lg border border-brand-border bg-white p-3 md:p-4 space-y-3">
      <h3 className="text-xs md:text-sm font-semibold text-brand-text mb-1">
        نموذج الربط الحكومي والجغرافي (ديمو)
      </h3>
      <div className="grid md:grid-cols-3 gap-3 text-[11px] md:text-xs">
        <div className="space-y-1">
          <label className="text-brand-text">الجهة الحكومية الرئيسة</label>
          <input
            className="w-full rounded-md border border-brand-border bg-white px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-brand-green"
            placeholder="مثال: وزارة الصحة"
          />
        </div>
        <div className="space-y-1">
          <label className="text-brand-text">جهات حكومية مشاركة</label>
          <textarea
            rows={3}
            className="w-full rounded-md border border-brand-border bg-white px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-brand-green"
            placeholder="تفصيل موجز لدور كل جهة مشاركة"
          />
        </div>
        <div className="space-y-1">
          <label className="text-brand-text">المنطقة / المدينة</label>
          <input
            className="w-full rounded-md border border-brand-border bg-white px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-brand-green"
            placeholder="مثل: منطقة حائل - مدينة حائل"
          />
        </div>
      </div>
      <p className="text-[10px] text-gray-500">
        يستخدم هذا النموذج لتوضيح من هي الجهات المرتبطة بكل مشروع أو فعالية، وكيف يتم توزيع الأدوار بينها.
      </p>
    </div>
  );
};
