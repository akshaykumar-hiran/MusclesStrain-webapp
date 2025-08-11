"use client";
import { motion } from "framer-motion";
import { Trophy, Flame, Leaf, Waves, Star, Compass } from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const programs = [
  {
    icon: Trophy,
    title: "Weight Loss Program",
    description: "Shed pounds effectively with structured workouts and nutrition guidance tailored to you.",
    features: ["Calorie tracking", "HIIT sessions", "Diet plans", "Progress monitoring"],
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=500&h=300&fit=crop",
  },
  {
    icon: Star,
    title: "Muscle Gain Program",
    description: "Increase muscle mass with targeted training and expert-backed nutrition strategies.",
    features: ["Strength routines", "Protein plans", "Personal coaching", "Recovery sessions"],
    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=500&h=300&fit=crop",
  },
  {
    icon: Leaf,
    title: "Yoga & Mindfulness",
    description: "Improve flexibility, reduce stress, and enhance mental well-being.",
    features: ["Hatha yoga", "Meditation", "Breathing exercises", "Mind-body workshops"],
    image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=500&h=300&fit=crop",
  },
  {
    icon: Waves,
    title: "Endurance Training",
    description: "Boost stamina and cardiovascular performance through high-intensity workouts.",
    features: ["Cycling", "Running drills", "Rowing", "Interval training"],
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07d?w=500&h=300&fit=crop",
  },
  {
    icon: Compass,
    title: "Outdoor Adventure Program",
    description: "Train for hiking, trekking, and adventure sports with specialized guidance.",
    features: ["Trail running", "Climbing prep", "Functional strength", "Survival skills"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=300&fit=crop",
  },
  {
    icon: Flame,
    title: "Transformation Challenge",
    description: "Join our intense 12-week program designed for total body transformation.",
    features: ["Personal trainer", "Meal prep guide", "Weekly check-ins", "Before & after photos"],
    image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=500&h=300&fit=crop",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Programs = () => {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-x-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-lime-400/20 to-green-400/20" />
        <div className="max-w-screen-xl w-full mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 break-words">
              Our <span className="text-lime-400">Programs</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore our specialized fitness programs tailored to your unique health and performance goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 overflow-x-hidden">
        <div className="max-w-screen-xl w-full mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {programs.map((program, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-gray-900 border-gray-700 hover:border-lime-400 transition-all duration-300 group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <program.icon className="w-8 h-8 text-lime-400" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-white text-xl font-bold mb-2">{program.title}</h3>
                    <p className="text-gray-400 mb-4">{program.description}</p>
                    <ul className="space-y-2 mb-6">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-300 flex items-center">
                          <div className="w-2 h-2 bg-lime-400 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-lime-400 hover:bg-lime-500 text-black">Learn More</Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-lime-400 to-green-400 overflow-x-hidden">
        <div className="max-w-screen-xl w-full mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-black mb-6">Pick the Program That Fits You</h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Whether you’re starting your fitness journey or aiming for the next level, we have a program just for you.
            </p>
            <Button size="lg" className="bg-black text-lime-400 hover:bg-gray-800 px-8 py-3 text-lg">
              Join a Program
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
