import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ProjectContext } from "@lib/contexts/ProjectContext";
import useCarouselStore from "@lib/stores/useCarouselStore";
import useModalStore from "@lib/stores/useModalStore";
import type { DirectusFile, ProjectsFiles } from "@lib/db/directus";
import clsx from "clsx";

const Carousel = () => {
  const { assets, projects } = useContext(ProjectContext);
  const modal = useModalStore();
  const { page, offset } = useCarouselStore();

  const currentProject = projects[modal.page];
  const imageObject = currentProject.carousel_image[page] as ProjectsFiles;
  const currentImage = imageObject.directus_files_id as DirectusFile;

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        className={cardClasses}
        initial={{ opacity: 0, x: -offset, zIndex: 0 }}
        animate={{
          opacity: 1,
          x: 0,
          zIndex: 1,
          transition: { ease: "linear" },
        }}
        exit={{ opacity: 0, x: offset, zIndex: 0 }}
        key={`${currentProject.id}-${page}`}
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

const cardClasses = clsx([
  "h-full overflow-hidden", //base
  "card bg-base-100 bg-opacity-30", // appearance
  "flex justify-center items-center p-3", // display items
]);

export default Carousel;
