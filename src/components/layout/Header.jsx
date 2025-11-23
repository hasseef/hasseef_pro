import React from "react";
import { GhostButton, PrimaryButton } from "../common/Buttons";
import visionLogo from "../../assets/vision2030.png";
import hasseefLogo from "../../assets/hasseef.png";
import talbiyaLogo from "../../assets/talbiya.png";

export const Header = ({ onChangeView }) => {
  return (
    <header className="border-b border-brand-border bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {hasseefLogo && (
            <img
              src={hasseefLogo}
              alt="منصة حصيف"
              className="h-10 md:h-12 w-auto object-contain"
            />
          )}
          <div className="text-[11px] md:text-xs text-gray-600">
            منصة حصيف - نموذج تشغيلي وطني للتكامل التنموي
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-3 text-xs text-gray-600">
          <button
            className="hover:text-brand-green transition"
            onClick={() => onChangeView("landing")}
          >
            الرئيسية
          </button>
          <button
            className="hover:text-brand-green transition"
            onClick={() => onChangeView("accounts")}
          >
            حسابات المنصة
          </button>
          <button
            className="hover:text-brand-green transition"
            onClick={() => onChangeView("about")}
          >
            كيف تعمل حصيف؟
          </button>
          <button
            className="hover:text-brand-green transition"
            onClick={() => onChangeView("government")}
          >
            حصيف والقطاع الحكومي
          </button>
        </nav>

        <div className="flex items-center gap-3">
          {visionLogo && (
            <img
              src={visionLogo}
              alt="رؤية السعودية 2030"
              className="h-8 md:h-9 w-auto object-contain"
            />
          )}
          {talbiyaLogo && (
            <img
              src={talbiyaLogo}
              alt="مبادرة تلبية"
              className="h-8 md:h-9 w-auto object-contain"
            />
          )}
          <div className="hidden md:flex items-center gap-2">
            <GhostButton onClick={() => onChangeView("login")}>
              تسجيل الدخول
            </GhostButton>
            <PrimaryButton onClick={() => onChangeView("signup")}>
              إنشاء حساب
            </PrimaryButton>
          </div>
        </div>
      </div>
    </header>
  );
};
