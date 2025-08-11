"use client";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import Card from "../components/ui/Card";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["123 Fitness Street", "Downtown, NY 10001"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@fitolution.com", "support@fitolution.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Fri: 5:00 AM - 11:00 PM", "Sat-Sun: 6:00 AM - 10:00 PM"],
  },
];

const membershipPlans = [
  {
    name: "Basic",
    price: "$29",
    period: "/month",
    features: [
      "Gym access during staffed hours",
      "Basic equipment usage",
      "Locker room access",
      "Free fitness assessment",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "$49",
    period: "/month",
    features: [
      "24/7 gym access",
      "All equipment & facilities",
      "Group fitness classes",
      "Personal trainer consultation",
      "Nutrition guidance",
      "Guest passes (2/month)",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "$79",
    period: "/month",
    features: [
      "Everything in Premium",
      "Unlimited personal training",
      "Massage therapy sessions",
      "Priority class booking",
      "Meal planning service",
      "Unlimited guest passes",
    ],
    popular: false,
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-black pt-20 overflow-x-hidden">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-lime-400/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
              Get in <span className="text-lime-400">Touch</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Ready to transform your life? Reach out to us or choose the plan
              that fits you best.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-2xl shadow-lg hover:border-lime-400 transition-all">
                <div className="p-6 text-center">
                  <div className="mx-auto w-14 h-14 bg-lime-400 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-lime-400/30">
                    <info.icon className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-400 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gray-900/80 backdrop-blur-md border border-gray-700 rounded-2xl p-8 shadow-lg">
            <h2 className="text-white text-2xl font-bold mb-6">
              Send us a Message
            </h2>
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="First Name"
                  className="rounded-xl bg-gray-800 border-gray-600 text-white"
                />
                <Input
                  placeholder="Last Name"
                  className="rounded-xl bg-gray-800 border-gray-600 text-white"
                />
              </div>
              <Input
                type="email"
                placeholder="Email Address"
                className="rounded-xl bg-gray-800 border-gray-600 text-white"
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                className="rounded-xl bg-gray-800 border-gray-600 text-white"
              />
              <Textarea
                placeholder="Your Message"
                rows={5}
                className="rounded-xl bg-gray-800 border-gray-600 text-white"
              />
              <Button className="w-full bg-lime-400 hover:bg-lime-500 text-black rounded-xl font-semibold">
                Send Message
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=500&fit=crop"
            alt="Gym Location"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 bg-gray-900/90 backdrop-blur-md">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            Choose Your <span className="text-lime-400">Membership</span>
          </motion.h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-16">
            Pick the perfect plan to match your lifestyle and goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`relative rounded-2xl p-8 shadow-xl border transform transition-transform duration-300 ease-in-out 
                    ${plan.popular? "border-lime-400 bg-gradient-to-br from-gray-800 to-gray-900 hover:scale-110": "bg-gray-800 border-gray-700 hover:border-lime-400 hover:scale-105" }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-lime-400 text-black px-4 py-1 rounded-full text-xs font-semibold shadow-md">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-lime-400 mb-6">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 text-gray-300 text-sm mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-lime-400 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full rounded-xl ${
                      plan.popular
                        ? "bg-lime-400 hover:bg-lime-500 text-black"
                        : "bg-gray-700 hover:bg-gray-600 text-white"
                    }`}
                  >
                    Choose Plan
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            {[Instagram, Facebook, Twitter].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 bg-gray-900/60 backdrop-blur-md rounded-full flex items-center justify-center border border-gray-700 hover:border-lime-400 transition-all shadow-md"
              >
                <Icon className="w-6 h-6 text-lime-400" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
