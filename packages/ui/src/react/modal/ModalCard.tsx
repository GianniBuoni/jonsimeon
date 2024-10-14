// modules
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import clsx from "clsx";

// components
import Card from "@ui/react/Card";
import Carousel from "@ui/react/carousel/Carousel";
import CarouselControls from "@ui/react/carousel/CarouselControls";
import ModalButton from "@ui/react/modal/ModalButton";
import ModalCopy from "@ui/react/modal/ModalCopy";

// lib
import useModalStore from "@lib/stores/useModalStore";
import { ProjectContext } from "@lib/contexts/ProjectContext";

const ModalCard = () => {
  const { projects } = useContext(ProjectContext);
  const { page } = useModalStore();
  const project = projects[page];

  return (
    <AnimatePresence>
      <MotionCard layoutId={`modal-${project.id}`} classes={cardClasses}>
        <ModalButton />
        <div className="row-span-3 md:row-span-1 col-span-5 flex flex-col gap-5 p-1 overflow-hidden">
          <Carousel />
          <CarouselControls
            store="carousel"
            settings={{
              maxLength: project.carousel_image.length - 1,
              offset: 300,
            }}
          />
        </div>
        <ModalCopy classes="col-span-4 md:row-span-1" />
      </MotionCard>
    </AnimatePresence>
  );
};

const cardClasses = clsx([
  "w-full lg:max-w-screen-lg xl:w-screen-md", // width
  "h-[90vh] lg:h-[75vh] overflow-scroll", // height
  "lg:mb-5",
  "z-30",
  "grid grid-rows-7 md:grid-rows-1", // rows breakpoint
  "md:grid-cols-9 gap-10 md:gap-12", //  columns breakpoint
]);
const MotionCard = motion.create(Card);

export default ModalCard;
