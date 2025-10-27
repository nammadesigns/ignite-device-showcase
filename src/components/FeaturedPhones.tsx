import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Star, TrendingUp } from "lucide-react";

const phones = [
  {
    id: 1,
    name: "Galaxy Ultra Pro",
    brand: "Samsung",
    price: "$1,199",
    rating: 4.9,
    tag: "Best Seller",
    specs: ["6.8\" Display", "200MP Camera", "5000mAh Battery"],
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: "$1,299",
    rating: 4.8,
    tag: "Premium",
    specs: ["6.7\" Display", "A17 Pro Chip", "Titanium Build"],
  },
  {
    id: 3,
    name: "Pixel 8 Pro",
    brand: "Google",
    price: "$999",
    rating: 4.7,
    tag: "AI Powered",
    specs: ["6.7\" Display", "Tensor G3", "Magic Eraser"],
  },
  {
    id: 4,
    name: "OnePlus 12",
    brand: "OnePlus",
    price: "$799",
    rating: 4.6,
    tag: "Value King",
    specs: ["6.82\" Display", "Snapdragon 8 Gen 3", "100W Charging"],
  },
];

const FeaturedPhones = () => {
  return (
    <section id="phones" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Featured Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Latest <span className="bg-gradient-primary bg-clip-text text-transparent">Smartphones</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience cutting-edge technology with the newest flagship devices
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {phones.map((phone, index) => (
            <motion.div
              key={phone.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-glow transition-all duration-300 cursor-pointer border-2 hover:border-primary/50 overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-4 relative">
                    <div className="absolute top-2 right-2 z-10">
                      <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                        {phone.tag}
                      </span>
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Smartphone className="h-24 w-24 text-primary" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground font-medium">{phone.brand}</p>
                      <h3 className="text-xl font-bold">{phone.name}</h3>
                    </div>

                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">{phone.rating}</span>
                      <span className="text-sm text-muted-foreground">(2.5k reviews)</span>
                    </div>

                    <div className="space-y-1">
                      {phone.specs.map((spec, i) => (
                        <p key={i} className="text-sm text-muted-foreground">• {spec}</p>
                      ))}
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <span className="text-2xl font-black text-primary">{phone.price}</span>
                      <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPhones;
