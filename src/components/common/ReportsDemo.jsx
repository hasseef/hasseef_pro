import React from "react";
import { DemoTable } from "./DemoTable";

export const ReportsDemo = () => {
  const columns = ["نوع التقرير", "الفترة", "المنطقة", "عدد العناصر"];
  return (
    <div className="rounded-lg border border-brand-border bg-white p-3 md:p-4 space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] md:text-xs">
        <div className="flex flex-wrap gap-2">
          <select className="rounded-md border border-brand-border bg-white px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-brand-green">
            <option>تقارير المشاريع</option>
            <option>تقارير الفعاليات</option>
            <option>تقارير التمويل</option>
            <option>تقارير التطوع</option>
          </select>
          <input
            type="month"
            className="rounded-md border border-brand-border bg-white px-2 py-1.5 focus:outline-none focus:ring-1 focus:ring-brand-green"
          />
        </div>
        <span className="text-[10px] text-gray-500">
          البيانات المعروضة تجريبية للتوضيح فقط
        </span>
      </div>
      <DemoTable columns={columns} />
    </div>
  );
};
