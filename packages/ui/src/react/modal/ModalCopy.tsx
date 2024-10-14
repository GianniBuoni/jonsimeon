// modules
import React, { useContext } from "react";
import Markdown from "react-markdown";
import clsx from "clsx";

// ui
import Heading from "@ui/react/Heading";
import ArrayOfLinks from "@ui/react/ArrayOfLinks";

// lib
import useModalStore from "@lib/stores/useModalStore";
import { ProjectContext } from "@lib/contexts/ProjectContext";
import type { IconBadge } from "@lib/db/directus";
import type { ProjectsIconBadges } from "@lib/db/schemas/projects";

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
