"use client";
import { motion } from "framer-motion";
import { Coffee, Code, Laptop, Rocket } from "lucide-react";

const stats = [
    { label: "Years Experience", value: "3+", icon: <Laptop size={20} /> },
    { label: "Projects Completed", value: "20+", icon: <Rocket size={20} /> },
    { label: "Cups of Coffee", value: "∞", icon: <Coffee size={20} /> },
];

export default function About() {
    return (
        <section id="about" className="py-32 container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Side: Creative Image/Visual */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 glass">
                        <img
                            src="photo.png"
                            alt="Profile"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float" />
                </motion.div>

                {/* Right Side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                        Solving problems through <br />
                        <span className="gradient-text">clean code.</span>
                    </h2>

                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        {"I am a Full-Stack Developer passionate about creating high-end digital experiences. With a background in UI/UX and scalable backend systems, I build products that are as functional as they are beautiful."}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                        {stats.map((stat, i) => (
                            <div key={i} className="glass p-6 rounded-3xl border border-white/5 group hover:border-primary/50 transition-colors">
                                <div className="text-primary mb-3 group-hover:scale-110 transition-transform">
                                    {stat.icon}
                                </div>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-sm">
                            <Code size={16} className="text-accent" />
                            <span>Full-Stack Development</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 text-sm">
                            <Code size={16} className="text-primary" />
                            <span>UI/UX Architecture</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}