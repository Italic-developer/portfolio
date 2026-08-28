export type ProjectType = "solo" | "duo" | "team" | "client" | "open-source";

export type Project = {
  id: string;
  image: string;
  name: string;
  type: ProjectType;
  role: string;
  keyFeatures: string[];
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  year: number;
  liveDemo: string;
  github: string;
};
