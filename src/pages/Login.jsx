import React from "react";
import { PrimaryButton, GhostButton } from "../components/common/Buttons";

export const Login = ({ onChangeView }) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-2xl space-y-5">
        <div className="space-y-1 text-center">
          <h2 className="text-lg font-semibold text-slate-50">
            تسجيل الدخول إلى منصة حصيف
          </h2>
          <p className="text-xs text-slate-400">
            هذه شاشة ديمو للعرض فقط، ويمكن استخدامها لشرح تجربة المستخدم
            التوقّعية أمام الجهات.
          </p>
        </div>
        <div className="space-y-3">
          <div className="space-y-1.5">
            <label className="text-xs text-slate-300">البريد الإلكتروني</label>
            <input
              type="email"
              className="w-full rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-xs text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="user@example.com"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs text-slate-300">كلمة المرور</label>
            <input
              type="password"
              className="w-full rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-xs text-slate-100 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              placeholder="••••••••"
            />
          </div>
        </div>
        <div className="space-y-2">
          <PrimaryButton className="w-full" onClick={() => onChangeView("accounts")}>
            دخول (عرض الديمو)
          </PrimaryButton>
          <p className="text-[11px] text-slate-400 text-center">
            في النسخة الفعلية يتم ربط هذه الشاشة بنظام هوية موحد أو حسابات
            المنصة، بينما هنا الهدف هو تسهيل عرض الواجهات فقط.
          </p>
        </div>
        <div className="pt-2 border-t border-slate-800/60 space-y-2">
          <p className="text-[11px] text-slate-400 text-center">
            تجربة الدخول كأحد حسابات المنصة مباشرة:
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
