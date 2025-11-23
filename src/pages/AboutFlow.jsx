import React from "react";

export const AboutFlow = () => {
  const steps = [
    {
      id: 1,
      title: "١. طرح الحل أو المشروع",
      description:
        "تبدأ الرحلة من فرد، أو جمعية، أو جهة حكومية، أو هيئة تطوير، عبر نموذج مبسط يوضح فكرة الحل وأهدافه والفئة المستهدفة.",
    },
    {
      id: 2,
      title: "٢. التعزيز العلمي والمهني",
      description:
        "يمكن إحالة المشاريع إلى الجامعات أو بيوت الخبرة لإضافة القيمة العلمية وتصميم مؤشرات القياس ونماذج العمل.",
    },
    {
      id: 3,
      title: "٣. التمويل والرعاية والاستثمار",
      description:
        "تظهر المشاريع المؤهلة للجهات المانحة والقطاع الخاص كفرص تمويل أو رعاية أو استثمار اجتماعي.",
    },
    {
      id: 4,
      title: "٤. التنفيذ والمتابعة",
      description:
        "تنفّذ الجهة المالكة المشروع مع تحديث دوري لحالة التنفيذ، والتطوع، والمستفيدين، والفعاليات المرتبطة.",
    },
    {
      id: 5,
      title: "٥. التقارير ومؤشرات الرؤية 2030",
      description:
        "تُعرض مخرجات المشروع ومؤشرات أثره في لوحات خاصة للإمارة والوزارات والجهات ذات العلاقة، مع ربط ببرامج وأهداف الرؤية.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 md:py-12 space-y-6">
      <div className="space-y-2 text-center max-w-2xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold text-brand-text">
          مسار الفرص داخل منصة حصيف
        </h2>
        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
          يوضّح هذا المسار كيف تتحول الفكرة من حل مقترح إلى مشروع منفّذ ومؤثر
          ومرتبط بالرؤية 2030، مع وضوح أدوار الأطراف الثمانية في المنصة.
        </p>
      </div>
      <div className="grid md:grid-cols-5 gap-3 md:gap-4">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="rounded-lg border border-brand-border bg-white p-3 flex flex-col gap-2"
          >
            <div className="text-[11px] text-brand-green font-medium">
              خطوة {index + 1}
            </div>
            <h3 className="text-xs md:text-sm font-semibold text-brand-text">
              {step.title}
            </h3>
            <p className="text-[11px] text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-gray-500 text-center pt-2">
        يمكن استخدام هذه الصفحة في العروض الرسمية لشرح منطق المنصة خلال دقائق
        معدودة أمام أي جهة حكومية أو مانحة أو جامعة.
      </p>
    </div>
  );
};
