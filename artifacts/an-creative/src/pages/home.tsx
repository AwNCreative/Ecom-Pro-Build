import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ShoppingBag, PenTool, Layers, MonitorPlay } from "lucide-react";

export default function Home() {
  const featuredProducts = [
    { id: 1, name: "مجموعة تصميم الشعار", price: "٤٩$", desc: "قوالب شعارات احترافية للعلامات التجارية الحديثة." },
    { id: 2, name: "قالب دليل العلامة التجارية", price: "٧٩$", desc: "قوالب InDesign/Figma شاملة لتقديم هوية العلامة التجارية." },
    { id: 3, name: "مكتبة مكونات واجهة المستخدم", price: "١٢٩$", desc: "مكونات React متميزة للوحات التحكم وتطبيقات SaaS." },
  ];

  const featuredServices = [
    { id: 1, name: "تصميم الهوية البصرية", icon: PenTool, desc: "نبتكر هويات بصرية لا تُنسى من الصفر تعكس روح علامتك التجارية." },
    { id: 2, name: "تصميم وتطوير المواقع", icon: MonitorPlay, desc: "مواقع إلكترونية عالية الأداء مصممة لتحقيق أعلى معدلات التحويل." },
    { id: 3, name: "استراتيجية التواصل الاجتماعي", icon: Layers, desc: "استراتيجيات محتوى تُشرك جمهورك وتُنمّي حضورك الرقمي." },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-background pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-foreground mb-6" style={{ fontFamily: "'Tajawal', sans-serif" }}>
              نصنع التميّز <br className="hidden md:block" />
              <span className="text-primary italic">الرقمي.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              استوديو إبداعي رقمي متخصص يقدّم خدمات إبداعية راقية ومنتجات رقمية عالية الجودة للعلامات التجارية الحديثة.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 text-base h-14 bg-primary hover:bg-primary/90 w-full sm:w-auto">
                <Link href="/store">استكشف متجرنا</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-base h-14 w-full sm:w-auto border-border/60 hover:bg-muted">
                <Link href="/services">عرض الخدمات</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Abstract background shape */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">المنتجات المميزة</h2>
              <p className="text-muted-foreground max-w-xl text-lg">أصول رقمية متميزة مصممة لرفع مستوى مشاريعك القادمة.</p>
            </div>
            <Button asChild variant="link" className="group text-primary">
              <Link href="/store" className="flex items-center gap-2">
                عرض جميع المنتجات
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group bg-background">
                  <div className="aspect-[4/3] bg-muted/50 rounded-t-lg overflow-hidden relative flex items-center justify-center border-b border-border/50">
                    <ShoppingBag className="w-12 h-12 text-muted-foreground/30 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                      <span className="font-medium text-primary bg-primary/10 px-2 py-1 rounded text-sm">{product.price}</span>
                    </div>
                    <CardDescription className="text-base">{product.desc}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button asChild className="w-full bg-foreground text-background hover:bg-primary transition-colors">
                      <Link href="/store">عرض التفاصيل</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">خدماتنا</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">شراكة معنا لتحويل رؤيتك إلى واقع من خلال تصميم استراتيجي متكامل.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-primary to-primary/50 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <service.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-3">{service.name}</h3>
                <p className="text-muted-foreground mb-8 line-clamp-2">{service.desc}</p>
                <Button asChild variant="ghost" className="p-0 hover:bg-transparent text-foreground group-hover:text-primary transition-colors">
                  <Link href="/services" className="flex items-center gap-2">
                    اعرف المزيد
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base h-14 border-border/60 hover:bg-muted">
              <Link href="/services">عرض جميع الخدمات</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
