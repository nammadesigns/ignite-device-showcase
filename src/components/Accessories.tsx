import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Headphones, Watch, Battery, Shield, Zap, Cable } from "lucide-react";
import accessoriesImg from "@/assets/accessories.jpg";

const accessories = [
  { icon: Headphones, name: "Wireless Earbuds", price: "$99", color: "from-blue-500 to-cyan-500" },
  { icon: Watch, name: "Smartwatches", price: "$249", color: "from-purple-500 to-pink-500" },
  { icon: Battery, name: "Power Banks", price: "$49", color: "from-green-500 to-emerald-500" },
  { icon: Shield, name: "Phone Cases", price: "$29", color: "from-orange-500 to-red-500" },
  { icon: Zap, name: "Fast Chargers", price: "$39", color: "from-yellow-500 to-orange-500" },
  { icon: Cable, name: "Premium Cables", price: "$19", color: "from-indigo-500 to-blue-500" },
];

const Accessories = () => {
  return (
    <section id="accessories" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Premium <span className="bg-gradient-primary bg-clip-text text-transparent">Accessories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete your mobile experience with our curated collection
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={accessoriesImg}
              alt="Premium Accessories"
              className="rounded-3xl shadow-card w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold">Everything You Need</h3>
            <p className="text-lg text-muted-foreground">
              From wireless audio to protective cases, we stock only the highest quality
              accessories from trusted brands. Enhance your mobile lifestyle with products
              designed for performance and style.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Shop All Accessories
            </Button>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {accessories.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="group hover:shadow-card transition-all duration-300 cursor-pointer hover:-translate-y-2">
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">{item.name}</h4>
                    <p className="text-primary font-bold">{item.price}</p>
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

export default Accessories;
