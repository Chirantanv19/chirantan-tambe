
export interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    link: string;
    github: string;
    image: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Luxury Hotel",
        description: "Real-time analytics engine with neural network visualizations and predictive data modeling.",
        tech: ["Next.js 15", "TypeScript", "Tailwind v4", "Recharts"],
        link: "https://luxury-hotel-chirantan.vercel.app",
        github: "https://github.com/Chirantanv19/luxury-hotel",
        image: "one.png",
    },
    {
        id: 2,
        title: "zenith-residences",
        description: "High-end marketplace with server-side filtering, sub-100ms transitions, and Stripe integration.",
        tech: ["React", "PostgreSQL", "Prisma", "Stripe"],
        link: "https://zenith-residences-chirantan.vercel.app",
        github: "https://github.com/Chirantanv19/zenith-residences",
        image: "two.png",
    },
    {
        id: 3,
        title: "Titan Build",
        description: "A browser-based operating system interface built with custom hooks and high-performance animations.",
        tech: ["Next.js", "Framer Motion", "Zustand", "Lucide"],
        link: "https://titan-build.vercel.app",
        github: "https://github.com/Chirantanv19/Titan-Build",
        image: "three.png",
    }, {
        id: 4,
        title: "Urban Palate",
        description: "A premium full-stack dining platform built with Next.js 16 and Supabase, featuring a seamless reservation engine and a luxury glassmorphism UI.",
        tech: ["Next.js", "Supabase,", "Auths", "Lucide"],
        link: "https://urban-palate-chirantan.vercel.app",
        github: "https://github.com/Chirantanv19/urban-palate",
        image: "four.png",
    },
    {
        id: 5,
        title: "The Royal Bistro",
        description: "A premium full-stack dining platform built with Next.js 16 and Neon , featuring a seamless reservation engine and a luxury glassmorphism UI.",
        tech: ["Next.js", "Neon,", "NextAuths", "UploadThings "],
        link: "https://the-royal-bistro.vercel.app",
        github: "https://github.com/Chirantanv19/the-royal-bistro",
        image: "five.png",
    }



];

