export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  image: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  color: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}