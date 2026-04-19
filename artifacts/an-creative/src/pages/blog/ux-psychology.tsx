import ArticleLayout from "@/components/blog/ArticleLayout";

export default function UxPsychology() {
  return (
    <ArticleLayout
      title="سيكولوجية الواجهة – كيف تبني متجراً يبيع؟"
      subtitle="كيف تجعل متجرك يُقنع الزائر بالشراء قبل أن يقرأ كلمة واحدة؟ الجواب يكمن في علم النفس البصري."
      category="تجربة المستخدم"
      readTime="٧ دقائق"
      date="١٠ أبريل ٢٠٢٦"
    >
      <div className="space-y-10 text-foreground">

        <section>
          <p className="text-lg text-muted-foreground leading-relaxed">
            في أقل من ٥٠ ميلي ثانية — أسرع من رمشة عين — يحكم الزائر على متجرك ويقرر: هل يبقى أم يغادر؟ هذا الحكم يعتمد على ما يراه، لا على ما يقرأه. فهم سيكولوجية الواجهة هو الفرق بين متجر يحوّل وآخر يطرد.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-foreground mb-4">١. قانون الـ "F Pattern" في القراءة</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            الدراسات تثبت أن عين المستخدم تتحرك في شكل حرف F عند مسح الصفحة: أفقياً في الأعلى، أفقياً في المنتصف، ثم عمودياً في الجانب الأيسر (أو الأيمن للعربية). ضع أهم المعلومات — الاسم، العرض، زر الشراء — في هذه المسارات بالضبط.
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <p className="text-sm font-bold text-primary mb-2">تطبيق عملي</p>
            <p className="text-sm text-muted-foreground leading-relaxed">لا تضع معلومات حاسمة في وسط الصفحة أو في المناطق التي تُجاهلها العين. العروض الترويجية؟ يجب أن تكون في أعلى الصفحة أو في الشريط العلوي مباشرة.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-foreground mb-4">٢. اللون والثقة: ليست مجرد جماليات</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            اللون يُشكّل 85% من قرار الشراء الأوّل. الأبيض يوحي بالنظافة والبساطة. الأسود يوحي بالفخامة. الأزرق يبني الثقة. الأحمر يستثير الإلحاح. اختر لونك الرئيسي بناءً على ما تريد أن يشعر به عميلك، لا بناءً على ما يعجبك شخصياً.
          </p>
          <ul className="space-y-3">
            {[
              "زر الشراء (CTA): استخدم لوناً مختلفاً تماماً عن باقي الصفحة ليبرز",
              "الخلفية الداكنة تُظهر المنتجات الفاخرة بشكل أقوى",
              "الخلفية البيضاء تُعطي إحساساً بالنظافة وسهولة الاختيار",
              "لا تستخدم أكثر من ٣ ألوان في نفس الصفحة",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black text-foreground mb-4">٣. الدليل الاجتماعي: أقوى أداة بيع لديك</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            ٩٢% من المستهلكين يثقون بتوصيات الآخرين أكثر مما يثقون بأي إعلان. الدليل الاجتماعي ليس تفصيلة — إنه ركيزة البيع.
          </p>
          <div className="bg-muted/50 rounded-xl p-5 border border-border/50 space-y-2">
            <p className="text-sm font-semibold text-foreground mb-2">أشكال الدليل الاجتماعي في متجرك:</p>
            {[
              "عدد المنتجات المباعة: \"بِيع ٢٣٠+ مرة\"",
              "تقييمات العملاء مع صورهم: أكثر تأثيراً من النص فقط",
              "شارة \"الأكثر مبيعاً\" على المنتج المميز",
              "قصص عملاء حقيقية في صفحة منفصلة",
            ].map((item, i) => (
              <p key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary font-bold">•</span> {item}
              </p>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-foreground mb-4">٤. الإلحاح الحقيقي مقابل المزيّف</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            الإلحاح يرفع المبيعات — لكن الإلحاح المزيّف يدمر ثقة العميل للأبد. "العرض ينتهي بعد ساعة" ثم يتجدد كل يوم؟ عميلك ذكي ويعرف.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            الإلحاح الحقيقي: "الكمية المتبقية: ٣ فقط" (إن كان صحيحاً). "العرض ينتهي الجمعة" (بتاريخ محدد). "اشترِ الآن واستلم قبل عيد الفطر". هذه رسائل حقيقية تبني ثقة وتحفّز على الشراء في نفس الوقت.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-foreground mb-4">٥. تجربة الجوال أولاً — لا خيار آخر</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            أكثر من 78% من مبيعات التجارة الإلكترونية في السعودية تأتي من الهاتف. تصميم متجرك للحاسوب أولاً خطأ استراتيجي كبير.
          </p>
          <ul className="space-y-3">
            {[
              "زر \"أضف للسلة\" يجب أن يكون ظاهراً دون تمرير الصفحة على الجوال",
              "الصور يجب أن تُحمّل في أقل من ثانيتين على الشبكة العادية",
              "الخط لا يقل عن 16px لتجنّب إجهاد العين",
              "اختبر متجرك على iPhone وSamsung قبل كل إطلاق",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

      </div>
    </ArticleLayout>
  );
}
