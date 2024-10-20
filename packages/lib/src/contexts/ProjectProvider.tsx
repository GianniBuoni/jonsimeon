import React from "react";
import { ProjectContext } from "#contexts/ProjectContext.ts";

interface Props extends ProjectContext {
  children: React.ReactNode;
}

const ProjectProvider = ({ assets, projects, children }: Props) => {
  return (
    <ProjectContext.Provider value={{ assets, projects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
