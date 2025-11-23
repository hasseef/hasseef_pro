import React from "react";
import { PrimaryButton, GhostButton } from "./Buttons";

export const FormDemo = ({ title, fields = [] }) => {
  if (!fields.length) return null;

  return (
    <div className="mt-4 rounded-lg border border-brand-border bg-gray-50 p-3 md:p-4">
      {title && (
        <h3 className="text-xs md:text-sm font-semibold text-brand-text mb-3">
          {title} (نموذج توضيحي)
        </h3>
      )}
      <form className="grid md:grid-cols-2 gap-3">
        {fields.map((field) => (
          <div key={field.name} className="space-y-1 md:col-span-1">
            <label className="text-[11px] md:text-xs text-brand-text">
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea
                className="w-full rounded-md border border-brand-border bg-white px-3 py-2 text-[11px] md:text-xs text-brand-text focus:outline-none focus:ring-1 focus:ring-brand-green"
                rows={3}
                placeholder="نص تجريبي..."
              />
            ) : field.type === "select" ? (
              <select
                className="w-full rounded-md border border-brand-border bg-white px-3 py-2 text-[11px] md:text-xs text-brand-text focus:outline-none focus:ring-1 focus:ring-brand-green"
                defaultValue=""
              >
                <option value="" disabled>
                  اختر…
                </option>
                {(field.options || []).map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type || "text"}
                className="w-full rounded-md border border-brand-border bg-white px-3 py-2 text-[11px] md:text-xs text-brand-text focus:outline-none focus:ring-1 focus:ring-brand-green"
                placeholder="قيمة تجريبية..."
              />
            )}
          </div>
        ))}
        <div className="md:col-span-2 flex items-center justify-end gap-2 pt-1">
          <PrimaryButton type="button">حفظ (ديمو)</PrimaryButton>
          <GhostButton type="button">إلغاء</GhostButton>
        </div>
      </form>
      <p className="text-[10px] text-gray-500 mt-2">
        هذا النموذج لأغراض العرض فقط، ويمكن ربط الحقول فعليًا بقواعد البيانات
        وواجهات البرمجة عند الانتقال للمرحلة التطويرية.
      </p>
    </div>
  );
};
