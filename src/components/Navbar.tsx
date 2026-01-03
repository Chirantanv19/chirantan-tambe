"use client";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function Navbar() {
  const navItems = ["About", "Projects", "Skills", "Contact"];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl"
    >
      <div className="glass rounded-full px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-lg">
          <Code2 className="text-primary" size={24} />
          <span className="hidden sm:inline">Portfolio.</span>
        </div>
        
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}