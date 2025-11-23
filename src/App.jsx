import React, { useState } from "react";
import { Header } from "./components/layout/Header";
import { Landing } from "./pages/Landing";
import { AccountsDemo } from "./pages/AccountsDemo";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { AboutFlow } from "./pages/AboutFlow";

export default function App() {
  const [view, setView] = useState("landing");

  const renderView = () => {
    switch (view) {
      case "landing":
        return <Landing onChangeView={setView} />;
      case "accounts":
        return <AccountsDemo />;
      case "login":
        return <Login onChangeView={setView} />;
      case "signup":
        return <Signup onChangeView={setView} />;
      case "about":
        return <AboutFlow />;
      default:
        return <Landing onChangeView={setView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header onChangeView={setView} />
      <main className="flex-1">{renderView()}</main>
      <footer className="border-t border-brand-border bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-gray-500">
            هذا ديمو تشغيلي بصري لمنصة حصيف، مخصص للعروض أمام الجهات الحكومية،
            الجامعات، والقطاعين الخاص وغير الربحي.
          </p>
          <p className="text-[11px] text-gray-500">
            يمكن ربط هذه الواجهة لاحقًا بأنظمة الدخول والتكاملات الفعلية
            وقواعد البيانات.
          </p>
        </div>
      </footer>
    </div>
  );
}
