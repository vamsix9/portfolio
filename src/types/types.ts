export type Social = {
    name: string;
    href: string;
    icon: React.ReactNode;
};

export type Skill = { name: string; image?: string };

export type EducationType = {
  date: string;
  company: string;
  role: string;
  logo: string;
}

export type Project = {
    id: string;
    name: string;
    description: string;
    tech: string[];
    repo?: string;
    demo?: string;
};

export type ExperienceType = {
    date: string;
    company: string;
    role: string;
    description?: string;
    logo: string;
}