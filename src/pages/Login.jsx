import React from "react";
import { PrimaryButton, GhostButton } from "../components/common/Buttons";

export const Login = ({ onChangeView }) => {
  return (
    <div className="min-height-[70vh] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-lg border border-brand-border bg-white p-6 space-y-5">
        <div className="space-y-1 text-center">
          <h2 className="text-lg font-semibold text-brand-text">
            تسجيل الدخول إلى منصة حصيف
          </h2>
          <p className="text-xs text-gray-600">
            هذه شاشة ديمو لشرح رحلة المستخدم أمام الجهات، ويمكن ربطها لاحقًا
            بأنظمة الهوية الوطنية أو مزودي الدخول الموحد.
          </p>
        </div>
        <div className="space-y-3">
          <div className="space-y-1.5">
            <label className="text-xs text-brand-text">البريد الإلكتروني</label>
            <input
              type="email"
              className="w-full rounded-md border border-brand-border bg-white px-3 py-2 text-xs text-brand-text focus:outline-none focus:ring-1 focus:ring-brand-green"
              placeholder="user@example.com"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs text-brand-text">كلمة المرور</label>
            <input
              type="password"
              className="w-full rounded-md border border-brand-border bg-white px-3 py-2 text-xs text-brand-text focus:outline-none focus:ring-1 focus:ring-brand-green"
              placeholder="••••••••"
            />
          </div>
        </div>
        <div className="space-y-2">
          <PrimaryButton className="w-full" onClick={() => onChangeView("accounts")}>
            دخول (عرض الديمو)
          </PrimaryButton>
          <p className="text-[11px] text-gray-500 text-center">
            في النسخة التشغيلية الفعلية يتم تفعيل التحكم في الصلاحيات وربط
            كل مستخدم بالحساب المناسب.
          </p>
        </div>
        <div className="pt-2 border-t border-brand-border/70 space-y-2">
          <p className="text-[11px] text-gray-500 text-center">
            تجربة الدخول مباشرة كأحد الحسابات:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <GhostButton onClick={() => onChangeView("accounts")}>
              دخول كإمارة (ديمو)
            </GhostButton>
            <GhostButton onClick={() => onChangeView("accounts")}>
              دخول كجهة مانحة (ديمو)
            </GhostButton>
            <GhostButton onClick={() => onChangeView("accounts")}>
              دخول كجهة غير ربحية (ديمو)
            </GhostButton>
          </div>
        </div>
      </div>
    </div>
  );
};
