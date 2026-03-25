export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  repo: string;
  tags: string[];
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface NavLink {
  name: string;
  href: string;
}
