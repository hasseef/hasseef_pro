import React from "react";
import { PrimaryButton, GhostButton } from "../components/common/Buttons";
import { ACCOUNTS } from "../config/accounts";

export const Login = ({ onChangeView, onPickAccount }) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg rounded-lg border border-brand-border bg-white p-6 space-y-5">
        <div className="space-y-1 text-center">
          <h2 className="text-lg font-semibold text-brand-text">
            تسجيل الدخول إلى منصة حصيف (ديمو)
          </h2>
          <p className="text-xs text-gray-600">
            يمكن اختيار نوع الحساب لتجربة الواجهة كما تظهر للمستخدم الفعلي.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-3 max-h-64 overflow-y-auto text-[11px]">
          {ACCOUNTS.map((acc) => (
            <button
              key={acc.id}
              className="rounded-md border border-brand-border bg-gray-50 px-3 py-2 text-right hover:bg-white transition"
              onClick={() => {
                onPickAccount(acc.id);
                onChangeView("accounts");
              }}
            >
              <div className="font-semibold mb-1">{acc.label}</div>
              <div className="text-[10px] text-gray-500">
                {acc.typeLabel}
              </div>
            </button>
          ))}
        </div>
        <div className="pt-2 border-t border-brand-border/70">
          <p className="text-[11px] text-gray-500 text-center">
            في النسخة التشغيلية الفعلية سيتم ربط الدخول بأنظمة الهوية الوطنية
            أو حسابات الجهات.
          </p>
        </div>
      </div>
    </div>
  );
};
