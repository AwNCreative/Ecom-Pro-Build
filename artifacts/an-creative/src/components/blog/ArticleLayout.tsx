import { ReactNode } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Clock, ShoppingBag, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ArticleLayoutProps {
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  date: string;
  children: ReactNode;
}

export default function ArticleLayout({ title, subtitle, category, readTime, date, children }: ArticleLayoutProps) {
  return (
    <div className="w-full pt-10 pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">

        {/* Back to Blog */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium group">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            العودة إلى المدونة
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-5">
            <Badge variant="outline" className="text-primary border-primary/30 text-xs">{category}</Badge>
            <span className="text-muted-foreground text-xs flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {readTime} للقراءة
            </span>
            <span className="text-muted-foreground text-xs">{date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-foreground mb-4 leading-tight">{title}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">{subtitle}</p>
          <div className="mt-8 h-px bg-border/60" />
        </motion.header>

        {/* Article Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="prose-arabic"
        >
          {children}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20 p-8 md:p-10 text-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-5">
            <BookOpen className="w-7 h-7 text-primary" />
          </div>
          <h3 className="text-2xl font-black text-foreground mb-3">احصل على الدليل الكامل</h3>
          <p className="text-muted-foreground mb-7 max-w-md mx-auto leading-relaxed">
            هذا المقال مجرد لمحة من محتوى أعمق وأشمل. احصل على كامل الأسرار والخطوات التطبيقية في دليلنا الرقمي.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/store">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 font-bold shadow-md shadow-primary/20">
                <ShoppingBag className="w-4 h-4 ms-2" />
                احصل على الدليل الكامل
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline" size="lg" className="rounded-full px-8 h-12 border-border/60 hover:bg-muted">
                مقالات أخرى
              </Button>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
