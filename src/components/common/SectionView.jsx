import React from "react";
import { DemoTable } from "./DemoTable";
import { StatCards } from "./StatCards";
import { FormDemo } from "./FormDemo";

export const SectionView = ({ section }) => {
  if (!section) return null;

  const renderMainBlock = () => {
    switch (section.type) {
      case "table":
        return <DemoTable columns={section.columns || []} />;
      case "cards":
        return <StatCards cards={section.cards || []} />;
      case "code":
        return (
          <div className="rounded-lg border border-brand-border bg-gray-900 text-gray-100 text-xs md:text-sm p-3 overflow-x-auto">
            <pre className="whitespace-pre text-[11px] md:text-xs leading-relaxed">
{section.code}
            </pre>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {/* وصف القسم */}
      {section.description && (
        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
          {section.description}
        </p>
      )}

      {/* شريط أدوات مبسط (بحث/تصفية) */}
      {section.type === "table" && (
        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px]">
          <div className="flex items-center gap-2">
            <input
              type="text"
              className="rounded-md border border-brand-border bg-white px-3 py-1.5 text-[11px] text-brand-text focus:outline-none focus:ring-1 focus:ring-brand-green"
              placeholder="بحث تجريبي في السجلات..."
            />
          </div>
          <div className="flex flex-wrap gap-2 text-[10px] text-gray-500">
            <span className="px-2 py-1 rounded-full border border-brand-border bg-white">
              فرز حسب الأحدث (ديمو)
            </span>
            <span className="px-2 py-1 rounded-full border border-brand-border bg-white">
              تصدير (ديمو)
            </span>
          </div>
        </div>
      )}

      {/* الكتلة الرئيسية (جدول/بطاقات/كود) */}
      {renderMainBlock()}

      {/* نموذج إضافة جديد إن وجد */}
      {section.formFields && section.formFields.length > 0 && (
        <FormDemo title={section.formTitle} fields={section.formFields} />
      )}
    </div>
  );
};
