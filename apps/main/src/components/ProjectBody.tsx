import { ProjectProvider } from "@jonsimeon/lib/contexts";
import type { IconBadge, Project, ProjectsBadges } from "@jonsimeon/lib/db";
import {
  ArrayOfLinks,
  Card,
  Carousel,
  CarouselControls,
} from "@jonsimeon/ui/react";
import Markdown from "react-markdown";

interface Props {
  project: Project;
  assets: string;
}

const ProjectBody = ({ project, assets }: Props) => {
  console.log(project);
  const { carousel_image, links, body } = project;
  const exLinks = links as ProjectsBadges[];
  const mappedLinks = exLinks.map((l) => l.icon_badge_id) as IconBadge[];
  console.log(mappedLinks);

  return (
    <ProjectProvider projects={[project]} assets={assets}>
      <div className="flex gap-10">
        <div className="w-1/3 flex flex-col justify-between py-3">
          <div className="flex flex-col gap-3">
            <Markdown>{body}</Markdown>
          </div>
          <ArrayOfLinks links={mappedLinks} />
        </div>
        <Card classes="h-96 overflow-hidden flex flex-col gap-5">
          <Carousel />
          <CarouselControls
            store="carousel"
            settings={{
              offset: 100,
              maxLength: carousel_image.length - 1,
            }}
          />
        </Card>
      </div>
      {/*Related projects go here when there are enough */}
    </ProjectProvider>
  );
};

export default ProjectBody;