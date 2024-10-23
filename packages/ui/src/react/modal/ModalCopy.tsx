// modules
import React, { useContext } from "react";
import Markdown from "react-markdown";
import clsx from "clsx";

// ui
import Heading from "#react/Heading";
import RelatedLinks from "#react/RelatedLinks";

// lib
import { useModalStore } from "@jonsimeon/lib/stores";
import { ProjectContext } from "@jonsimeon/lib/contexts";
import type { IconBadge, ProjectsBadges } from "@jonsimeon/lib/db";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  classes?: string;
}

const ModalCopy = ({ classes, ...rest }: Props) => {
  const { projects } = useContext(ProjectContext);
  const { page } = useModalStore();
  const currentProject = projects[page];

  const copyClasses = clsx([
    "bg-neutral z-20 overflow-scroll", // base
    "card-body", // padding
    classes,
  ]);

  return (
    <div className={copyClasses} {...rest}>
      <div className="sm:p-5 md:p-2 gap-5 h-full flex flex-col justify-between">
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
          <Markdown className="flex flex-col gap-3">
            {currentProject.body}
          </Markdown>
        </div>
        <RelatedLinks />
      </div>
    </div>
  );
};

export default ModalCopy;
