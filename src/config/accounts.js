// المكوّنات الأساسية في منصة حصيف (19 مكوّن)
export const CORE_MODULES = [
  { id: "solutions", label: "الحلول", },
  { id: "projects", label: "المشاريع", },
  { id: "events", label: "الفعاليات", },
  { id: "facilities", label: "المرافق", },
  { id: "incubation", label: "الاحتضان", },
  { id: "advisory", label: "الاستشارات", },
  { id: "volunteering", label: "التطوع", },
  { id: "employment", label: "التوظيف", },
  { id: "coop-training", label: "التدريب التعاوني", },
  { id: "trainers", label: "المتحدثون والمدربون", },
  { id: "sponsorships", label: "الرعايات", },
  { id: "funding", label: "التمويل", },
  { id: "partnerships", label: "الشراكات", },
  { id: "wallet", label: "محافظ الجهات", },
  { id: "investment", label: "الاستثمار", },
  { id: "vision2030", label: "رؤية 2030", },
  { id: "gov-link", label: "الربط الحكومي", },
  { id: "reports", label: "التقارير", },
  { id: "integration", label: "التكاملات", }
];

export const ACCOUNTS = [
  {
    id: "emirate",
    label: "حساب الإمارة",
    typeLabel: "إمارة المنطقة",
    modules: ["projects", "events", "facilities", "volunteering", "vision2030", "gov-link", "reports"],
    description:
      "تمكين إمارة المنطقة من متابعة المشاريع والفعاليات والشراكات في النطاق الجغرافي وربطها بالرؤية 2030.",
    sections: [
      {
        id: "projects",
        label: "المشاريع في المنطقة",
        type: "table",
        description: "عرض المشاريع التنموية ضمن نطاق الإمارة.",
        columns: ["اسم المشروع", "القطاع", "المنطقة", "نسبة الإنجاز"],
        formTitle: "تسجيل مشروع جديد",
        formFields: [
          { name: "name", label: "اسم المشروع", type: "text" },
          { name: "sector", label: "القطاع", type: "text" },
          { name: "region", label: "المنطقة", type: "text" },
          { name: "progress", label: "نسبة الإنجاز", type: "number" }
        ]
      },
      {
        id: "events",
        label: "طلبات الفعاليات",
        type: "table",
        description: "متابعة طلبات الفعاليات واعتمادها.",
        columns: ["اسم الفعالية", "الجهة المنظمة", "الموقع", "التاريخ", "الحالة"],
        formTitle: "تسجيل فعالية جديدة",
        formFields: [
          { name: "event", label: "اسم الفعالية", type: "text" },
          { name: "organizer", label: "الجهة المنظمة", type: "text" },
          { name: "place", label: "الموقع", type: "text" },
          { name: "date", label: "التاريخ", type: "date" }
        ]
      },
      {
        id: "vision",
        label: "تمثيل الرؤية 2030",
        type: "vision",
        description: "ربط مشاريع المنطقة ببرامج وأهداف رؤية المملكة 2030."
      },
      {
        id: "govlink",
        label: "الربط بالجهات والهيئات",
        type: "govlink",
        description: "ربط المشاريع بالجهات الحكومية وهيئات التطوير في المنطقة."
      },
      {
        id: "reports",
        label: "مركز التقارير",
        type: "reports",
        description: "تقارير ومؤشرات عامة حول مشاريع وفعاليات الإمارة."
      }
    ]
  },
  {
    id: "dev-authority",
    label: "حساب هيئة التطوير",
    typeLabel: "هيئة تطوير",
    modules: ["projects", "facilities", "investment", "vision2030", "gov-link", "reports"],
    description:
      "إدارة المشاريع الاستراتيجية والمرافق والفرص الاستثمارية ضمن نطاق هيئة التطوير.",
    sections: [
      {
        id: "strategic-projects",
        label: "المشاريع الاستراتيجية",
        type: "table",
        description: "المشاريع الكبرى التي تشرف عليها هيئة التطوير.",
        columns: ["اسم المشروع", "القطاع", "المنطقة", "نسبة الإنجاز"],
        formTitle: "إضافة مشروع استراتيجي",
        formFields: [
          { name: "name", label: "اسم المشروع", type: "text" },
          { name: "sector", label: "القطاع", type: "text" },
          { name: "region", label: "المنطقة", type: "text" }
        ]
      },
      {
        id: "assets",
        label: "المرافق والأصول",
        type: "table",
        description: "المرافق التي يمكن استثمارها أو استخدامها للفعاليات.",
        columns: ["اسم المرفق", "النوع", "الموقع", "حالة الإتاحة"],
        formTitle: "تسجيل مرفق",
        formFields: [
          { name: "facility", label: "اسم المرفق", type: "text" },
          { name: "type", label: "النوع", type: "text" },
          { name: "location", label: "الموقع", type: "text" }
        ]
      },
      {
        id: "reports",
        label: "تقارير الهيئة",
        type: "reports",
        description: "تقارير حول مشاريع ومرافق هيئة التطوير."
      }
    ]
  },
  {
    id: "gov-entity",
    label: "حساب الجهة الحكومية",
    typeLabel: "وزارة / جهة حكومية",
    modules: ["solutions", "projects", "events", "vision2030", "gov-link", "integration", "reports"],
    description:
      "طرح احتياجات الجهة واستقبال الحلول والمشاريع وربطها بالرؤية 2030.",
    sections: [
      {
        id: "needs",
        label: "احتياجات الجهة",
        type: "table",
        description: "التحديات المطروحة كفرص حلول.",
        columns: ["عنوان الاحتياج", "القطاع", "المنطقة", "حالة الحلول"],
        formTitle: "إضافة احتياج",
        formFields: [
          { name: "title", label: "عنوان الاحتياج", type: "text" },
          { name: "sector", label: "القطاع", type: "text" },
          { name: "region", label: "المنطقة", type: "text" }
        ]
      },
      {
        id: "programs",
        label: "برامج الجهة",
        type: "table",
        description: "برامج ومبادرات الجهة الحكومية.",
        columns: ["اسم البرنامج", "المجال", "الفئة المستهدفة"],
        formTitle: "تسجيل برنامج",
        formFields: [
          { name: "name", label: "اسم البرنامج", type: "text" },
          { name: "domain", label: "المجال", type: "text" },
          { name: "target", label: "الفئة المستهدفة", type: "text" }
        ]
      },
      {
        id: "vision",
        label: "ربط البرامج بالرؤية 2030",
        type: "vision",
        description: "تحديد برنامج الرؤية والأهداف المرتبطة ببرامج الجهة."
      },
      {
        id: "govlink",
        label: "الربط بالجهات الشريكة",
        type: "govlink",
        description: "تحديد الجهات الحكومية الشريكة في تنفيذ البرامج."
      },
      {
        id: "api",
        label: "تكاملات API (ديمو)",
        type: "code",
        description: "مثال واجهة برمجية لربط أنظمة الجهة بمنصة حصيف.",
        code: `POST /api/v1/government/needs
Content-Type: application/json

{
  "entity_id": "GOV-001",
  "need_title": "مثال احتياج",
  "sector": "التعليم",
  "region": "منطقة حائل"
}`
      },
      {
        id: "reports",
        label: "تقارير الجهة الحكومية",
        type: "reports",
        description: "تقارير حول البرامج والمشاريع المرتبطة بالجهة."
      }
    ]
  },
  {
    id: "private-sector",
    label: "حساب القطاع الخاص",
    typeLabel: "شركة / منشأة",
    modules: ["sponsorships", "funding", "partnerships", "wallet", "reports"],
    description:
      "تفعيل برامج المسؤولية الاجتماعية والرعايات والاستثمار المجتمعي.",
    sections: [
      {
        id: "csr",
        label: "فرص المسؤولية الاجتماعية",
        type: "table",
        description: "مشاريع مؤهلة للدعم ضمن المسؤولية الاجتماعية.",
        columns: ["اسم المشروع", "الجهة المنفذة", "المجال", "المنطقة"],
        formTitle: "تسجيل فرصة دعم",
        formFields: [
          { name: "project", label: "اسم المشروع", type: "text" },
          { name: "ngo", label: "الجهة المنفذة", type: "text" }
        ]
      },
      {
        id: "sponsorships",
        label: "الرعايات",
        type: "table",
        description: "فرص رعاية الفعاليات والبرامج.",
        columns: ["اسم الفعالية", "المجال", "الموقع", "نوع الرعاية"],
        formTitle: "تسجيل رعاية",
        formFields: [
          { name: "event", label: "اسم الفعالية", type: "text" },
          { name: "type", label: "نوع الرعاية", type: "text" }
        ]
      },
      {
        id: "reports",
        label: "تقارير المسؤولية الاجتماعية",
        type: "reports",
        description: "مؤشرات حول مساهمات الشركة وأثرها."
      }
    ]
  },
  {
    id: "nonprofit",
    label: "حساب القطاع غير الربحي",
    typeLabel: "جمعية / مؤسسة غير ربحية",
    modules: ["solutions", "projects", "volunteering", "funding", "partnerships", "reports"],
    description:
      "طرح المشاريع التنموية وطلبات التمويل وفرص التطوع والشراكات.",
    sections: [
      {
        id: "projects",
        label: "المشاريع التنموية",
        type: "table",
        description: "المشاريع المطلوب تمويلها أو الجاري تنفيذها.",
        columns: ["اسم المشروع", "المجال", "المنطقة", "حالة التمويل"],
        formTitle: "إضافة مشروع",
        formFields: [
          { name: "name", label: "اسم المشروع", type: "text" },
          { name: "domain", label: "المجال", type: "text" }
        ]
      },
      {
        id: "volunteering",
        label: "فرص التطوع",
        type: "table",
        description: "فرص التطوع المرتبطة بالمشاريع.",
        columns: ["اسم الفرصة", "المشروع", "نوع المهمة", "عدد الساعات"],
        formTitle: "تسجيل فرصة تطوع",
        formFields: [
          { name: "title", label: "اسم الفرصة", type: "text" },
          { name: "project", label: "المشروع", type: "text" }
        ]
      },
      {
        id: "reports",
        label: "تقارير الأثر",
        type: "reports",
        description: "ملخص لأثر مشاريع الجهة وعدد المستفيدين وساعات التطوع."
      }
    ]
  },
  {
    id: "university",
    label: "حساب الجامعات",
    typeLabel: "جامعة / كلية",
    modules: ["advisory", "coop-training", "reports", "vision2030", "integration"],
    description:
      "التعزيز العلمي للمشاريع وتقديم فرص التدريب التعاوني.",
    sections: [
      {
        id: "scientific",
        label: "التعزيز العلمي",
        type: "table",
        description: "المشاريع المحوّلة للمراجعة العلمية.",
        columns: ["اسم المشروع", "الجهة", "الكلية/المركز", "نوع المشاركة"],
        formTitle: "تسجيل مشاركة علمية",
        formFields: [
          { name: "project", label: "اسم المشروع", type: "text" },
          { name: "college", label: "الكلية/المركز", type: "text" }
        ]
      },
      {
        id: "training",
        label: "الفرص التدريبية",
        type: "table",
        description: "فرص التدريب التعاوني المتاحة للطلاب.",
        columns: ["اسم البرنامج", "الجهة", "المدة"],
        formTitle: "إضافة فرصة تدريبية",
        formFields: [
          { name: "program", label: "اسم البرنامج", type: "text" },
          { name: "host", label: "الجهة", type: "text" }
        ]
      },
      {
        id: "reports",
        label: "تقارير الجامعة",
        type: "reports",
        description: "مؤشرات حول مساهمة الجامعة في المنصة."
      }
    ]
  },
  {
    id: "donor",
    label: "حساب المانحين",
    typeLabel: "صندوق / جهة مانحة",
    modules: ["funding", "wallet", "reports", "vision2030"],
    description:
      "استعراض فرص التمويل وإدارة محفظة المانح وتقارير الأثر.",
    sections: [
      {
        id: "funding-opps",
        label: "فرص التمويل",
        type: "table",
        description: "قائمة بالمشاريع المؤهلة للتمويل.",
        columns: ["اسم المشروع", "الجهة المنفذة", "المجال", "قيمة التمويل"],
        formTitle: "تسجيل فرصة تمويل",
        formFields: [
          { name: "project", label: "اسم المشروع", type: "text" },
          { name: "amount", label: "قيمة التمويل", type: "number" }
        ]
      },
      {
        id: "portfolio",
        label: "محفظة المانح",
        type: "cards",
        description: "بطاقات تلخص وضع المحفظة التمويلية.",
        cards: [
          { id: "pf1", label: "عدد المشاريع الممولة", value: "24" },
          { id: "pf2", label: "إجمالي الالتزامات (مليون ريال)", value: "18" },
          { id: "pf3", label: "متوسط نسبة الإنجاز", value: "76٪" }
        ]
      },
      {
        id: "reports",
        label: "تقارير المانح",
        type: "reports",
        description: "تقارير حول المشاريع الممولة وربطها بالرؤية 2030."
      }
    ]
  },
  {
    id: "individual",
    label: "حساب الأفراد",
    typeLabel: "فرد / شاب/ـة",
    modules: ["solutions", "volunteering", "coop-training", "employment", "reports"],
    description:
      "تمكين الأفراد من طرح الحلول وبناء ملف مهني وتطوعي مرتبط بالمشاريع.",
    sections: [
      {
        id: "my-initiatives",
        label: "مبادراتي",
        type: "table",
        description: "المبادرات التي يقترحها الفرد.",
        columns: ["اسم المبادرة", "القطاع المستهدف", "الحالة"],
        formTitle: "تسجيل مبادرة",
        formFields: [
          { name: "title", label: "اسم المبادرة", type: "text" },
          { name: "sector", label: "القطاع المستهدف", type: "text" }
        ]
      },
      {
        id: "profile",
        label: "ملفي التنموي",
        type: "cards",
        description: "ملخص لمسار الفرد التطوعي والتدريبي.",
        cards: [
          { id: "cv1", label: "ساعات التطوع", value: "120 ساعة" },
          { id: "cv2", label: "البرامج التدريبية", value: "8 برامج" },
          { id: "cv3", label: "المشاريع المشاركة", value: "5 مشاريع" }
        ]
      },
      {
        id: "reports",
        label: "تقاريري",
        type: "reports",
        description: "تقارير عن مشاركة الفرد في المنصة."
      }
    ]
  }
];
