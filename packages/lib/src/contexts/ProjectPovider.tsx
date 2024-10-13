import type { Project } from "@lib/db/directus";
import { ProjectContext } from "@lib/contexts/ProjectContext";
import type React from "react";

interface Props {
  projects: Project[];
  children: React.ReactNode;
}

const ProjectProvider = ({ projects, children }: Props) => {
  console.log(projects);
  return (
    <ProjectContext.Provider value={projects}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
