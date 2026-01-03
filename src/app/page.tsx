import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills"; // New import
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <main className="relative selection:bg-primary selection:text-white">
      {/* Toast notifications handler */}
      <Toaster position="top-center" richColors theme="dark" />

      <Navbar />

      <div className="flex flex-col gap-0">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>

      <footer className="py-12 border-t border-white/5 bg-white/[0.01]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm italic">
            {"\"Design is not just what it looks like, but how it works.\""}
          </p>
          <div className="text-gray-400 text-xs font-mono uppercase tracking-widest">
            © 2026 Crafted with Next.js 15
          </div>
        </div>
      </footer>
    </main>
  );
}