"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Programs", href: "/programs" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-white">
              <span className="text-lime-400">Muscles</span>Strain
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.href);
              console.log(isActive);

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={` hover:text-lime-400 transition-colors duration-300 relative ${
                    isActive ? "text-lime-400" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-white hover:text-lime-400"
              onClick={() => navigate("/signin")}
            >
              Sign In
            </Button>
            <Button
              className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-6"
              onClick={() => navigate("/signup")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black border-t border-gray-800"
          >
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 text-white hover:text-lime-400 transition-colors duration-300 ${
                    location.pathname === item.href
                      ? "text-lime-400 active"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 space-y-2">
                <Button
                  variant="ghost"
                  className="w-full text-white hover:text-lime-400"
                >
                  Sign In
                </Button>
                <Button className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
