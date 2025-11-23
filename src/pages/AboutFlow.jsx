import React from "react";

export const AboutFlow = () => {
  const steps = [
    "طرح الحل أو الفكرة من فرد أو جهة.",
    "دراسة الفكرة وتعزيزها علميًا عبر الجامعات أو الخبراء.",
    "تحويل الحل إلى مشروع أو فعالية أو برنامج.",
    "إتاحة المشروع للتمويل أو الرعاية أو التطوع.",
    "التنفيذ والمتابعة ورفع التقارير.",
    "ربط النتائج بمؤشرات وأهداف رؤية 2030."
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 md:py-12 space-y-6">
      <div className="space-y-2 text-center max-w-2xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold text-brand-text">
          مسار العمل داخل منصة حصيف
        </h2>
        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
          يوضّح هذا المسار كيف تتحول الفكرة من حل مقترح إلى مشروع منفّذ
          ومؤثّر ومربوط بالرؤية 2030، مع وضوح دور كل حساب من حسابات المنصة.
        </p>
      </div>
      <div className="grid md:grid-cols-6 gap-3 md:gap-4 text-[11px] md:text-xs">
        {steps.map((s, i) => (
          <div
            key={i}
            className="rounded-lg border border-brand-border bg-white p-3 flex flex-col gap-2"
          >
            <div className="text-brand-green font-medium">خطوة {i + 1}</div>
            <p className="text-gray-600 leading-relaxed">{s}</p>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-gray-500 text-center pt-2">
        يمكن استخدام هذه الصفحة في العروض الرسمية لشرح منطق المنصة خلال دقائق
        معدودة أمام أي جهة.
      </p>
    </div>
  );
};
