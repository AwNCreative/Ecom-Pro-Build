import ArticleLayout from "@/components/blog/ArticleLayout";

export default function SalesMachine() {
  return (
    <ArticleLayout
      title="ماكينة المبيعات – الكوبونات والسلات المتروكة"
      subtitle="السلة المتروكة هي أموال تركتها على الطاولة. هذا المقال يعلّمك كيف تستردّها."
      category="التسويق"
      readTime="٨ دقائق"
      date="٢٨ مارس ٢٠٢٦"
    >
      <div className="space-y-10 text-foreground">

        <section>
          <p className="text-lg text-muted-foreground leading-relaxed">
            إحصائية صادمة: ٧٠% من المتسوقين يضيفون منتجات لسلّتهم ثم يغادرون دون إتمام الشراء. هؤلاء ليسوا غير مهتمين — هم مترددون. مهمتك هي تحويل هذا التردد إلى قرار شراء.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-foreground mb-4">١. أسباب التخلي عن السلة — افهمها أولاً</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            قبل أن تبحث عن حلول، عليك أن تفهم لماذا يغادر العملاء دون إتمام الشراء:
          </p>
          <div className="space-y-3">
            {[
              { reason: "تكاليف الشحن المفاجئة (48%)", fix: "الحل: اعرض تكلفة الشحن مبكراً، أو قدّم شحناً مجانياً من حد معين" },
              { reason: "إجبارهم على إنشاء حساب (24%)", fix: "الحل: فعّل خيار \"الشراء كضيف\" في سلة" },
              { reason: "عملية دفع معقدة (18%)", fix: "الحل: لا تطلب أكثر من المعلومات الضرورية" },
              { reason: "عدم الثقة ببيانات البطاقة (17%)", fix: "الحل: أظهر شعارات الأمان وشهادات الحماية بوضوح" },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl bg-muted/40 border border-border/40">
                <p className="font-bold text-foreground text-sm mb-1">{item.reason}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.fix}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-foreground mb-4">٢. استراتيجية استعادة السلة المتروكة</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            الخطة المثلى لاستعادة العملاء تعمل على ٣ مستويات زمنية:
          </p>
          <div className="space-y-4">
            {[
              { time: "بعد ١ ساعة", msg: "رسالة واتساب أو بريد: \"هل نسيت شيئاً؟ سلّتك لا تزال بانتظارك!\" — بدون خصم، الفضول كافٍ" },
              { time: "بعد ٢٤ ساعة", msg: "\"آخر فرصة: المنتج X متوفر بكمية محدودة\" — أضف إحساس الإلحاح الحقيقي إذا كانت الكمية فعلاً محدودة" },
              { time: "بعد ٤٨ ساعة", msg: "\"هدية خاصة لك: خصم 10% لإتمام طلبك\" — الآن يمكن تقديم الكوبون كآخر دفعة" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl bg-muted/40 border border-border/40">
                <div className="shrink-0">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">{item.time}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.msg}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-foreground mb-4">٣. فن الكوبون: أداة ربح لا أداة تخفيض</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            الكوبون ليس "تنازل عن ربح" — إنه أداة لتحريك قرارات محددة. الخطأ الشائع: تقديم خصم عام دائم يُعلّم العميل ألّا يشتري بالسعر الكامل أبداً.
          </p>
          <ul className="space-y-3">
            {[
              "كوبون أول طلب: لتحويل الزائر الجديد لمشترٍ — استخدمه مرة واحدة فقط",
              "كوبون الحد الأدنى: \"احصل على 15% خصم عند شراء بـ٢٠٠ ريال فأكثر\" — يرفع متوسط الطلب",
              "كوبون العميل المتوقف: لمن لم يشترِ منذ ٦٠ يوماً — يُعيد إحياء العلاقة",
              "كوبون المرجعية: \"شارك رابطك واحصل على ٢٠ ريال لكل صديق\" — يحوّل عملاءك لمسوّقين",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black text-foreground mb-4">٤. Upsell وCross-sell: فن رفع قيمة كل طلب</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <span className="font-semibold text-foreground">Upsell:</span> عرض نسخة أفضل من نفس المنتج. "اشترِ العبوة الكبيرة بـ+20 ريال فقط وتوفّر ٣٠%". <span className="font-semibold text-foreground">Cross-sell:</span> عرض منتج مكمّل. "أضف واقي الشاشة بـ١٥ ريال فقط مع هاتفك الجديد".
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
            <p className="text-sm font-bold text-primary mb-2">القاعدة الذهبية</p>
            <p className="text-sm text-muted-foreground leading-relaxed">قيمة المنتج المعروض في Cross-sell يجب ألّا تتجاوز 25% من قيمة المنتج الأصلي. أكثر من ذلك يُشتّت العميل بدلاً من أن يُحفّزه.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-black text-foreground mb-4">٥. العروض الزمنية: اصنع موسم مبيعاتك الخاص</h2>
          <p className="text-muted-foreground leading-relaxed">
            لا تنتظر الجمعة السوداء أو رمضان فقط. الأذكياء يصنعون مناسباتهم: "عيد ميلاد المتجر — خصم 30% لـ٢٤ ساعة". "الاثنين الذهبي الأسبوعي — منتج واحد بسعر لقطة كل أسبوع". هذه المناسبات تُنشئ عادة الشراء المتكررة لدى عملائك.
          </p>
        </section>

      </div>
    </ArticleLayout>
  );
}
