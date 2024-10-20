import { createContext } from "react";
import type { Project } from "#db/schemas/projects.ts";

export type ProjectContext = {
  assets: string;
  projects: Project[];
};

export const ProjectContext = createContext({} as ProjectContext);
