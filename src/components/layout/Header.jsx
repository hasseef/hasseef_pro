import React from "react";
import { GhostButton, PrimaryButton } from "../common/Buttons";

export const Header = ({ onChangeView }) => {
  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur z-20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
            ح
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-slate-50 text-sm md:text-base">
              منصة حصيف الوطنية
            </span>
            <span className="text-[11px] text-slate-400">
              برنامج شباب المملكة حصيف الوطني – حلول صائبة يقترح فعلها
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-3 text-xs text-slate-300">
          <button
            className="hover:text-white transition"
            onClick={() => onChangeView("landing")}
          >
            الرئيسية
          </button>
          <button
            className="hover:text-white transition"
            onClick={() => onChangeView("accounts")}
          >
            حسابات المنصة
          </button>
          <button
            className="hover:text-white transition"
            onClick={() => onChangeView("about")}
          >
            كيف تعمل حصيف؟
          </button>
        </nav>

        <div className="flex items-center gap-2">
          <GhostButton
            className="hidden md:inline-flex"
            onClick={() => onChangeView("login")}
          >
            تسجيل الدخول
          </GhostButton>
          <PrimaryButton onClick={() => onChangeView("signup")}>
            إنشاء حساب
          </PrimaryButton>
        </div>
      </div>
    </header>
  );
};
