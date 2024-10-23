import Markdown from "react-markdown";

import { ProjectProvider } from "@jonsimeon/lib/contexts";
import type { Project } from "@jonsimeon/lib/db";
import { RelatedLinks, Card, Carousel, CarouselControls } from "../";
import MotionTitleCard from "#react/cards/MotionTitleCard";

interface Props {
  project: Project;
  assets: string;
}

const ProjectBody = ({ project, assets }: Props) => {
  const { carousel_image, body, title } = project;

  return (
    <ProjectProvider projects={[project]} assets={assets}>
      <MotionTitleCard />
      <div className="flex gap-10 my-10" aria-label={title}>
        <div className="w-[30rem] flex flex-col justify-between py-3">
          <div className="flex flex-col gap-3">
            <Markdown>{body}</Markdown>
          </div>
          <RelatedLinks />
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
