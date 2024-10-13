import { createContext } from "react";
import type { Project } from "@lib/db/directus";

export type ProjectContext = {
  assets: string;
  projects: Project[];
};

export const ProjectContext = createContext({} as ProjectContext);
