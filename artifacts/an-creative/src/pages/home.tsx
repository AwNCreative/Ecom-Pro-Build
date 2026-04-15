import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ShoppingBag, PenTool, Layers, MonitorPlay } from "lucide-react";

export default function Home() {
  const featuredProducts = [
    { id: 1, name: "Logo Design Kit", price: "$49", desc: "Professional logo templates for modern brands." },
    { id: 2, name: "Brand Guidelines Template", price: "$79", desc: "Comprehensive InDesign/Figma templates for brand presentation." },
    { id: 3, name: "UI Component Library", price: "$129", desc: "Premium React components for dashboards and SaaS." },
  ];

  const featuredServices = [
    { id: 1, name: "Brand Identity Design", icon: PenTool, desc: "We craft unforgettable brand identities from scratch." },
    { id: 2, name: "Web Design & Development", icon: MonitorPlay, desc: "High-performance websites built for conversion." },
    { id: 3, name: "Social Media Strategy", icon: Layers, desc: "Content strategies that engage and grow your audience." },
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
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 font-serif">
              Crafting Digital <br className="hidden md:block" />
              <span className="text-primary italic">Excellence.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              A boutique digital studio providing premium creative services and high-quality digital products for modern brands.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 text-base h-14 bg-primary hover:bg-primary/90 w-full sm:w-auto">
                <Link href="/store">Explore Our Store</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-base h-14 w-full sm:w-auto border-border/60 hover:bg-muted">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Abstract background shapes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">Featured Products</h2>
              <p className="text-muted-foreground max-w-xl text-lg">Premium digital assets crafted to elevate your next project.</p>
            </div>
            <Button asChild variant="link" className="group text-primary">
              <Link href="/store" className="flex items-center gap-2">
                View All Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                      <CardTitle className="text-xl font-serif">{product.name}</CardTitle>
                      <span className="font-medium text-primary bg-primary/10 px-2 py-1 rounded text-sm">{product.price}</span>
                    </div>
                    <CardDescription className="text-base">{product.desc}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button asChild className="w-full bg-foreground text-background hover:bg-primary transition-colors">
                      <Link href="/store">View Details</Link>
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
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Partner with us to bring your vision to life through strategic design.</p>
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
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                <service.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">{service.name}</h3>
                <p className="text-muted-foreground mb-8 line-clamp-2">{service.desc}</p>
                <Button asChild variant="ghost" className="p-0 hover:bg-transparent text-foreground group-hover:text-primary transition-colors">
                  <Link href="/services" className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <Button asChild variant="outline" size="lg" className="rounded-full px-8 text-base h-14 border-border/60 hover:bg-muted">
                <Link href="/services">View All Services</Link>
              </Button>
          </div>
        </div>
      </section>
    </div>
  );
}