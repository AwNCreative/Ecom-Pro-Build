import { motion } from "framer-motion";
import { ShoppingBag, Star, LayoutGrid, Palette, Type, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const products = [
  { 
    id: 1, 
    name: "Logo Design Kit", 
    price: "$49", 
    desc: "Professional logo templates for modern brands. Includes 50+ vector shapes, font recommendations, and color palettes.", 
    icon: Star,
    category: "Identity" 
  },
  { 
    id: 2, 
    name: "Brand Guidelines Template", 
    price: "$79", 
    desc: "Comprehensive InDesign & Figma templates for presenting brand identities to clients. 30+ meticulously designed pages.", 
    icon: Palette,
    category: "Presentation" 
  },
  { 
    id: 3, 
    name: "Social Media Content Pack", 
    price: "$39", 
    desc: "100+ customizable social media post and story templates designed for Instagram and LinkedIn engagement.", 
    icon: LayoutGrid,
    category: "Social" 
  },
  { 
    id: 4, 
    name: "UI Component Library", 
    price: "$129", 
    desc: "Premium React components tailored for SaaS and admin dashboards. Built with Tailwind CSS and Radix UI primitives.", 
    icon: LayoutGrid,
    category: "Web" 
  },
  { 
    id: 5, 
    name: "Pitch Deck Template", 
    price: "$59", 
    desc: "Persuasive and beautifully structured Keynote & PowerPoint templates to help you secure your next round of funding.", 
    icon: Star,
    category: "Business" 
  },
  { 
    id: 6, 
    name: "Icon Set Bundle", 
    price: "$29", 
    desc: "Over 500+ custom line and solid icons for web and mobile interfaces. Supplied as SVG, Figma, and React components.", 
    icon: Palette,
    category: "Assets" 
  },
  { 
    id: 7, 
    name: "Typography Pack", 
    price: "$35", 
    desc: "A curated collection of typographic pairings and layout scales optimized for readability and aesthetic impact.", 
    icon: Type,
    category: "Assets" 
  },
  { 
    id: 8, 
    name: "Color Palette Pro", 
    price: "$25", 
    desc: "100 harmonious color palettes tested for WCAG contrast compliance. Exportable to CSS, SCSS, and Figma.", 
    icon: Palette,
    category: "Assets" 
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
            <Badge variant="outline" className="mb-4 text-primary border-primary/30">Digital Assets</Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-foreground mb-6">
              Tools for <span className="text-primary italic">Creators.</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Premium digital products, templates, and UI kits crafted to accelerate your workflow and elevate your final output.
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
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur text-xs">
                      {product.category}
                    </Badge>
                  </div>
                  <product.icon className="w-16 h-16 text-primary/40 group-hover:scale-110 group-hover:text-primary/60 transition-all duration-500" />
                </div>
                
                <CardHeader className="flex-1 pb-4">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <CardTitle className="text-lg font-serif leading-tight">{product.name}</CardTitle>
                    <span className="font-bold text-foreground text-lg">{product.price}</span>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {product.desc}
                  </CardDescription>
                </CardHeader>
                
                <CardFooter className="pt-0">
                  <Button className="w-full bg-foreground text-background hover:bg-primary transition-colors group/btn">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Buy Now
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
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