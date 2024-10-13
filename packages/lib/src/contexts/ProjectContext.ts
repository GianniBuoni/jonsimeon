import { createContext } from "react";
import type { Project } from "@lib/db/directus";

export const ProjectContext = createContext({} as Project[]);
