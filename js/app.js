// واجهة منصة حصيف - نسخة جاهزة لـ GitHub Pages بدون build
const { useState, useEffect } = React;

/******************* بيانات الحسابات *******************/
const PLATFORM_ACCOUNTS = [
  {
    id: "individual",
    label: "حساب الأفراد",
    description: "تمكين الأفراد من طرح المبادرات، والفرص، والتطوع، والتدريب.",
    colorClass: "bg-emerald-50 border-emerald-200",
    sections: [
      {
        id: "my-initiatives",
        label: "مبادراتي",
        type: "table",
        description:
          "إدارة المبادرات المقدمة من قبل الفرد وربطها ببرامج وأهداف رؤية المملكة 2030.",
        columns: [
          "اسم المبادرة",
          "برنامج الرؤية",
          "الهدف التفصيلي",
          "الحالة",
          "الجهة الشريكة",
          "تاريخ التقديم"
        ],
        actions: ["إضافة مبادرة", "تعديل", "عرض التفاصيل", "حذف"]
      },
      {
        id: "opportunities",
        label: "الفرص",
        type: "tabs",
        tabs: [
          {
            id: "jobs",
            label: "فرص وظيفية",
            type: "table",
            columns: ["المسمى الوظيفي", "الجهة", "المدينة", "نوع العقد", "نهاية التقديم"],
            actions: ["تقديم", "حفظ في المفضلة"]
          },
          {
            id: "volunteering",
            label: "فرص تطوع",
            type: "table",
            columns: ["عنوان الفرصة", "الجهة", "الساعات", "المدينة", "نهاية التسجيل"],
            actions: ["التسجيل", "حفظ"]
          },
          {
            id: "training",
            label: "تدريب / coop",
            type: "table",
            columns: ["اسم البرنامج", "نوع التدريب", "الجهة", "المدة", "بداية البرنامج"],
            actions: ["التسجيل", "عرض التفاصيل"]
          }
        ]
      },
      {
        id: "wallet",
        label: "محفظتي",
        type: "cards",
        description: "عرض الرصيد، الاشتراكات، التبرعات، والمكافآت.",
        cards: [
          { id: "balance", label: "الرصيد المتاح", value: "0.00 ر.س" },
          { id: "donations", label: "إجمالي التبرعات", value: "0.00 ر.س" },
          { id: "rewards", label: "نقاط التحفيز", value: "0 نقطة" }
        ],
        actions: ["شحن الرصيد", "عرض سجل العمليات"]
      }
    ]
  },
  {
    id: "private-sector",
    label: "حساب القطاع الخاص",
    description:
      "تمكين الشركات من المسؤولية الاجتماعية، الرعاية، الاستثمار، وإدارة الفرص التنموية.",
    colorClass: "bg-sky-50 border-sky-200",
    sections: [
      {
        id: "csr-opportunities",
        label: "فرص المنح (المسؤولية الاجتماعية)",
        type: "table",
        columns: [
          "اسم الفرصة",
          "القطاع",
          "المنطقة",
          "نوع المساهمة",
          "قيمة تقديرية",
          "حالة الفرصة"
        ],
        actions: ["طرح فرصة منحة", "تعديل الفرصة", "إغلاق الفرصة"]
      },
      {
        id: "events",
        label: "الفعاليات",
        type: "tabs",
        tabs: [
          {
            id: "my-events",
            label: "فعالياتي",
            type: "table",
            columns: ["اسم الفعالية", "النوع", "الموقع", "التاريخ", "الحالة"],
            actions: ["إضافة فعالية", "إدارة الشركاء"]
          },
          {
            id: "sponsorship-opportunities",
            label: "فرص الرعاية",
            type: "table",
            columns: ["اسم الفعالية", "المنظم", "المنطقة", "قيمة الرعاية"],
            actions: ["تقديم طلب رعاية", "حفظ الفرصة"]
          }
        ]
      },
      {
        id: "reports",
        label: "تقارير المسؤولية الاجتماعية",
        type: "cards",
        cards: [
          { id: "total-spent", label: "إجمالي الإنفاق التنموي", value: "0 ر.س" },
          { id: "projects-count", label: "عدد المشاريع المدعومة", value: "0" },
          { id: "beneficiaries", label: "عدد المستفيدين", value: "0" }
        ],
        actions: ["توليد تقرير", "تصدير PDF"]
      }
    ]
  },
  {
    id: "nonprofit",
    label: "حساب القطاع غير الربحي",
    description: "تمكين الجمعيات من التمويل، إدارة المتطوعين، الوظائف، والبرامج.",
    colorClass: "bg-purple-50 border-purple-200",
    sections: [
      {
        id: "projects",
        label: "المشاريع",
        type: "table",
        columns: [
          "اسم المشروع",
          "مجال المشروع",
          "برنامج الرؤية",
          "الجهة الداعمة",
          "حالة التمويل"
        ],
        actions: ["إضافة مشروع", "طلب تمويل", "تحديث مؤشرات الأداء"]
      },
      {
        id: "volunteering",
        label: "التطوع",
        type: "table",
        columns: ["اسم الفرصة", "المدينة", "الساعات المطلوبة", "الحالة"],
        actions: ["إضافة فرصة تطوعية", "إغلاق", "تصدير كشوف المتطوعين"]
      }
    ]
  },
  {
    id: "donor",
    label: "حساب المانح",
    description: "إدارة محافظ المنح، فرص التمويل، ومتابعة المشاريع.",
    colorClass: "bg-amber-50 border-amber-200",
    sections: [
      {
        id: "grant-opportunities",
        label: "فرص المنح",
        type: "table",
        columns: [
          "اسم المشروع",
          "الجهة المقدمة",
          "القطاع",
          "المنطقة",
          "قيمة التمويل"
        ],
        actions: ["الموافقة على المنحة", "طلب استكمال بيانات", "رفض"]
      },
      {
        id: "portfolio",
        label: "محفظة المانح",
        type: "cards",
        cards: [
          { id: "active-projects", label: "المشاريع الجارية", value: "0" },
          { id: "total-committed", label: "إجمالي الالتزامات", value: "0 ر.س" },
          { id: "paid-amount", label: "المبالغ المصروفة", value: "0 ر.س" }
        ],
        actions: ["عرض تفاصيل المحفظة"]
      }
    ]
  },
  {
    id: "university",
    label: "حساب الجامعات",
    description:
      "تعزيز الدور الاستشاري والعلمي، وبرامج التدريب، وتسويق المبادرات البحثية.",
    colorClass: "bg-teal-50 border-teal-200",
    sections: [
      {
        id: "consulting",
        label: "الاستشارات العلمية",
        type: "table",
        columns: ["اسم المشروع", "الجهة المستفيدة", "الكلية/المركز", "نوع المشاركة"],
        actions: ["قبول مشروع", "تعيين فريق علمي"]
      },
      {
        id: "programs",
        label: "البرامج الجامعية",
        type: "table",
        columns: ["اسم البرنامج", "الفئة المستهدفة", "النمط", "المدة"],
        actions: ["إضافة برنامج", "ربط بجهات مانحة"]
      }
    ]
  },
  {
    id: "government",
    label: "حساب الجهات الحكومية / الإمارة",
    description:
      "عرض المشاريع والمبادرات، الموافقات على الفعاليات، وتتبع المؤشرات.",
    colorClass: "bg-rose-50 border-rose-200",
    sections: [
      {
        id: "gov-initiatives",
        label: "إدارة المبادرات الحكومية",
        type: "table",
        columns: [
          "اسم المبادرة",
          "الجهة المالكة",
          "برنامج الرؤية",
          "الهدف الاستراتيجي",
          "حالة التنفيذ"
        ],
        actions: ["إضافة مبادرة", "ربط بأهداف الرؤية", "تحديث التقدم"]
      },
      {
        id: "events-approval",
        label: "طلبات الموافقة على الفعاليات",
        type: "tabs",
        tabs: [
          {
            id: "pending",
            label: "طلبات قيد الدراسة",
            type: "table",
            columns: ["اسم الفعالية", "المنظم", "الموقع", "التاريخ", "نوع المشاركة"],
            actions: ["الموافقة", "طلب تعديل", "رفض"]
          },
          {
            id: "approved",
            label: "الفعاليات المعتمدة",
            type: "table",
            columns: ["اسم الفعالية", "المنظم", "تاريخ الاعتماد", "نوع الحدث"],
            actions: ["عرض التفاصيل", "تصدير قائمة"]
          }
        ]
      }
    ]
  }
];

