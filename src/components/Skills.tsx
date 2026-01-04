"use client";
import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Layout, Layers, Terminal } from "lucide-react";

const skills = [
  { name: "Next.js 16", icon: <Layout size={20} />, level: "Expert", color: "text-blue-400" },
  { name: "TypeScript", icon: <Code2 size={20} />, level: "Advanced", color: "text-blue-500" },
  { name: "Tailwind v4", icon: <Layers size={20} />, level: "Expert", color: "text-cyan-400" },
  { name: "Node.js", icon: <Terminal size={20} />, level: "Advanced", color: "text-green-500" },
  { name: "PostgreSQL", icon: <Cpu size={20} />, level: "Intermediate", color: "text-indigo-400" },
  { name: "Three.js", icon: <Globe size={20} />, level: "Beginner", color: "text-pink-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 container mx-auto px-6">
      <div className="flex flex-col mb-16 items-center text-center">
        <h2 className="text-4xl font-bold mb-4">Tech Stack</h2>
        <p className="text-gray-400 max-w-lg">The modern technologies I use to bring high-end digital products to life.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
            transition={{ delay: index * 0.05 }}
            className="glass p-6 rounded-[2rem] flex flex-col items-center justify-center gap-4 text-center group cursor-default"
          >
            <div className={`${skill.color} transition-transform group-hover:scale-110 duration-300`}>
              {skill.icon}
            </div>
            <div>
              <p className="font-bold text-sm tracking-tight">{skill.name}</p>
              <p className="text-[10px] text-gray-500 uppercase font-black mt-1">{skill.level}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}