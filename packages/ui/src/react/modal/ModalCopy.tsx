// modules
import React, { useContext } from "react";
import Markdown from "react-markdown";
import clsx from "clsx";

// ui
import Heading from "#react/Heading.tsx";
import ArrayOfLinks from "#react/ArrayOfLinks.tsx";

// lib
import { useModalStore } from "@jonsimeon/lib/stores";
import { ProjectContext } from "@jonsimeon/lib/contexts";
import type { IconBadge, ProjectsIconBadges } from "@jonsimeon/lib/db";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  classes?: string;
}

const ModalCopy = ({ classes, ...rest }: Props) => {
  const { projects } = useContext(ProjectContext);
  const { page } = useModalStore();

  const currentProject = projects[page];
  const linkIds = currentProject.links as ProjectsIconBadges[];
  const links = linkIds.map((id) => id.icon_badge_id) as IconBadge[];

  const copyClasses = clsx([
    "p-1 h-full",
    "flex flex-col justify-between",
    "card-body",
    classes,
  ]);

  return (
    <div className={copyClasses} {...rest}>
      <div className="flex flex-col gap-10">
        <div>
          <Heading
            tagName="h2"
            size="h1"
            addMargin={false}
            classes="tracking-wide text-accent mb-3"
          >
            {currentProject.title}
          </Heading>
          {currentProject.subtitle && (
            <small>
              <em>{currentProject.subtitle}</em>
            </small>
          )}
        </div>
        <Markdown className="w-11/12 flex flex-col gap-3 grow">
          {currentProject.body}
        </Markdown>
      </div>
      <ArrayOfLinks links={links} />
    </div>
  );
};

export default ModalCopy;
