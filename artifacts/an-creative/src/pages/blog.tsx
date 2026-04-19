import { motion } from "framer-motion";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Clock, BookOpen } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "التأسيس الذكي – هندسة المتجر من الصفر",
    excerpt: "قبل أن تضيف أول منتج، عليك أن تبني الأرضية الصحيحة. اكتشف كيف تُهيّئ متجرك باحترافية من أول يوم — الهوية، الهيكل، الدفع، والإطلاق الصحيح.",
    date: "١٥ أبريل ٢٠٢٦",
    readTime: "٨ دقائق",
    category: "التجارة الإلكترونية",
    href: "/blog/smart-foundation",
    featured: true,
  },
  {
    id: 2,
    title: "سيكولوجية الواجهة – كيف تبني متجراً يبيع؟",
    excerpt: "في أقل من 50 ميلي ثانية يحكم الزائر على متجرك. تعلّم كيف تستخدم علم النفس البصري لتحويل الزوار إلى مشترين قبل أن يقرأوا كلمة واحدة.",
    date: "١٠ أبريل ٢٠٢٦",
    readTime: "٧ دقائق",
    category: "تجربة المستخدم",
    href: "/blog/ux-psychology",
    featured: false,
  },
  {
    id: 3,
    title: "هندسة المنتجات – فن الوصف وترتيب التصنيفات",
    excerpt: "صفحة المنتج هي مندوب مبيعاتك الصامت. اكتشف صيغة الوصف الذي يبيع، وكيف ترتّب منتجاتك لرفع متوسط الطلب.",
    date: "٥ أبريل ٢٠٢٦",
    readTime: "٩ دقائق",
    category: "كتابة المحتوى",
    href: "/blog/product-engineering",
    featured: false,
  },
  {
    id: 4,
    title: "الترسانة التقنية – الربط الذكي وعصر الـ Data",
    excerpt: "المتجر الذي يفهم أرقامه يتفوّق دائماً على الذي يعمل بالحدس. دليلك لربط Analytics وPixel وواتساب وشحن احترافي.",
    date: "١ أبريل ٢٠٢٦",
    readTime: "١٠ دقائق",
    category: "الأدوات والتقنية",
    href: "/blog/tech-arsenal",
    featured: false,
  },
  {
    id: 5,
    title: "ماكينة المبيعات – الكوبونات والسلات المتروكة",
    excerpt: "٧٠٪ من المتسوقين يتركون سلّتهم دون شراء. تعلّم كيف تستردّ هذه الأموال بنظام استعادة مُثبت وكوبونات تُحرّك القرار.",
    date: "٢٨ مارس ٢٠٢٦",
    readTime: "٨ دقائق",
    category: "التسويق",
    href: "/blog/sales-machine",
    featured: false,
  },
  {
    id: 6,
    title: "الولاء المطلق – خدمة العملاء والتحويل لمسوّقين",
    excerpt: "العميل الراضي يشتري مرة. العميل المتعلّق بعلامتك يشتري دائماً ويُحضر أصدقاءه. اكتشف نظام الولاء الذي يحوّل عملاءك إلى سفراء.",
    date: "٢٢ مارس ٢٠٢٦",
    readTime: "٩ دقائق",
    category: "خدمة العملاء",
    href: "/blog/absolute-loyalty",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  "التجارة الإلكترونية": "bg-rose-100 text-rose-700 border-rose-200",
  "تجربة المستخدم": "bg-violet-100 text-violet-700 border-violet-200",
  "كتابة المحتوى": "bg-blue-100 text-blue-700 border-blue-200",
  "الأدوات والتقنية": "bg-emerald-100 text-emerald-700 border-emerald-200",
  "التسويق": "bg-amber-100 text-amber-700 border-amber-200",
  "خدمة العملاء": "bg-cyan-100 text-cyan-700 border-cyan-200",
};

export default function Blog() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

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
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">المدونة</Badge>
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-5">
              خلاصة التجارب، <span className="text-primary">بلا زخرفة.</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              مقالات عملية تساعدك على نمو متجرك الإلكتروني وبناء علامتك التجارية بثقة.
            </p>
          </motion.div>
        </div>

        {/* Featured Post */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <Link href={featured.href}>
              <Card className="overflow-hidden border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="bg-gradient-to-br from-primary/15 via-primary/8 to-background min-h-[280px] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute top-6 start-6">
                      <Badge className="bg-primary text-primary-foreground text-xs">مقال مميز</Badge>
                    </div>
                    <div className="text-center px-8">
                      <BookOpen className="w-20 h-20 text-primary/40 mx-auto group-hover:scale-110 group-hover:text-primary/70 transition-all duration-500" />
                    </div>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColors[featured.category] || ''}`}>
                        {featured.category}
                      </span>
                      <span className="text-muted-foreground text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {featured.readTime} للقراءة
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4 leading-snug group-hover:text-primary transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{featured.date}</span>
                      <span className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                        اقرأ المقال
                        <ArrowLeft className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        )}

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
            >
              <Link href={post.href}>
                <Card className="h-full flex flex-col border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group cursor-pointer overflow-hidden">
                  <div className="h-36 bg-gradient-to-br from-primary/8 to-muted/40 flex items-center justify-center border-b border-border/50">
                    <BookOpen className="w-12 h-12 text-primary/30 group-hover:scale-110 group-hover:text-primary/60 transition-all duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${categoryColors[post.category] || ''}`}>
                        {post.category}
                      </span>
                      <span className="text-muted-foreground text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-5">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/40">
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                      <span className="flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-2.5 transition-all">
                        اقرأ المقال
                        <ArrowLeft className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
