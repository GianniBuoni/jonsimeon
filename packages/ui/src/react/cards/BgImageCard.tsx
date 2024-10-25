// module
import React from "react";
import clsx from "clsx";

// lib
import type { Project } from "@jonsimeon/lib/db";

// ui
import Heading from "#react/Heading";

interface Props {
  project: Project;
  assets: string;
  textVisisble?: boolean;
}

const BgImageCard = (
  { project, assets, textVisisble = false }: Props,
  ref: React.LegacyRef<HTMLDivElement>,
) => {
  const { title, hero_image, slug, subtitle } = project;
  const imgUrl = assets + "/" + hero_image.id + "?key=bg";

  const isVisisble = textVisisble ? "" : "opacity-0 hover:opacity-100";

  const bgLinkClasses = clsx([
    "absolute top-0 left-0 h-full w-full",
    "flex flex-col justify-center items-center",
    "bg-base-300 bg-opacity-90 transition-opacity",
    isVisisble, // visibility
  ]);

  return (
    <div
      className="relative rounded-box h-64 bg-neutral overflow-hidden shadow-hard"
      ref={ref}
    >
      <a href={`/work/${slug}`} className={bgLinkClasses}>
        <Heading tagName="h2" size="h1" classes="text-accent">
          {title}
        </Heading>
        {subtitle && <em>{subtitle}</em>}
      </a>
      <div
        className="h-full bg-center bg-cover"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      />
    </div>
  );
};

export default React.forwardRef(BgImageCard);
