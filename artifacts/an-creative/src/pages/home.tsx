import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, PenLine, Lightbulb, Mail, MessageCircle, Instagram } from "lucide-react";

export default function Home() {
  const featuredProducts = [
    { id: 1, name: "أسرار منصة سلة", price: "١٠$", originalPrice: "١٢$", desc: "خريطتك الذهبية للانتقال بمتجرك من مجرد صفحة عادية إلى منصة احترافية تحقق مبيعات." },
    { id: 2, name: "دليل أسرار المنتج الرابح", price: "٧$", originalPrice: "١٠$", desc: 'الفلتر الذي تحتاجه لاختيار منتجات تبيع نفسها بنفسها وتجذب العملاء من النظرة الأولى.' },
  ];

  const blogPreviews = [
    { id: 1, icon: Lightbulb, title: "٥ أسرار لرفع مبيعات متجرك على سلة", date: "١٥ أبريل ٢٠٢٦", excerpt: "اكتشف الاستراتيجيات التي يستخدمها أصحاب المتاجر الناجحة لتحقيق أرقام مبيعات استثنائية." },
    { id: 2, icon: PenLine, title: "كيف تكتب وصف منتج يُقنع الزائر بالشراء؟", date: "١٠ أبريل ٢٠٢٦", excerpt: "فن كتابة وصف المنتج هو المهارة الأكثر تأثيراً في تحويل الزوار إلى مشترين." },
    { id: 3, icon: BookOpen, title: "دليل SEO الكامل لمتاجر سلة", date: "٥ أبريل ٢٠٢٦", excerpt: "تعلّم كيف تُحسّن ظهور متجرك في نتائج البحث وتجذب زيارات مجانية مستهدفة." },
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
                <Link href="/blog">المدونة</Link>
              </Button>
            </div>
          </motion.div>
        </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group bg-background">
                  <div className="aspect-[4/3] bg-muted/50 rounded-t-lg overflow-hidden relative border-b border-border/50">
                    <img
                      src={product.id === 1 ? "/product-salla.jpg" : "/product-winning.jpg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                      <div className="text-left">
                        {product.originalPrice && (
                          <span className="text-xs text-muted-foreground line-through block text-start">{product.originalPrice}</span>
                        )}
                        <span className="font-bold text-primary bg-primary/10 px-2 py-1 rounded text-sm">{product.price}</span>
                      </div>
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

      {/* Blog CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">أحدث المقالات</h2>
                <p className="text-muted-foreground max-w-xl text-lg">نشارك معك خلاصة التجارب والأسرار لتنمو أسرع.</p>
              </div>
              <Button asChild variant="link" className="group text-primary">
                <Link href="/blog" className="flex items-center gap-2">
                  عرض جميع المقالات
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPreviews.map((post, i) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl overflow-hidden cursor-pointer"
                >
                  <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-primary to-primary/50 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <post.icon className="w-10 h-10 text-primary mb-4" />
                  <p className="text-xs text-muted-foreground mb-3">{post.date}</p>
                  <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">{post.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <Link href="/blog" className="mt-6 flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                    اقرأ المزيد
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Blog CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">هل تريد أن تتعلم أكثر؟</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              مدونتنا مليئة بالمقالات العملية والنصائح الحصرية لمساعدتك على النمو وتحقيق مبيعات أكثر.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14 text-base">
              <Link href="/blog">المدونة</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-card border-t border-border/60">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              تواصل <span className="text-primary">معنا</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              لديك سؤال؟ تريد الاستفسار عن منتج؟ نحن هنا وجاهزون للرد.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/966572190784"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="group flex flex-col items-center gap-4 p-7 rounded-2xl border border-border/50 bg-background hover:border-[#25D366]/40 hover:shadow-lg hover:shadow-[#25D366]/5 transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                <MessageCircle className="w-7 h-7 text-[#25D366]" />
              </div>
              <div className="text-center">
                <p className="font-bold text-foreground mb-1">واتساب</p>
                <p className="text-sm text-muted-foreground">ردود سريعة · مباشر</p>
              </div>
              <span className="text-sm font-semibold text-[#25D366]">ابدأ المحادثة</span>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:ahmedosamaqotyifan@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group flex flex-col items-center gap-4 p-7 rounded-2xl border border-border/50 bg-background hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <div className="text-center">
                <p className="font-bold text-foreground mb-1">البريد الإلكتروني</p>
                <p className="text-sm text-muted-foreground break-all">ahmedosamaqotyifan@gmail.com</p>
              </div>
              <span className="text-sm font-semibold text-primary">أرسل رسالة</span>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/a7m.r3?igsh=MTdrMTdrcHIyOTQycw=="
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="group flex flex-col items-center gap-4 p-7 rounded-2xl border border-border/50 bg-background hover:border-pink-400/30 hover:shadow-lg hover:shadow-pink-500/5 transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                <Instagram className="w-7 h-7 text-pink-500" />
              </div>
              <div className="text-center">
                <p className="font-bold text-foreground mb-1">إنستغرام</p>
                <p className="text-sm text-muted-foreground">@a7m.r3</p>
              </div>
              <span className="text-sm font-semibold text-pink-500">تابعنا</span>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}
