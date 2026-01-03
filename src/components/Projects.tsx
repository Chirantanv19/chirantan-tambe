"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import Image from "next/image";

export default function Projects() {
    return (
        <section id="projects" className="py-32 container mx-auto px-6">
            <div className="flex flex-col mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
                <div className="h-1.5 w-24 bg-primary rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative glass rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-500"
                    >
                        {/* Project Image Container */}
                        <div className="relative h-64 overflow-hidden">
                            {/* Standard img is fine if unoptimized:true is set in next.config.ts, 
      but using a string for alt fixes linting */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-2">
                                {project.description}
                            </p>

                            <div className="flex items-center gap-6">
                                <a href={project.link} className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors">
                                    <ExternalLink size={18} /> Live Demo
                                </a>
                                <a href={project.github} className="flex items-center gap-2 text-sm font-semibold hover:text-gray-400 transition-colors">
                                    <Github size={18} /> Code
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}