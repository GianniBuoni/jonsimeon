// modules
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import clsx from "clsx";

// components
import Card from "#react/Card";
import Carousel from "#react/carousel/Carousel";
import CarouselControls from "#react/carousel/CarouselControls";
import ModalButton from "#react/modal/ModalButton";
import ModalCopy from "#react/modal/ModalCopy";

// lib
import { useModalStore } from "@jonsimeon/lib/stores";
import { ProjectContext } from "@jonsimeon/lib/contexts";

const ModalCard = () => {
  const { projects } = useContext(ProjectContext);
  const { page } = useModalStore();
  const project = projects[page];

  return (
    <AnimatePresence>
      <MotionCard layoutId={`modal-${project.id}`} classes={cardClasses}>
        <ModalButton />
        <div className={carouselClasses}>
          <Carousel />
          <CarouselControls
            store="carousel"
            settings={{
              maxLength: project.carousel_image.length - 1,
              offset: 300,
            }}
          />
        </div>
        <ModalCopy classes={copyClasses} />
      </MotionCard>
    </AnimatePresence>
  );
};

const cardClasses = clsx([
  "portrait:max-w-xl portrait:sm:max-w-lg lg:max-w-screen-lg xl:w-screen-md", // width
  "h-[85vh] md:max-h-[35rem] 2xl:h-[50vh] overflow-hidden", // height
  "mb-16 md:mb-5",
  "z-30",
  "grid grid-rows-7 landscape:grid-rows-1", // rows breakpoint
  "landscape:grid-cols-9 gap-5 lg:gap-10", //  columns breakpoint
  "overflow-hidden",
]);

const carouselClasses = clsx([
  "flex flex-col gap-5 p-1", // base
  "row-span-3 portrait:sm:row-span-4 lg:row-span-1", //rows breakpoint
  "landscape:col-span-4 landscape:lg:col-span-5", // columns breakpoint
]);
const copyClasses = clsx([
  "row-span-4 portrait:sm:row-span-3 lg:row-span-1",
  "landscape:col-span-5 landscape:lg:col-span-4", // columns breakpoint
]);

const MotionCard = motion.create(Card);

export default ModalCard;
