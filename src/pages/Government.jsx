import React from "react";

export const GovernmentPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-12 space-y-6">
      <div className="space-y-3 max-w-3xl">
        <h1 className="text-xl md:text-2xl font-semibold text-brand-text">
          حصيف والقطاع الحكومي
        </h1>
        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
          يهيئ هذا النموذج منصة حصيف لتكون قناة موحّدة تستقبل الحلول والمشاريع
          والفعاليات من المجتمع والجهات، وتعرضها على الإمارة والوزارات
          والهيئات بطريقة منظمة ومربوطة بالرؤية 2030.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 text-[11px] md:text-xs">
        <div className="rounded-lg border border-brand-border bg-white p-4">
          <h3 className="text-sm font-semibold text-brand-text mb-2">
            دور إمارة المنطقة
          </h3>
          <p className="text-gray-600 leading-relaxed">
            متابعة المشاريع والفعاليات والشراكات في المنطقة، واعتماد
            الفعاليات، والتعرّف على الجهات الأكثر مساهمة والفرص التنموية
            المتاحة.
          </p>
        </div>
        <div className="rounded-lg border border-brand-border bg-white p-4">
          <h3 className="text-sm font-semibold text-brand-text mb-2">
            دور الوزارات والهيئات
          </h3>
          <p className="text-gray-600 leading-relaxed">
            طرح احتياجات وتحديات الجهة كفرص حلول، ومتابعة البرامج والمشاريع
            المرتبطة بنطاق عملها، وقراءة مؤشرات الأثر المرتبطة بالرؤية.
          </p>
        </div>
        <div className="rounded-lg border border-brand-border bg-white p-4">
          <h3 className="text-sm font-semibold text-brand-text mb-2">
            الربط مع رؤية 2030
          </h3>
          <p className="text-gray-600 leading-relaxed">
            ربط المشاريع والبرامج والفعاليات ببرامج الرؤية وأهدافها ومؤشراتها،
            مع إمكانية تصدير التقارير لوحدات ومكاتب تحقيق الرؤية في الأجهزة
            الحكومية.
          </p>
        </div>
      </div>
      <section className="rounded-lg border border-brand-border bg-white p-4 space-y-3 text-[11px] md:text-xs">
        <h2 className="text-sm md:text-base font-semibold text-brand-text">
          مثال تكامل فني (Integration) مع أنظمة جهة حكومية
        </h2>
        <p className="text-gray-600 leading-relaxed">
          المثال التالي توضيحي لكيف يمكن لجهة حكومية مزامنة بيانات مشاريعها
          مع منصة حصيف عبر واجهة برمجية:
        </p>
        <div className="rounded-lg border border-brand-border bg-gray-900 text-gray-100 p-3 overflow-x-auto">
          <pre className="whitespace-pre text-[10px] md:text-xs leading-relaxed">
POST /api/v1/projects/sync
Content-Type: application/json

[
  {
    "project_id": "GOV-PRJ-001",
    "entity_id": "وزارة التعليم",
    "title": "برنامج توجيه مهني لطلاب الثانوية",
    "region": "منطقة حائل",
    "vision_program": "تنمية القدرات البشرية",
    "status": "قيد التنفيذ"
  },
  {
    "project_id": "GOV-PRJ-002",
    "entity_id": "وزارة الصحة",
    "title": "مبادرة عيادة مجتمعية متنقلة",
    "region": "منطقة الحدود الشمالية",
    "vision_program": "جودة الحياة",
    "status": "قيد الدراسة"
  }
]
          </pre>
        </div>
        <p className="text-[10px] text-gray-500">
          يمكن تخصيص النماذج الحقيقية بالتعاون مع فرق التحول الرقمي في
          الوزارات والهيئات، بحسب احتياج كل جهة.
        </p>
      </section>
    </div>
  );
};
