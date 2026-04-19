import ArticleLayout from "@/components/blog/ArticleLayout";

export default function ProductEngineering() {
  return (
    <ArticleLayout
      title="هندسة المنتجات – فن الوصف وترتيب التصنيفات"
      subtitle="صفحة المنتج هي مندوب مبيعاتك الصامت الذي يعمل ٢٤ ساعة. هل هي مُدرّبة بشكل صحيح؟"
      category="كتابة المحتوى"
      readTime="٩ دقائق"
      date="٥ أبريل ٢٠٢٦"
    >
      <div className="space-y-10 text-foreground">

        <section>
          <p className="text-lg text-muted-foreground leading-relaxed">
            معظم أصحاب المتاجر يكتبون وصف المنتج كأنهم يملؤون نموذجاً حكومياً: اسم المنتج، المقاسات، المواد. هذا ليس وصفاً — هذا فاتورة. الوصف الجيد يُحكي قصة، يحل مشكلة، ويجعل العميل يشعر أنه لا يستطيع الاستغناء عن هذا المنتج.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-foreground mb-4">١. صيغة الوصف الذي يبيع</h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            استخدم هذه الصيغة المثبتة في كل صفحة منتج:
          </p>
          <div className="space-y-4">
            {[
              { step: "المشكلة", content: "ابدأ بنقطة الألم التي يعانيها عميلك. مثال: \"تعبت من كريمات الترطيب التي تعد بالكثير وتُقدّم القليل؟\"" },
              { step: "الحل", content: "قدّم منتجك كالحل المنتظر. \"كريم X مصنوع من زيت الأرغان النقي 100% — يُرطّب لـ٤٨ ساعة دون إحساس دهني.\"" },
              { step: "المميزات", content: "النقاط التقنية: المكوّنات، الحجم، مدة الصلاحية، طريقة الاستخدام. اجعلها قائمة نقطية، ليس فقرات طويلة." },
              { step: "الدعوة للشراء", content: "لا تنهِ الوصف بجملة تقنية. انهِه بدعوة: \"أضفه لسلّتك الآن واستمتعي ببشرة ناعمة من أول استخدام.\"" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl bg-muted/40 border border-border/40">
                <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-black flex items-center justify-center shrink-0">{i + 1}</span>
                <div>
                  <p className="font-bold text-foreground text-sm mb-1">{item.step}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-foreground mb-4">٢. الصور: نصف قرار الشراء</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            الصورة الجيدة تبيع، والصورة السيئة تطرد. في متجر إلكتروني، لا يستطيع العميل لمس المنتج — الصورة هي اللمسة البصرية البديلة.
          </p>
          <ul className="space-y-3">
            {[
              "الصورة الرئيسية: خلفية بيضاء، إضاءة احترافية، وضوح تام",
              "صورة Lifestyle: المنتج في سياق الاستخدام الحقيقي (شخص يستخدمه)",
              "صورة التفاصيل: تكبير يُظهر الجودة والمواد والحياكة",
              "فيديو قصير (١٥ ثانية): يرفع معدل التحويل بنسبة تصل لـ٨٠%",
              "لا تستخدم صور المورّد مباشرة — معظم المنافسين يفعلون ذلك",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black text-foreground mb-4">٣. ترتيب التصنيفات: علم قبل أن يكون فن</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            ترتيب المنتجات داخل كل قسم يؤثر مباشرة على المبيعات. لا تترك القرار للصدفة.
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 space-y-3">
            <p className="text-sm font-bold text-primary">قاعدة الترتيب الذكي:</p>
            <p className="text-sm text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground">أولاً:</span> المنتجات الأكثر مبيعاً — تُشكّل الثقة وتُريح العميل الجديد</p>
            <p className="text-sm text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground">ثانياً:</span> المنتجات الجديدة — تُشجّع العميل المتكرر على الاكتشاف</p>
            <p className="text-sm text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground">ثالثاً:</span> المنتجات ذات الهامش الربحي الأعلى — ضعها في المنتصف لجذب العين</p>
            <p className="text-sm text-muted-foreground leading-relaxed"><span className="font-semibold text-foreground">أخيراً:</span> المخزون المتبقي للتصفية في النهاية</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-foreground mb-4">٤. العنوان والـ SEO: اجعل منتجك يُكتشف</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            اسم المنتج في سلة هو أيضاً عنوان صفحة الـ SEO. لا تكتب فقط "فستان وردي" — اكتب "فستان سهرة وردي مقاس L – قماش ساتان فاخر". هذا ما يبحث عنه عميلك في Google بالضبط.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            الصيغة المثلى لاسم المنتج: <span className="font-semibold text-foreground">[نوع المنتج] + [اللون/الحجم/المادة] + [الاستخدام أو المناسبة]</span>. هذه الصيغة تُحسّن ظهورك في نتائج البحث وتوفّر على العميل وقت البحث في نفس الوقت.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-foreground mb-4">٥. المنتجات المرتبطة: ارفع متوسط الطلب</h2>
          <p className="text-muted-foreground leading-relaxed">
            قسم "منتجات ذات صلة" أو "اشترِها معاً" يرفع متوسط قيمة الطلب بنسبة تصل لـ ٣٠% إذا استُخدم بذكاء. القاعدة: المنتج المرتبط يجب أن يكمّل المنتج الأصلي، لا أن يُنافسه. مثال: مع حقيبة جلدية، اقترح محفظة من نفس الخامة. لا تقترح حقيبة أخرى.
          </p>
        </section>

      </div>
    </ArticleLayout>
  );
}
