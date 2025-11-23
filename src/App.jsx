import React, { useState } from "react";
import { Header } from "./components/layout/Header";
import { Landing } from "./pages/Landing";
import { AccountsDemo } from "./pages/AccountsDemo";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { AboutFlow } from "./pages/AboutFlow";
import { GovernmentPage } from "./pages/Government";

export default function App() {
  const [view, setView] = useState("landing");
  const [pickedAccountId, setPickedAccountId] = useState(null);

  const renderView = () => {
    switch (view) {
      case "landing":
        return <Landing onChangeView={setView} />;
      case "accounts":
        return <AccountsDemo initialAccountId={pickedAccountId} />;
      case "login":
        return (
          <Login
            onChangeView={setView}
            onPickAccount={setPickedAccountId}
          />
        );
      case "signup":
        return (
          <Signup
            onChangeView={setView}
            onPickAccount={setPickedAccountId}
          />
        );
      case "about":
        return <AboutFlow />;
      case "government":
        return <GovernmentPage />;
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
            هذا نموذج تشغيلي بصري لمنصة حصيف، مخصص للعروض أمام الإمارة،
            الوزارات، الجامعات، القطاع الخاص، القطاع غير الربحي، والجهات المانحة.
          </p>
          <p className="text-[11px] text-gray-500">
            يمكن ربط هذه الواجهة لاحقًا بقواعد بيانات وتكاملات فعلية حسب الملف
            التشغيلي المعتمد.
          </p>
        </div>
      </footer>
    </div>
  );
}