/******************* مكوّنات الواجهة *******************/
const Pill = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={
      "px-3 py-1 rounded-full text-sm transition border " +
      (active
        ? "bg-emerald-600 text-white border-emerald-600"
        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50")
    }
  >
    {children}
  </button>
);

const PrimaryButton = ({ children }) => (
  <button className="px-4 py-2 rounded-xl text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition">
    {children}
  </button>
);

const OutlineButton = ({ children }) => (
  <button className="px-4 py-2 rounded-xl text-sm font-medium border border-gray-200 text-gray-700 hover:bg-gray-50 transition">
    {children}
  </button>
);

const TableSkeleton = ({ columns }) => (
  <div className="overflow-x-auto border border-gray-100 rounded-2xl bg-white">
    <table className="min-w-full text-sm text-right">
      <thead className="border-b bg-gray-50">
        <tr>
          {columns.map((col) => (
            <th
              key={col}
              className="px-4 py-3 font-semibold text-gray-600 whitespace-nowrap"
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3].map((row) => (
          <tr key={row} className="border-b last:border-b-0">
            {columns.map((col) => (
              <td key={col} className="px-4 py-3 text-gray-400 whitespace-nowrap">
                — بيانات تجريبية —
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const CardsGrid = ({ cards }) => (
  <div className="grid gap-4 md:grid-cols-3">
    {cards.map((card) => (
      <div
        key={card.id}
        className="rounded-2xl border border-gray-100 bg-white p-4 flex flex-col gap-2"
      >
        <span className="text-sm text-gray-500">{card.label}</span>
        <span className="text-lg font-semibold text-gray-900">{card.value}</span>
      </div>
    ))}
  </div>
);

const SectionView = ({ section }) => {
  const [activeTabId, setActiveTabId] = useState(
    section.type === "tabs" && section.tabs && section.tabs.length
      ? section.tabs[0].id
      : null
  );

  if (section.type === "table") {
    return (
      <div className="space-y-4">
        {section.description && (
          <p className="text-sm text-gray-500 leading-relaxed">
            {section.description}
          </p>
        )}
        {section.actions && section.actions.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-end">
            <PrimaryButton>{section.actions[0]}</PrimaryButton>
            {section.actions.slice(1).map((a) => (
              <OutlineButton key={a}>{a}</OutlineButton>
            ))}
          </div>
        )}
        <TableSkeleton columns={section.columns || []} />
      </div>
    );
  }

  if (section.type === "cards") {
    return (
      <div className="space-y-4">
        {section.description && (
          <p className="text-sm text-gray-500 leading-relaxed">
            {section.description}
          </p>
        )}
        {section.actions && section.actions.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-end">
            <PrimaryButton>{section.actions[0]}</PrimaryButton>
            {section.actions.slice(1).map((a) => (
              <OutlineButton key={a}>{a}</OutlineButton>
            ))}
          </div>
        )}
        <CardsGrid cards={section.cards || []} />
      </div>
    );
  }

  if (section.type === "tabs") {
    const activeTab =
      (section.tabs && section.tabs.find((t) => t.id === activeTabId)) ||
      (section.tabs ? section.tabs[0] : null);

    if (!activeTab) return null;

    return (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {section.tabs.map((tab) => (
            <Pill
              key={tab.id}
              active={tab.id === activeTabId}
              onClick={() => setActiveTabId(tab.id)}
            >
              {tab.label}
            </Pill>
          ))}
        </div>
        {activeTab.actions && activeTab.actions.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-end">
            <PrimaryButton>{activeTab.actions[0]}</PrimaryButton>
            {activeTab.actions.slice(1).map((a) => (
              <OutlineButton key={a}>{a}</OutlineButton>
            ))}
          </div>
        )}
        {activeTab.type === "table" && (
          <TableSkeleton columns={activeTab.columns || []} />
        )}
      </div>
    );
  }

  return null;
};

const Header = () => (
  <header className="w-full border-b border-gray-100 bg-white">
    <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-lg">
          ح
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-gray-900 text-sm md:text-base">
            منصة حصيف الوطنية
          </span>
          <span className="text-xs text-gray-500">
            برنامج شباب المملكة حصيف الوطني – حلول صائبة يقترح فعلها
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="hidden md:inline-flex px-3 py-1.5 rounded-xl border border-gray-200 text-xs text-gray-700">
          مركز المساعدة
        </button>
        <button className="h-9 w-9 rounded-full bg-gray-100 flex items-center justify-center text-xs text-gray-600">
          ر
        </button>
      </div>
    </div>
  </header>
);

const Sidebar = ({ accounts, activeAccountId, onChangeAccount }) => (
  <aside className="md:w-64 flex-shrink-0 space-y-3">
    <div className="rounded-2xl border border-gray-100 bg-white p-3 md:p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-gray-600">الحسابات</span>
        <span className="text-[10px] text-gray-400">منصة متعددة الأطراف</span>
      </div>
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-1">
        {accounts.map((account) => (
          <button
            key={account.id}
            onClick={() => onChangeAccount(account.id)}
            className={
              "flex-1 md:flex-none text-right px-3 py-2 rounded-xl border text-xs md:text-sm transition whitespace-nowrap " +
              (activeAccountId === account.id
                ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                : "border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700")
            }
          >
            {account.label}
          </button>
        ))}
      </div>
    </div>
  </aside>
);

const App = () => {
  const [activeAccountId, setActiveAccountId] = useState(PLATFORM_ACCOUNTS[0].id);
  const [activeSectionId, setActiveSectionId] = useState(
    PLATFORM_ACCOUNTS[0].sections[0].id
  );

  const activeAccount =
    PLATFORM_ACCOUNTS.find((acc) => acc.id === activeAccountId) ||
    PLATFORM_ACCOUNTS[0];

  const activeSection =
    activeAccount.sections.find((sec) => sec.id === activeSectionId) ||
    activeAccount.sections[0];

  useEffect(() => {
    setActiveSectionId(activeAccount.sections[0]?.id);
  }, [activeAccountId]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="flex-1 w-full">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 px-4 py-4 md:py-6">
          <Sidebar
            accounts={PLATFORM_ACCOUNTS}
            activeAccountId={activeAccountId}
            onChangeAccount={setActiveAccountId}
          />

          <main className="flex-1 flex flex-col gap-4">
            <section
              className={
                "rounded-2xl border p-4 md:p-5 " + activeAccount.colorClass
              }
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h1 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                    {activeAccount.label}
                  </h1>
                  <p className="text-xs md:text-sm text-gray-600 max-w-2xl">
                    {activeAccount.description}
                  </p>
                </div>
                <div className="flex gap-2">
                  <PrimaryButton>إجراء رئيسي</PrimaryButton>
                  <OutlineButton>إعدادات الحساب</OutlineButton>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-gray-100 bg-white p-3 md:p-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {activeAccount.sections.map((sec) => (
                  <Pill
                    key={sec.id}
                    active={sec.id === activeSectionId}
                    onClick={() => setActiveSectionId(sec.id)}
                  >
                    {sec.label}
                  </Pill>
                ))}
              </div>

              <div className="mb-4 flex items-center justify-between gap-2">
                <div>
                  <h2 className="text-sm md:text-base font-semibold text-gray-900">
                    {activeSection.label}
                  </h2>
                  {activeSection.description && (
                    <p className="text-xs text-gray-500 mt-0.5">
                      {activeSection.description}
                    </p>
                  )}
                </div>
              </div>

              <SectionView section={activeSection} />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
