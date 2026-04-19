import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, CheckCircle2, ChevronDown, Lock, TrendingUp, Search, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const chapters = [
  { id: "ch1", title: "الفصل الأول: التأسيس الذكي", subtitle: "هندسة المتجر من الصفر." },
  { id: "ch2", title: "الفصل الثاني: سيكولوجية الواجهة", subtitle: 'كيف تبني متجراً "يبيع"؟' },
  { id: "ch3", title: "الفصل الثالث: هندسة المنتجات", subtitle: "فن الوصف وترتيب التصنيفات." },
  { id: "ch4", title: "الفصل الرابع: الترسانة التقنية", subtitle: "الربط الذكي وعصر الـ Data." },
  { id: "ch5", title: "الفصل الخامس: ماكينة المبيعات", subtitle: "الكوبونات والسلات المتروكة." },
  { id: "ch6", title: "الفصل السادس: الولاء المطلق", subtitle: "خدمة العملاء." },
];

const features = [
  {
    icon: TrendingUp,
    title: "إعدادات الخبراء",
    desc: "ضبط المتجر لرفع نسبة تحويل الزوار (Conversion Rate)."
  },
  {
    icon: ShoppingBag,
    title: "تحسين تجربة العميل",
    desc: "أسرار ترتيب الأقسام لتسهيل الشراء."
  },
  {
    icon: Search,
    title: "SEO سلة",
    desc: "الظهور في نتائج البحث الأولى مجاناً."
  },
];

function ProductCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
        {/* Image Panel */}
        <div className="lg:col-span-2 relative border-b lg:border-b-0 lg:border-s border-border/50 min-h-[340px] lg:min-h-[560px]">
          <div className="absolute top-4 start-4 z-10">
            <Badge className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1">الأكثر مبيعاً</Badge>
          </div>
          <img
            src="/product-salla.jpg"
            alt="أسرار منصة سلة"
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>

        {/* Right/End: Product Details */}
        <div className="lg:col-span-3 p-8 md:p-10 flex flex-col">
          {/* Title & Pricing */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-black text-foreground mb-1">أسرار منصة سلة</h2>
              <p className="text-muted-foreground text-sm">دليل رقمي شامل</p>
            </div>
            <div className="text-start shrink-0">
              <p className="text-muted-foreground line-through text-sm mb-0.5">$12</p>
              <p className="text-3xl font-black text-primary leading-none">$10</p>
            </div>
          </div>

          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            خريطتك الذهبية للانتقال بمتجرك من مجرد صفحة عادية إلى منصة احترافية تحقق مبيعات. اختصرنا لك سنوات من الخبرة والتجارب في دليل واحد يضع بين يديك "الخلاصة" لإدارة متجرك بذكاء.
          </p>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-5 text-muted-foreground">ماذا ستتعلم؟</h3>
            <div className="space-y-4">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-muted/40 hover:bg-muted/70 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm mb-0.5">{feature.title}</p>
                    <p className="text-muted-foreground text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Table of Contents Accordion */}
          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4 text-muted-foreground">محتويات الدليل</h3>
            <Accordion type="single" collapsible className="w-full border border-border/50 rounded-xl overflow-hidden">
              {chapters.map((chapter, i) => (
                <AccordionItem key={chapter.id} value={chapter.id} className="border-border/50 last:border-b-0">
                  <AccordionTrigger className="px-4 py-3 text-right hover:no-underline hover:bg-muted/40 text-sm font-semibold text-foreground [&[data-state=open]]:text-primary [&[data-state=open]]:bg-primary/5">
                    <span className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      {chapter.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-primary/60 shrink-0" />
                      {chapter.subtitle}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Buy Button */}
          <div className="mt-auto pt-6">
            <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-14 text-base font-bold shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5">
              <ShoppingBag className="w-5 h-5 ms-2" />
              اشترِ الآن — $10
            </Button>
            <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1 justify-center">
              <Lock className="w-3 h-3" />
              دفع آمن ومشفّر · وصول فوري للتحميل
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ComingSoonCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="bg-card border border-dashed border-border/70 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent pointer-events-none" />
      <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
        <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center mb-6">
          <Clock className="w-10 h-10 text-muted-foreground/50" />
        </div>
        <Badge variant="outline" className="mb-4 text-primary border-primary/30 text-xs px-3">قريباً</Badge>
        <h3 className="text-2xl font-black text-foreground mb-3">المنتج القادم</h3>
        <p className="text-muted-foreground max-w-sm text-base leading-relaxed">
          نعمل على إعداد دليل متخصص جديد سيُغير طريقة تفكيرك في تنمية متجرك الإلكتروني. ترقّب!
        </p>
        <Button variant="outline" size="lg" className="mt-8 rounded-full px-8 border-border/60 hover:bg-muted">
          أعلمني عند الإطلاق
        </Button>
      </div>
    </motion.div>
  );
}

export default function Store() {
  return (
    <div className="w-full pt-10 pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">أصول رقمية</Badge>
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-5">
              أدواتك لتحقيق <span className="text-primary">النجاح.</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              أدلة رقمية متخصصة وموثوقة، كتبها متخصصون بناءً على تجارب حقيقية وأرقام واضحة.
            </p>
          </motion.div>
        </div>

        {/* Products */}
        <div className="flex flex-col gap-8">
          <ProductCard />
          <ComingSoonCard />
        </div>

      </div>
    </div>
  );
}
