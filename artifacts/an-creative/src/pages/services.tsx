import { motion } from "framer-motion";
import { PenTool, MonitorPlay, Layers, Printer, Briefcase, Film, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    id: "brand-identity",
    title: "Brand Identity Design",
    icon: PenTool,
    desc: "We craft unforgettable brand identities from scratch that resonate with your target audience and stand the test of time.",
    includes: ["Logo & Marks", "Color & Typography Systems", "Brand Guidelines", "Stationery Design"],
    color: "from-rose-500/10 to-red-600/10"
  },
  {
    id: "web-design",
    title: "Web Design & Development",
    icon: MonitorPlay,
    desc: "High-performance, responsive websites built with modern technologies focusing on conversion and exceptional user experience.",
    includes: ["UI/UX Design", "Frontend Development", "CMS Integration", "Performance Optimization"],
    color: "from-blue-500/10 to-cyan-600/10"
  },
  {
    id: "social-media",
    title: "Social Media Strategy",
    icon: Layers,
    desc: "Comprehensive content strategies and bespoke assets that engage your audience and drive measurable growth across platforms.",
    includes: ["Content Strategy", "Asset Creation", "Campaign Planning", "Analytics & Reporting"],
    color: "from-purple-500/10 to-violet-600/10"
  },
  {
    id: "print-design",
    title: "Print & Packaging Design",
    icon: Printer,
    desc: "Tactile, premium print materials and packaging solutions that extend your brand's physical presence.",
    includes: ["Packaging Design", "Editorial & Books", "Posters & Signage", "Print Production Management"],
    color: "from-amber-500/10 to-orange-600/10"
  },
  {
    id: "consulting",
    title: "Creative Consulting",
    icon: Briefcase,
    desc: "Strategic guidance to align your creative output with your business objectives and overcome design challenges.",
    includes: ["Brand Audits", "Design Systems Consulting", "Creative Direction", "Team Workshops"],
    color: "from-emerald-500/10 to-green-600/10"
  },
  {
    id: "motion",
    title: "Motion Graphics",
    icon: Film,
    desc: "Dynamic animations and video content that bring your brand narrative to life and capture attention.",
    includes: ["Explainer Videos", "UI Animations", "Social Media Motion", "Logo Reveals"],
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
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Expertise & <span className="text-primary italic">Capabilities.</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We partner with visionary companies to build brands and digital experiences that define categories.
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
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-2xl font-serif mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {service.desc}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">What's Included</h4>
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
                    Get in Touch
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
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
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Ready to start a project?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you need a complete rebrand or a high-performance website, we're here to help you achieve your goals.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14 text-base">
            Contact Our Team
          </Button>
        </motion.div>
        
      </div>
    </div>
  );
}