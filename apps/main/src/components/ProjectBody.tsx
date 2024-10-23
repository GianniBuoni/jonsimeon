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
  const { carousel_image, links, body, title } = project;
  const exLinks = links as ProjectsBadges[];
  const mappedLinks = exLinks.map((l) => l.icon_badge_id) as IconBadge[];

  return (
    <ProjectProvider projects={[project]} assets={assets}>
      <div className="flex gap-10 my-10" aria-label={title}>
        <div className="w-[30rem] flex flex-col justify-between py-3">
          <div className="flex flex-col gap-3">
            <Markdown>{body}</Markdown>
          </div>
          <ArrayOfLinks links={mappedLinks} />
        </div>
        <Card
          classes="h-96 xl:h-[30rem] w-full overflow-hidden flex flex-col gap-5"
          aria-label={`${title} image carousel`}
        >
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
