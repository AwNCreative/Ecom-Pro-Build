import { motion } from "framer-motion";
import { ShoppingBag, Star, LayoutGrid, Palette, Type, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "مجموعة تصميم الشعار",
    price: "٤٩$",
    desc: "قوالب شعارات احترافية للعلامات التجارية الحديثة. تشمل أكثر من ٥٠ شكلاً متجهياً وتوصيات خطوط ولوحات ألوان.",
    icon: Star,
    category: "الهوية"
  },
  {
    id: 2,
    name: "قالب دليل العلامة التجارية",
    price: "٧٩$",
    desc: "قوالب InDesign وFigma شاملة لتقديم هويات العلامات التجارية للعملاء. أكثر من ٣٠ صفحة مصممة بدقة متناهية.",
    icon: Palette,
    category: "العرض"
  },
  {
    id: 3,
    name: "حزمة محتوى التواصل الاجتماعي",
    price: "٣٩$",
    desc: "أكثر من ١٠٠ قالب قابل للتخصيص لمنشورات وقصص وسائل التواصل الاجتماعي مصممة لزيادة التفاعل على إنستغرام ولينكد إن.",
    icon: LayoutGrid,
    category: "اجتماعي"
  },
  {
    id: 4,
    name: "مكتبة مكونات واجهة المستخدم",
    price: "١٢٩$",
    desc: "مكونات React متميزة مخصصة للوحات التحكم وتطبيقات SaaS. مبنية باستخدام Tailwind CSS وعناصر Radix UI الأساسية.",
    icon: LayoutGrid,
    category: "ويب"
  },
  {
    id: 5,
    name: "قالب عرض الاستثمار",
    price: "٥٩$",
    desc: "قوالب Keynote وPowerPoint مقنعة ومنظمة بشكل جميل لمساعدتك في تأمين جولة التمويل القادمة.",
    icon: Star,
    category: "أعمال"
  },
  {
    id: 6,
    name: "حزمة مجموعة الأيقونات",
    price: "٢٩$",
    desc: "أكثر من ٥٠٠ أيقونة مخصصة بخطوط وأشكال صلبة لواجهات الويب والجوال. متاحة بصيغ SVG وFigma ومكونات React.",
    icon: Palette,
    category: "أصول"
  },
  {
    id: 7,
    name: "حزمة الطباعة",
    price: "٣٥$",
    desc: "مجموعة منتقاة من أزواج الخطوط ومقاييس التخطيط المحسّنة لسهولة القراءة والتأثير الجمالي.",
    icon: Type,
    category: "أصول"
  },
  {
    id: 8,
    name: "لوحات الألوان الاحترافية",
    price: "٢٥$",
    desc: "١٠٠ لوحة ألوان متناسقة مختبرة للامتثال لمعايير WCAG. قابلة للتصدير إلى CSS وSCSS وFigma.",
    icon: Palette,
    category: "أصول"
  },
];

export default function Store() {
  return (
    <div className="w-full pt-10 pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">أصول رقمية</Badge>
            <h1 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              أدوات للمبدعين <span className="text-primary italic">.</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              منتجات رقمية راقية وقوالب وحزم واجهات مستخدم مصممة لتسريع سير عملك والارتقاء بنتائجك النهائية.
            </p>
          </motion.div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card overflow-hidden group">
                <div className="h-48 bg-muted/40 relative flex items-center justify-center border-b border-border/50 p-6 overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur text-xs">
                      {product.category}
                    </Badge>
                  </div>
                  <product.icon className="w-16 h-16 text-primary/40 group-hover:scale-110 group-hover:text-primary/60 transition-all duration-500" />
                </div>

                <CardHeader className="flex-1 pb-4">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
                    <span className="font-bold text-foreground text-lg shrink-0">{product.price}</span>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {product.desc}
                  </CardDescription>
                </CardHeader>

                <CardFooter className="pt-0">
                  <Button className="w-full bg-foreground text-background hover:bg-primary transition-colors group/btn">
                    <ShoppingBag className="w-4 h-4 ms-2" />
                    اشترِ الآن
                    <ArrowLeft className="w-4 h-4 me-auto opacity-0 translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
