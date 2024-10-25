import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import clsx from "clsx";

import { ProjectContext } from "@jonsimeon/lib/contexts";
import type { DirectusFile, ProjectsFiles } from "@jonsimeon/lib/db";
import { useCarouselStore } from "@jonsimeon/lib/stores";
import { useModalStore } from "@jonsimeon/lib/stores";

interface Props extends HTMLMotionProps<"div"> {
  classes?: string;
  includeBg?: boolean;
}

const Carousel = ({ classes, includeBg = true, ...rest }: Props) => {
  const { assets, projects } = useContext(ProjectContext);
  const modal = useModalStore();
  const { page, offset } = useCarouselStore();

  const currentProject = projects[modal.page];
  const imageObject = currentProject.carousel_image[page] as ProjectsFiles;
  const currentImage = imageObject.directus_files_id as DirectusFile;

  const cardClasses = clsx([
    "h-full overflow-hidden", //base
    includeBg ? "card bg-base-100 bg-opacity-30" : "", // appearance
    "flex justify-center items-center p-3", // display items
  ]);

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        className={`${cardClasses} ${classes}`}
        initial={{ opacity: 0, x: -offset, zIndex: 0 }}
        animate={{
          opacity: 1,
          x: 0,
          zIndex: 1,
          transition: { ease: "linear" },
        }}
        exit={{ opacity: 0, x: offset, zIndex: 0 }}
        key={`${currentProject.id}-${page}`}
        {...rest}
      >
        <img
          src={`${assets}/${currentImage.id}`}
          alt={currentImage.description!}
          className="max-h-full object-contain"
        ></img>
      </motion.div>
    </AnimatePresence>
  );
};

export default Carousel;
