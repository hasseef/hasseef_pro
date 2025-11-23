export const ACCOUNTS = [
  {
    id: "emirate",
    label: "حساب الإمارة",
    typeLabel: "إمارة المنطقة",
    description:
      "تمكين إمارة المنطقة من متابعة المشاريع والمبادرات والفعاليات والشراكات في النطاق الجغرافي وربطها بمستهدفات رؤية 2030، مع إتاحة لوحات قياس تدعم اتخاذ القرار.",
    sections: [
      {
        id: "initiatives",
        label: "المبادرات والمشاريع",
        type: "table",
        description:
          "قائمة بالمبادرات والمشاريع التنموية المرتبطة بالمنطقة، مع ربط كل مبادرة ببرنامج الرؤية والجهات الشريكة.",
        columns: ["اسم المبادرة", "البرنامج", "الجهة المالكة", "المنطقة", "حالة التنفيذ"],
        formTitle: "تسجيل مبادرة/مشروع جديد",
        formFields: [
          { name: "title", label: "اسم المبادرة/المشروع", type: "text" },
          { name: "program", label: "برنامج الرؤية المرتبط", type: "text" },
          { name: "owner", label: "الجهة المالكة", type: "text" },
          { name: "region", label: "المنطقة", type: "text" },
          { name: "status", label: "حالة التنفيذ", type: "select", options: ["قيد الدراسة", "قيد التنفيذ", "منجز"] }
        ]
      },
      {
        id: "events",
        label: "طلبات الفعاليات",
        type: "table",
        description:
          "متابعة طلبات الفعاليات (مؤتمرات، ورش، معارض) واعتمادها وربطها بالمسح الأمني والجهات المشاركة.",
        columns: ["اسم الفعالية", "الجهة المنظمة", "الموقع", "التاريخ", "الحالة"],
        formTitle: "تسجيل طلب فعالية جديد",
        formFields: [
          { name: "name", label: "اسم الفعالية", type: "text" },
          { name: "organizer", label: "الجهة المنظمة", type: "text" },
          { name: "place", label: "الموقع المقترح", type: "text" },
          { name: "date", label: "تاريخ الفعالية", type: "date" },
          { name: "notes", label: "ملاحظات إضافية", type: "textarea" }
        ]
      },
      {
        id: "dashboards",
        label: "لوحات المتابعة",
        type: "cards",
        description:
          "نماذج لبطاقات متابعة رقمية تُمكّن الإمارة من قراءة الوضع التنموي للمنطقة بسرعة.",
        cards: [
          { id: "kpi1", label: "عدد المشاريع الفعّالة", value: "128 مشروعًا" },
          { id: "kpi2", label: "الفرص قيد الدراسة", value: "32 فرصة" },
          { id: "kpi3", label: "المبادرات المرتبطة بالرؤية", value: "94٪" }
        ]
      }
    ]
  },
  {
    id: "dev-authority",
    label: "حساب هيئة التطوير",
    typeLabel: "هيئة تطوير",
    description:
      "إدارة المشاريع الكبرى والحلول التنموية الواردة، والفرص الاستثمارية، والمرافق في نطاق هيئة التطوير، مع إمكانية مواءمة هذه المشاريع مع الخطط المكانية للمنطقة.",
    sections: [
      {
        id: "strategic-projects",
        label: "المشاريع الاستراتيجية",
        type: "table",
        description:
          "المشاريع الكبرى التي تشرف عليها هيئة التطوير ومراحل التنفيذ والشركاء الرئيسيون.",
        columns: ["اسم المشروع", "القطاع", "المنطقة", "نسبة الإنجاز", "الشركاء"],
        formTitle: "إضافة مشروع استراتيجي",
        formFields: [
          { name: "title", label: "اسم المشروع", type: "text" },
          { name: "sector", label: "القطاع", type: "text" },
          { name: "region", label: "المنطقة", type: "text" },
          { name: "progress", label: "نسبة الإنجاز المتوقعة", type: "number" },
          { name: "partners", label: "الشركاء الرئيسيون", type: "textarea" }
        ]
      },
      {
        id: "assets",
        label: "المرافق والأصول",
        type: "table",
        description:
          "المرافق التي يمكن إتاحتها كمواقع للفعاليات أو كمشاريع استثمارية ضمن نطاق الهيئة.",
        columns: ["اسم المرفق", "النوع", "الموقع", "حالة الإتاحة", "ملاحظات"],
        formTitle: "تسجيل مرفق/أصل",
        formFields: [
          { name: "name", label: "اسم المرفق", type: "text" },
          { name: "type", label: "نوع المرفق", type: "text" },
          { name: "location", label: "الموقع", type: "text" },
          { name: "availability", label: "حالة الإتاحة", type: "select", options: ["متاح", "غير متاح", "يتطلب تنسيق"] }
        ]
      }
    ]
  },
  {
    id: "gov-entity",
    label: "حساب الجهة الحكومية",
    typeLabel: "وزارة / جهة حكومية",
    description:
      "طرح احتياجات وتحديات الجهة واستقبال الحلول وربط المبادرات ببرامج وأهداف رؤية 2030، مع تمكين قياس الأثر وتحسين كفاءة الإنفاق.",
    sections: [
      {
        id: "needs",
        label: "احتياجات الجهة",
        type: "table",
        description: "عرض التحديات والاحتياجات المطروحة للقطاعات الأخرى كفرص حلول.",
        columns: ["عنوان الاحتياج", "القطاع المستهدف", "تاريخ الطرح", "حالة الحلول"],
        formTitle: "إضافة احتياج جديد",
        formFields: [
          { name: "title", label: "عنوان الاحتياج", type: "text" },
          { name: "sector", label: "القطاع المستهدف", type: "text" },
          { name: "region", label: "المنطقة", type: "text" },
          { name: "visionProgram", label: "برنامج الرؤية المرتبط", type: "text" },
          { name: "details", label: "تفاصيل مختصرة", type: "textarea" }
        ]
      },
      {
        id: "gov-programs",
        label: "البرامج والمبادرات",
        type: "table",
        description:
          "نماذج للبرامج التي تطلقها الجهة ويمكن ربطها بحلول مقدمة من القطاعات الأخرى.",
        columns: ["اسم البرنامج", "المجال", "الفئة المستهدفة", "مرتبطة بالرؤية"],
        formTitle: "تسجيل برنامج/مبادرة",
        formFields: [
          { name: "name", label: "اسم البرنامج/المبادرة", type: "text" },
          { name: "domain", label: "المجال", type: "text" },
          { name: "target", label: "الفئة المستهدفة", type: "text" },
          { name: "visionLinked", label: "مرتبطة ببرنامج رؤية", type: "select", options: ["نعم", "لا"] }
        ]
      },
      {
        id: "api-demo",
        label: "تكاملات API (ديمو)",
        type: "code",
        description:
          "نموذج مبسّط لواجهة برمجية يمكن أن تعتمدها الجهة الحكومية لربط أنظمتها الداخلية بمنصة حصيف.",
        code: `POST /api/v1/government/needs
Content-Type: application/json

{
  "entity_id": "MOE-001",
  "need_title": "تفعيل برامج توجيه مهني لطلاب المرحلة الثانوية",
  "sector": "التعليم",
  "region": "منطقة حائل",
  "vision_program": "تنمية القدرات البشرية",
  "details": "تفصيل قصير يوضح التحدي والفرصة المقترحة.",
  "proposed_budget_range": "500000-1000000",
  "preferred_partners": ["جامعات", "قطاع خاص", "قطاع غير ربحي"]
}`
      }
    ]
  },
  {
    id: "private-sector",
    label: "حساب القطاع الخاص",
    typeLabel: "شركة / منشأة",
    description:
      "منصة موحدة لتفعيل برامج المسؤولية الاجتماعية والرعايات والاستثمار في المشاريع والفعاليات والمرافق، مع تقارير أثر تدعم سمعة المنشأة ومسارها الاستثماري.",
    sections: [
      {
        id: "csr-opps",
        label: "فرص المسؤولية الاجتماعية",
        type: "table",
        description: "المشاريع والمبادرات المؤهلة للدعم ضمن برامج المسؤولية الاجتماعية.",
        columns: ["اسم المشروع", "الجهة المنفذة", "المجال", "المنطقة", "قيمة مقترحة"],
        formTitle: "تسجيل فرصة مسؤولية اجتماعية",
        formFields: [
          { name: "project", label: "اسم المشروع", type: "text" },
          { name: "ngo", label: "الجهة المنفذة", type: "text" },
          { name: "domain", label: "المجال", type: "text" },
          { name: "region", label: "المنطقة", type: "text" },
          { name: "value", label: "القيمة المقترحة", type: "number" }
        ]
      },
      {
        id: "sponsorships",
        label: "الرعايات والفعاليات",
        type: "table",
        description:
          "الفعاليات التي يمكن للقطاع الخاص رعايتها تجاريًا أو مجتمعيًا ضمن هوية موحدة.",
        columns: ["اسم الفعالية", "المجال", "الموقع", "التاريخ", "نوع الرعاية"],
        formTitle: "إضافة فرصة رعاية",
        formFields: [
          { name: "event", label: "اسم الفعالية", type: "text" },
          { name: "domain", label: "المجال", type: "text" },
          { name: "place", label: "الموقع", type: "text" },
          { name: "date", label: "التاريخ", type: "date" },
          { name: "sponsorshipType", label: "نوع الرعاية", type: "text" }
        ]
      }
    ]
  },
  {
    id: "nonprofit",
    label: "حساب القطاع غير الربحي",
    typeLabel: "جمعية / مؤسسة غير ربحية",
    description:
      "طرح المشاريع التنموية، وطلبات التمويل، وتنظيم التطوع، وإدارة الفعاليات والشراكات، مع ربط الأثر بمستهدفات برامج رؤية 2030.",
    sections: [
      {
        id: "projects",
        label: "المشاريع التنموية",
        type: "table",
        description: "المشاريع المطلوب تمويلها أو الجاري تنفيذها مع حالة التمويل والإنجاز.",
        columns: ["اسم المشروع", "المجال", "المنطقة", "حالة التمويل", "نسبة الإنجاز"],
        formTitle: "إضافة مشروع تنموي",
        formFields: [
          { name: "name", label: "اسم المشروع", type: "text" },
          { name: "domain", label: "المجال", type: "text" },
          { name: "region", label: "المنطقة", type: "text" },
          { name: "fundStatus", label: "حالة التمويل", type: "text" }
        ]
      },
      {
        id: "volunteering",
        label: "فرص التطوع",
        type: "table",
        description:
          "فرص التطوع المرتبطة بالمشاريع والفعاليات، مع توضيح نوع المهمة وعدد الساعات.",
        columns: ["اسم الفرصة", "المشروع المرتبط", "نوع المهمة", "عدد الساعات", "الحالة"],
        formTitle: "تسجيل فرصة تطوعية",
        formFields: [
          { name: "title", label: "اسم الفرصة", type: "text" },
          { name: "project", label: "المشروع المرتبط", type: "text" },
          { name: "taskType", label: "نوع المهمة", type: "text" },
          { name: "hours", label: "عدد الساعات", type: "number" }
        ]
      }
    ]
  },
  {
    id: "university",
    label: "حساب الجامعات",
    typeLabel: "جامعة / كلية",
    description:
      "تعزيز الدور العلمي للجامعة في مراجعة المشاريع وتقديم الاستشارات وإتاحة الفرص التدريبية، وربط البحث العلمي بالأولويات التنموية.",
    sections: [
      {
        id: "scientific-review",
        label: "التعزيز العلمي",
        type: "table",
        description: "المشاريع المحوّلة للجامعة للمراجعة العلمية أو إعداد نماذج القياس.",
        columns: ["اسم المشروع", "الجهة المالكة", "الكلية/المركز", "نوع المشاركة", "الحالة"],
        formTitle: "تسجيل مشاركة علمية",
        formFields: [
          { name: "project", label: "اسم المشروع", type: "text" },
          { name: "owner", label: "الجهة المالكة", type: "text" },
          { name: "college", label: "الكلية/المركز", type: "text" },
          { name: "participationType", label: "نوع المشاركة", type: "text" }
        ]
      },
      {
        id: "training",
        label: "الفرص التدريبية",
        type: "table",
        description:
          "البرامج التدريبية والتعاونية المتاحة لطلاب الجامعة من خلال المشاريع المسجلة في المنصة.",
        columns: ["اسم البرنامج", "الجهة المستضيفة", "المدة", "التخصصات المستهدفة"],
        formTitle: "إضافة فرصة تدريبية",
        formFields: [
          { name: "program", label: "اسم البرنامج", type: "text" },
          { name: "host", label: "الجهة المستضيفة", type: "text" },
          { name: "duration", label: "المدة", type: "text" },
          { name: "majors", label: "التخصصات المستهدفة", type: "textarea" }
        ]
      }
    ]
  },
  {
    id: "donor",
    label: "حساب المانحين",
    typeLabel: "صندوق / جهة مانحة",
    description:
      "استعراض المشاريع المؤهلة للتمويل وإدارة المحفظة ومتابعة تقارير الأثر التنموي وربط ذلك باستراتيجيات الجهة المانحة.",
    sections: [
      {
        id: "funding-opps",
        label: "فرص التمويل",
        type: "table",
        description:
          "قائمة بالمشاريع المؤهلة للتمويل مع معلومات مختصرة عن الأثر المتوقع وقيمة التمويل المطلوبة.",
        columns: ["اسم المشروع", "الجهة المنفذة", "المجال", "قيمة التمويل المطلوبة"],
        formTitle: "إضافة فرصة تمويل",
        formFields: [
          { name: "project", label: "اسم المشروع", type: "text" },
          { name: "ngo", label: "الجهة المنفذة", type: "text" },
          { name: "domain", label: "المجال", type: "text" },
          { name: "amount", label: "قيمة التمويل المطلوبة", type: "number" }
        ]
      },
      {
        id: "portfolio",
        label: "محفظة المانح",
        type: "cards",
        description:
          "نماذج لبطاقات تلخص وضع المحفظة التمويلية للجهة المانحة داخل المنصة.",
        cards: [
          { id: "pf1", label: "عدد المشاريع الممولة", value: "24 مشروعًا" },
          { id: "pf2", label: "إجمالي الالتزامات", value: "18 مليون ريال" },
          { id: "pf3", label: "متوسط نسبة الإنجاز", value: "76٪" }
        ]
      }
    ]
  },
  {
    id: "individual",
    label: "حساب الأفراد",
    typeLabel: "فرد / شاب/ـة",
    description:
      "تمكين الأفراد من طرح الحلول والمبادرات وبناء ملف مهني تطوعي وتدريبي مرتبط باهتماماتهم، مع تعزيز ارتباطهم برؤية 2030.",
    sections: [
      {
        id: "my-initiatives",
        label: "مبادراتي",
        type: "table",
        description:
          "المبادرات والحلول التي طرحها الفرد مع حالة دراستها والجهات المهتمة بها.",
        columns: ["اسم المبادرة", "نوع المبادرة", "القطاع المستهدف", "حالة الدراسة"],
        formTitle: "تسجيل مبادرة جديدة",
        formFields: [
          { name: "title", label: "اسم المبادرة", type: "text" },
          { name: "category", label: "نوع المبادرة", type: "text" },
          { name: "targetSector", label: "القطاع المستهدف", type: "text" },
          { name: "summary", label: "ملخص الفكرة", type: "textarea" }
        ]
      },
      {
        id: "profile",
        label: "ملفي التنموي",
        type: "cards",
        description:
          "بطاقات تعريفية مختصرة تلخص مسار الفرد التطوعي والتدريبي والمهني.",
        cards: [
          { id: "cv1", label: "ساعات التطوع المعتمدة", value: "120 ساعة" },
          { id: "cv2", label: "البرامج التدريبية", value: "8 برامج" },
          { id: "cv3", label: "المشاريع المشاركة", value: "5 مشاريع" }
        ]
      }
    ]
  }
];
