
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
        title: "Quantum Dashboard",
        description: "Real-time analytics engine with neural network visualizations and predictive data modeling.",
        tech: ["Next.js 15", "TypeScript", "Tailwind v4", "Recharts"],
        link: "luxury-hotel-chirantan.vercel.app",
        github: "https://github.com/Chirantanv19/luxury-hotel",
        image: "one.jpeg",
    },
    {
        id: 2,
        title: "Stellar E-Commerce",
        description: "High-end marketplace with server-side filtering, sub-100ms transitions, and Stripe integration.",
        tech: ["React", "PostgreSQL", "Prisma", "Stripe"],
        link: "https://demo.com",
        github: "https://github.com",
        image: "two.jpeg",
    },
    {
        id: 3,
        title: "Nexus OS",
        description: "A browser-based operating system interface built with custom hooks and high-performance animations.",
        tech: ["Next.js", "Framer Motion", "Zustand", "Lucide"],
        link: "https://demo.com",
        github: "https://github.com",
        image: "three.jpeg",
    },
    {
        id: 4,
        title: "Quantum Dashboard",
        description: "Real-time analytics engine with neural network visualizations and predictive data modeling.",
        tech: ["Next.js 15", "TypeScript", "Tailwind v4", "Recharts"],
        link: "https://demo.com",
        github: "https://github.com",
        image: "one.jpeg",
    },
    {
        id: 5,
        title: "Stellar E-Commerce",
        description: "High-end marketplace with server-side filtering, sub-100ms transitions, and Stripe integration.",
        tech: ["React", "PostgreSQL", "Prisma", "Stripe"],
        link: "https://demo.com",
        github: "https://github.com",
        image: "two.jpeg",
    },
    {
        id: 6,
        title: "Nexus OS",
        description: "A browser-based operating system interface built with custom hooks and high-performance animations.",
        tech: ["Next.js", "Framer Motion", "Zustand", "Lucide"],
        link: "https://demo.com",
        github: "https://github.com",
        image: "three.jpeg",
    }


];