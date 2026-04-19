import ArticleLayout from "@/components/blog/ArticleLayout";

export default function TechArsenal() {
  return (
    <ArticleLayout
      title="الترسانة التقنية – الربط الذكي وعصر الـ Data"
      subtitle="البيانات هي النفط الجديد. المتجر الذي يفهم أرقامه يتفوّق دائماً على الذي يعمل بالحدس."
      category="الأدوات والتقنية"
      readTime="١٠ دقائق"
      date="١ أبريل ٢٠٢٦"
    >
      <div className="space-y-10 text-foreground">

        <section>
          <p className="text-lg text-muted-foreground leading-relaxed">
            أصحاب المتاجر الناجحة لا يعملون بالتخمين. يعرفون تحديداً: من أين يأتي زوارهم، أي المنتجات تُشاهَد أكثر، وأين يغادر العميل قبل الشراء. هذه المعلومات متاحة مجاناً — لكنها تحتاج إعداداً صحيحاً.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-foreground mb-4">١. Google Analytics 4 — عيونك على المتجر</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            ربط Google Analytics بمتجرك ليس خياراً — إنه ضرورة من اليوم الأول. هذه الأداة تُخبرك بكل شيء: عدد الزوار، المدة التي يقضونها في الموقع، نسبة الارتداد، وأكثر.
          </p>
          <div className="space-y-3">
            {[
              { metric: "معدل الارتداد (Bounce Rate)", insight: "إذا تجاوز 70%، مشكلتك في التصميم أو سرعة التحميل" },
              { metric: "مدة الجلسة (Session Duration)", insight: "أقل من دقيقة = المحتوى لا يشدّ الانتباه" },
              { metric: "صفحات الخروج (Exit Pages)", insight: "أي صفحة يغادرون منها؟ هذه هي نقطة الضعف" },
              { metric: "مصادر الزيارات", insight: "هل معظمهم من إنستغرام؟ سناب؟ البحث المجاني؟ ضاعف المصدر الرابح" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl bg-muted/40 border border-border/40">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <p className="font-bold text-foreground text-sm">{item.metric}</p>
                  <p className="text-muted-foreground text-sm mt-0.5">{item.insight}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-foreground mb-4">٢. Meta Pixel — ركيزة إعلاناتك</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Meta Pixel هو الكود الذي يُخبر فيسبوك وإنستغرام بمن زار متجرك وماذا فعل. بدونه، إعلاناتك تُطلق في الهواء دون هدف. مع تفعيله، يمكنك استهداف من زار صفحة منتج بعينه لكن لم يشترِ.
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <p className="text-sm font-bold text-primary mb-2">الأحداث الأساسية التي يجب تتبّعها:</p>
            <div className="grid grid-cols-2 gap-2 mt-3">
              {["ViewContent", "AddToCart", "InitiateCheckout", "Purchase"].map((event) => (
                <div key={event} className="bg-background rounded-lg px-3 py-2 text-sm font-mono text-primary border border-primary/20 text-center">
                  {event}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-foreground mb-4">٣. ربط واتساب بطريقة احترافية</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            واتساب هو قناة البيع الأولى في السوق الخليجي. لكن هناك فرق كبير بين واتساب شخصي وواتساب Business API.
          </p>
          <ul className="space-y-3">
            {[
              "واتساب Business: رسائل ترحيب تلقائية، كتالوج منتجات، ساعات العمل — مجاني وكافٍ للبداية",
              "ربط واتساب بزر \"استفسر الآن\" في صفحة كل منتج يرفع معدل التحويل",
              "أتمتة رسائل تأكيد الطلب عبر واتساب تُقلّل الاستفسارات بنسبة 60%",
              "Business API: للمتاجر التي تتجاوز 100 طلب شهرياً — يسمح بإرسال حملات لعملائك مباشرة",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black text-foreground mb-4">٤. منصات الشحن الذكية</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            الشحن اليدوي يعني: تسجيل كل طلب يدوياً، احتمال الأخطاء، وتأخير في التسليم. الربط التلقائي مع شركات الشحن يُوفّر عليك ساعات أسبوعياً ويُحسّن تجربة العميل.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            سلة تدعم الربط المباشر مع أرامكس، SMSA، Naqel، DHL وغيرها. بعد الربط: الطلب يُسجَّل تلقائياً، العميل يستلم رقم التتبّع فوراً، وأنت تتابع كل شيء من لوحة التحكم دون مراسلات.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-foreground mb-4">٥. البريد الإلكتروني: القناة المُهملة ذات العائد الأعلى</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            مقابل كل ريال تنفقه على التسويق بالبريد الإلكتروني، تعود بـ٣٦ ريالاً في المتوسط — أعلى من أي قناة أخرى. الخطوة الأولى: ابدأ في جمع عناوين البريد من أول يوم، حتى لو لم تستخدمها فوراً.
          </p>
          <div className="bg-muted/50 rounded-xl p-5 border border-border/50">
            <p className="text-sm font-semibold text-foreground mb-3">٣ حملات بريد يجب أن تكون لديك تلقائياً:</p>
            <div className="space-y-2">
              {[
                "ترحيب بالعميل الجديد مع كوبون خصم أول طلب",
                "تذكير بالسلة المتروكة بعد ٢٤ ساعة",
                "شكر بعد الشراء + طلب تقييم بعد ٤٨ ساعة",
              ].map((item, i) => (
                <p key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-primary font-bold shrink-0">{i + 1}.</span> {item}
                </p>
              ))}
            </div>
          </div>
        </section>

      </div>
    </ArticleLayout>
  );
}
