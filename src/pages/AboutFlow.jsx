import React from "react";

export const AboutFlow = () => {
  const steps = [
    {
      id: 1,
      title: "١. طرح الحل أو المشروع",
      description:
        "يبدأ المسار من فرد، أو جمعية، أو جهة حكومية، أو هيئة تطوير، عبر نموذج مبسط يوضح فكرة الحل وأهدافه والفئة المستهدفة.",
    },
    {
      id: 2,
      title: "٢. التعزيز العلمي والمهني",
      description:
        "يُحال المشروع عند الحاجة إلى جامعة أو جهة استشارية لإضافة القيمة العلمية، وتصميم مؤشرات القياس، وضبط نموذج العمل.",
    },
    {
      id: 3,
      title: "٣. التمويل والرعاية والاستثمار",
      description:
        "تظهر المشاريع المؤهلة للجهات المانحة والقطاع الخاص كرعايات أو برامج مسؤولية اجتماعية أو فرص استثمارية.",
    },
    {
      id: 4,
      title: "٤. التنفيذ والمتابعة",
      description:
        "تنفّذ الجهة المالكة المشروع مع المتطوعين والمستفيدين، مع تحديث دوري لحالة التنفيذ والإنجاز.",
    },
    {
      id: 5,
      title: "٥. التقارير ومؤشرات الرؤية 2030",
      description:
        "تُعرض مخرجات المشروع ومؤشرات أثره في لوحات خاصة للإمارة والوزارات والجهات ذات العلاقة، مرتبطة ببرامج وأهداف الرؤية.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 md:py-12 space-y-6">
      <div className="space-y-2 text-center max-w-2xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
          كيف تتحرك الفرص داخل منصة حصيف؟
        </h2>
        <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
          تم تصميم حصيف كنظام تشغيل تنموي، وليس مجرد موقع إلكتروني. يوضّح هذا
          المسار كيف تنتقل الفكرة من مجرد حل مقترح إلى مشروع منفذ ومؤثر
          ومرتبط بالرؤية 2030.
        </p>
      </div>
      <div className="grid md:grid-cols-5 gap-3 md:gap-4">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="relative rounded-2xl border border-slate-800 bg-slate-950/70 p-3 flex flex-col gap-2"
          >
            <div className="inline-flex items-center gap-2 text-[11px] text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              خطوة {index + 1}
            </div>
            <h3 className="text-xs md:text-sm font-semibold text-slate-50">
              {step.title}
            </h3>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-slate-400 text-center pt-2">
        هذا المسار قابل للشرح بصريًا في العروض الرسمية لاختصار الفكرة وتوضيح
        دور كل حساب من حسابات المنصة الثمانية.
      </p>
    </div>
  );
};
