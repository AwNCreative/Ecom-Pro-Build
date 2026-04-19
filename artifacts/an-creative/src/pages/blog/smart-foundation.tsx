import ArticleLayout from "@/components/blog/ArticleLayout";

export default function SmartFoundation() {
  return (
    <ArticleLayout
      title="التأسيس الذكي – هندسة المتجر من الصفر"
      subtitle="قبل أن تضيف أول منتج، عليك أن تبني الأرضية الصحيحة. هذا المقال يأخذك خطوة بخطوة لتأسيس متجر سلة باحترافية."
      category="التجارة الإلكترونية"
      readTime="٨ دقائق"
      date="١٥ أبريل ٢٠٢٦"
    >
      <div className="space-y-10 text-foreground">

        <section>
          <p className="text-lg text-muted-foreground leading-relaxed">
            يرتكب كثير من أصحاب المتاجر خطأً قاتلاً في البداية: يبدؤون بإضافة المنتجات قبل أن يبنوا الأساس. النتيجة؟ متجر يبدو عشوائياً، لا يثق به الزائر، ولا تظهر نتائجه في محركات البحث. في هذا المقال سنكسر هذه العادة ونبني من الصفر.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-foreground mb-4">١. اختيار الاسم والهوية</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            اسم متجرك هو أول رسالة تصل للعميل. اختر اسماً قصيراً (لا يتجاوز كلمتين)، يُعبّر عن تخصصك، وسهل النطق والكتابة. تجنّب الأسماء العامة مثل "متجري" أو "سوق الخير"؛ هذه الأسماء لا تُميّزك ولا تُحسّن ترتيبك في البحث.
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <p className="text-sm font-bold text-primary mb-2">نصيحة الخبراء</p>
            <p className="text-sm text-muted-foreground leading-relaxed">ابحث عن اسمك في Google وفي منصات التواصل الاجتماعي قبل تسجيله. تأكّد من توفّر اسم المستخدم على Instagram وSnapchat على الأقل.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-foreground mb-4">٢. إعداد الهوية البصرية</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            الهوية البصرية ليست ترفاً — إنها ضرورة تجارية. المتاجر التي تمتلك لوناً رئيسياً وشعاراً واضحاً تحصل على نسبة ثقة أعلى بـ 68% من الزوار مقارنة بالمتاجر التي تفتقرها.
          </p>
          <ul className="space-y-3">
            {[
              "اختر لونين رئيسيين فقط وتمسّك بهما في كل مكان",
              "اللوجو: بسيط، قابل للقراءة بحجم صغير، ويعمل على الخلفيتين الفاتحة والداكنة",
              "الخط: اختر خطاً عربياً واحداً للعناوين وآخر للنصوص",
              "صور الغلاف: جودة عالية، خلفية بيضاء أو بلون علامتك",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black text-foreground mb-4">٣. هيكل الأقسام والتصنيفات</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            قبل رفع أي منتج، ارسم هيكل متجرك على ورقة. كيف ستقسّم منتجاتك؟ ما هي الأقسام الرئيسية؟ القاعدة الذهبية: لا يجب أن يحتاج الزائر لأكثر من ٣ نقرات للوصول لأي منتج.
          </p>
          <div className="bg-muted/50 rounded-xl p-5 border border-border/50">
            <p className="text-sm font-semibold text-foreground mb-3">مثال على هيكل صحيح:</p>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>الرئيسية → <span className="text-foreground font-medium">ملابس نسائية</span> → فساتين → فساتين سهرة</p>
              <p>الرئيسية → <span className="text-foreground font-medium">العروض</span> → التخفيضات الموسمية</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-foreground mb-4">٤. إعداد صفحة "عن المتجر" بشكل احترافي</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            هذه الصفحة يزورها عملاؤك قبل أول عملية شراء — إنها صفحة القرار. لا تكتب فيها "متجرنا يهدف إلى تقديم أفضل المنتجات"؛ هذه جملة فارغة لا تقنع أحداً.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            بدلاً من ذلك، أجب على هذه الأسئلة الثلاثة: لماذا أسّست هذا المتجر؟ من تخدم تحديداً؟ ما الذي يجعل تجربة الشراء منك مختلفة؟ القصة الحقيقية تبيع أكثر من الشعارات الفارغة.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-foreground mb-4">٥. إعداد وسائل الدفع والشحن منذ اليوم الأول</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            كثير من أصحاب المتاجر يضيفون المنتجات أولاً ثم يعودون لإعداد الدفع لاحقاً. هذا خطأ يكلّفك مبيعات حقيقية. الزائر الجاهز للشراء لن ينتظرك.
          </p>
          <ul className="space-y-3">
            {[
              "فعّل على الأقل: مدى، Apple Pay، والدفع عند الاستلام (إن توفّر)",
              "ربط شركة شحن واحدة على الأقل مع حساب موحّد قبل الإطلاق",
              "حدّد سياسة الإرجاع بوضوح وضعها في مكان ظاهر",
              "تأكّد من أن فواتير الطلبات تصدر تلقائياً بعد كل عملية شراء",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black text-foreground mb-4">٦. الإطلاق الصحيح: لا تفتح الباب قبل أن يكتمل البيت</h2>
          <p className="text-muted-foreground leading-relaxed">
            قائمة تحقّق قبل الإطلاق: لوجو واضح ✓ — لون رئيسي ثابت ✓ — أقل من ١٠ منتجات بصور وأوصاف مكتملة ✓ — وسائل دفع فعّالة ✓ — رقم واتساب مرئي ✓ — سياسة إرجاع واضحة ✓. أطلق بـ١٠ منتجات ممتازة خيرٌ من إطلاق بـ١٠٠ منتج متوسط.
          </p>
        </section>

      </div>
    </ArticleLayout>
  );
}
