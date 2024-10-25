import { ProjectProvider } from "@jonsimeon/lib/contexts";
import type { Project } from "@jonsimeon/lib/db";

// ui
import ModalCard from "#modal/ModalCard";
import FullCarousel from "#react/carousel/FullCarousel";

interface Props {
  project: Project;
  assets: string;
}

const ProjectBody = ({ project, assets }: Props) => {
  return (
    <ProjectProvider projects={[project]} assets={assets}>
      <FullCarousel />
      <ModalCard expandedFeatures={true} />
      {/*Related projects go here when there are enough */}
    </ProjectProvider>
  );
};

export default ProjectBody;
