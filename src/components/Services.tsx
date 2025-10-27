import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, RefreshCw, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Expert Repair",
    description: "Professional repair services for all smartphone brands. Screen replacement, battery, and more.",
    features: ["Same-day service", "90-day warranty", "Certified technicians"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: RefreshCw,
    title: "Trade-In Program",
    description: "Get the best value for your old device. Instant quotes and hassle-free exchange process.",
    features: ["Top market value", "Instant assessment", "Easy process"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Device Protection",
    description: "Comprehensive insurance plans to protect your investment from accidents and damage.",
    features: ["Full coverage", "Quick claims", "Affordable plans"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Fast Setup",
    description: "Let our experts set up your new device, transfer data, and configure settings perfectly.",
    features: ["Data transfer", "App setup", "Custom configs"],
    color: "from-orange-500 to-red-500"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Expert <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional care for all your mobile needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-glow transition-all duration-300 cursor-pointer border-2 hover:border-primary/50">
                <CardContent className="p-6 space-y-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-primary text-white p-12 border-0">
            <h3 className="text-3xl font-black mb-4">Need Help? We're Here 24/7</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Our expert team is ready to assist you with any questions or concerns.
              Get in touch today for personalized support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="font-semibold">
                Contact Support
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary font-semibold">
                Book Appointment
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
