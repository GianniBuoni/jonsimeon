// modules
import React, { useContext } from "react";
import Markdown from "react-markdown";

// ui
import Heading from "@ui/react/Heading";

// lib
import useModalStore from "@lib/stores/useModalStore";
import { ProjectContext } from "@lib/contexts/ProjectContext";
import type { IconBadge, ProjectsIconBadges } from "@lib/db/directus";
import ArrayOfLinks from "../ArrayOfLinks";
import clsx from "clsx";

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
    classes,
  ]);

  return (
    <div className={copyClasses} {...rest}>
      <div>
        <Heading tagName="h2" size="h1" classes="tracking-wide text-accent">
          {currentProject.title}
        </Heading>
        {currentProject.subtitle && (
          <small className="mb-10">
            <em>{currentProject.subtitle}</em>
          </small>
        )}
        <Markdown className="w-11/12 flex flex-col gap-3 grow">
          {currentProject.body}
        </Markdown>
      </div>
      <ArrayOfLinks links={links} />
    </div>
  );
};

export default ModalCopy;
