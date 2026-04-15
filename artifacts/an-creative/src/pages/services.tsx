import { motion } from "framer-motion";
import { PenTool, MonitorPlay, Layers, Printer, Briefcase, Film, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    id: "brand-identity",
    title: "تصميم الهوية البصرية",
    icon: PenTool,
    desc: "نبتكر هويات بصرية لا تُنسى من الصفر تتواصل مع جمهورك المستهدف وتصمد أمام اختبار الزمن.",
    includes: ["الشعار والعلامات", "أنظمة الألوان والخطوط", "دليل العلامة التجارية", "تصميم القرطاسية"],
    color: "from-rose-500/10 to-red-600/10"
  },
  {
    id: "web-design",
    title: "تصميم وتطوير المواقع",
    icon: MonitorPlay,
    desc: "مواقع إلكترونية سريعة الاستجابة وعالية الأداء مبنية بأحدث التقنيات مع التركيز على التحويل وتجربة المستخدم الاستثنائية.",
    includes: ["تصميم UI/UX", "تطوير الواجهة الأمامية", "تكامل نظام إدارة المحتوى", "تحسين الأداء"],
    color: "from-blue-500/10 to-cyan-600/10"
  },
  {
    id: "social-media",
    title: "استراتيجية التواصل الاجتماعي",
    icon: Layers,
    desc: "استراتيجيات محتوى شاملة وأصول مخصصة تُشرك جمهورك وتحقق نمواً ملموساً عبر المنصات.",
    includes: ["استراتيجية المحتوى", "إنشاء الأصول الإبداعية", "تخطيط الحملات", "التحليلات والتقارير"],
    color: "from-purple-500/10 to-violet-600/10"
  },
  {
    id: "print-design",
    title: "تصميم الطباعة والتغليف",
    icon: Printer,
    desc: "مواد مطبوعة راقية وحلول تغليف متميزة تمتد بحضور علامتك التجارية إلى العالم المادي.",
    includes: ["تصميم التغليف", "الكتب والمطبوعات التحريرية", "الملصقات واللافتات", "إدارة الإنتاج الطباعي"],
    color: "from-amber-500/10 to-orange-600/10"
  },
  {
    id: "consulting",
    title: "الاستشارات الإبداعية",
    icon: Briefcase,
    desc: "توجيه استراتيجي لمواءمة مخرجاتك الإبداعية مع أهدافك التجارية والتغلب على تحديات التصميم.",
    includes: ["تدقيق العلامات التجارية", "استشارات أنظمة التصميم", "الإخراج الإبداعي", "ورش العمل الجماعية"],
    color: "from-emerald-500/10 to-green-600/10"
  },
  {
    id: "motion",
    title: "الرسوم المتحركة",
    icon: Film,
    desc: "رسوم متحركة ديناميكية ومحتوى فيديو يُجسّد سرد علامتك التجارية ويلفت الأنظار.",
    includes: ["مقاطع الفيديو التوضيحية", "رسوم واجهة المستخدم", "محتوى التواصل الاجتماعي المتحرك", "كشف الشعار"],
    color: "from-indigo-500/10 to-blue-600/10"
  }
];

export default function Services() {
  return (
    <div className="w-full pt-10 pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              خبرتنا <span className="text-primary italic">وإمكانياتنا.</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              نتشارك مع الشركات الطموحة لبناء علامات تجارية وتجارب رقمية تُعيد تعريف الفئات.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full flex flex-col border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-xl bg-card overflow-hidden group relative">
                <div className={`absolute top-0 right-0 w-full h-1 bg-gradient-to-l ${service.color} transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>

                <CardHeader className="pb-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {service.desc}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">ما يشمله الخدمة</h4>
                  <ul className="space-y-3">
                    {service.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary/70 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-6 border-t border-border/40 mt-auto">
                  <Button variant="outline" className="w-full group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                    تواصل معنا
                    <ArrowLeft className="w-4 h-4 me-2 group-hover/btn:-translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 max-w-4xl mx-auto bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">هل أنت مستعد لبدء مشروعك؟</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            سواء كنت بحاجة إلى إعادة بناء علامتك التجارية كاملاً أو موقع إلكتروني عالي الأداء، نحن هنا لمساعدتك في تحقيق أهدافك.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14 text-base">
            تواصل مع فريقنا
          </Button>
        </motion.div>

      </div>
    </div>
  );
}
