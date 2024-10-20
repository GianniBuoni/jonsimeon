// modules
import React, { useContext } from "react";
import Markdown from "react-markdown";
import clsx from "clsx";

// ui
import Heading from "#react/Heading";
import ArrayOfLinks from "#react/ArrayOfLinks";

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
    "bg-neutral z-20", // base
    "overflow-scroll",
    "card-body flex flex-col justify-between",
    classes,
  ]);

  return (
    <div className={copyClasses} {...rest}>
      <div>
        <div className="mb-5">
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
        <Markdown className="flex flex-col gap-3 lg:w-11/12">
          {currentProject.body}
        </Markdown>
      </div>
      <ArrayOfLinks links={links} />
    </div>
  );
};

export default ModalCopy;
