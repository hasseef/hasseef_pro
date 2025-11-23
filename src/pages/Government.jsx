import React from "react";

export const GovernmentPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-12 space-y-6">
      <div className="space-y-3 max-w-3xl">
        <h1 className="text-xl md:text-2xl font-semibold text-brand-text">
          حصيف والقطاع الحكومي
        </h1>
        <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
          يوفّر نظام حصيف للجهات الحكومية وإمارات المناطق وهيئات التطوير إطارًا
          تشغيليًا واضحًا لاستقبال الحلول والمبادرات والمشاريع والفعاليات
          وربطها بشكل منهجي ببرامج وأهداف ومؤشرات رؤية المملكة 2030، مع تمكين
          المتابعة اللحظية للأثر التنموي ورفع كفاءة الإنفاق.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="rounded-lg border border-brand-border bg-white p-4">
          <h3 className="text-sm font-semibold text-brand-text mb-2">
            دور إمارة المنطقة
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            تتابع الإمارة عبر منصة حصيف المشاريع والمبادرات والفعاليات داخل
            النطاق الجغرافي للمنطقة، مع استعراض الشركات الأكثر مساهمة، والجمعيات
            الفاعلة، والفرص المتاحة للتمويل والرعاية، إضافة إلى لوحات مرتبطة
            بمستهدفات الرؤية.
          </p>
        </div>
        <div className="rounded-lg border border-brand-border bg-white p-4">
          <h3 className="text-sm font-semibold text-brand-text mb-2">
            دور الوزارات والهيئات
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            يمكن للوزارات والهيئات طرح احتياجاتها وتحدياتها كفرص حلول أمام
            القطاعات الأخرى، واستقبال المبادرات والمشاريع المرتبطة بنطاق عملها،
            ومتابعة التنفيذ عبر مؤشرات أداء واضحة وتقارير دورية.
          </p>
        </div>
        <div className="rounded-lg border border-brand-border bg-white p-4">
          <h3 className="text-sm font-semibold text-brand-text mb-2">
            الربط مع رؤية 2030
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            يتيح حصيف ربط كل مشروع أو مبادرة أو فعالية ببرامج الرؤية وأهدافها
            ومؤشراتها، مع إمكانية تصدير التقارير والبيانات لدعم عمل الوحدات
            الإشرافية ومكاتب تحقيق الرؤية في الأجهزة الحكومية.
          </p>
        </div>
      </div>

      <section className="rounded-lg border border-brand-border bg-white p-4 space-y-3">
        <h2 className="text-sm md:text-base font-semibold text-brand-text">
          أمثلة لواجهات ربط فني (Integration) مع أنظمة الجهات
        </h2>
        <p className="text-[11px] md:text-xs text-gray-600 leading-relaxed">
          يوضّح المثال التالي نموذجًا مبسّطًا لكيفية ربط أنظمة الجهة الحكومية
          بمنصة حصيف عبر واجهات برمجية (APIs)، سواء لاستقبال احتياجات الجهة أو
          تحديث حالة المشاريع والمبادرات المرتبطة بها.
        </p>
        <div className="rounded-lg border border-brand-border bg-gray-900 text-gray-100 text-[11px] md:text-xs p-3 overflow-x-auto">
          <pre className="whitespace-pre leading-relaxed">
POST /api/v1/projects/sync
Content-Type: application/json

[
  {
    "project_id": "GOV-PRJ-001",
    "entity_id": "وزارة التعليم",
    "title": "برنامج توجيه مهني لطلاب المرحلة الثانوية",
    "region": "منطقة حائل",
    "vision_program": "تنمية القدرات البشرية",
    "status": "قيد التنفيذ",
    "kpi_students_reached": 1200,
    "kpi_schools": 24
  },
  {
    "project_id": "GOV-PRJ-002",
    "entity_id": "وزارة الصحة",
    "title": "مبادرة عيادة مجتمعية متنقلة",
    "region": "منطقة الحدود الشمالية",
    "vision_program": "جودة الحياة",
    "status": "قيد الدراسة",
    "kpi_visits_target": 3000
  }
]
          </pre>
        </div>
        <p className="text-[11px] text-gray-500">
          يمكن تخصيص هذه النماذج فنيًا بالتعاون مع فرق التحول الرقمي في الجهات
          الحكومية ومكاتب تحقيق الرؤية، وفقًا لمستوى النضج التقني لكل جهة.
        </p>
      </section>
    </div>
  );
};
