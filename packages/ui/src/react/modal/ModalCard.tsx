// modules
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import clsx from "clsx";

// components
import Card from "@ui/react/Card";
import Carousel from "@ui/react/carousel/Carousel";
import ModalButton from "@ui/react/modal/ModalButton";

// lib
import useModalStore from "@lib/stores/useModalStore";
import { ProjectContext } from "@lib/contexts/ProjectContext";
import CarouselControls from "@ui/react/carousel/CarouselControls";

const ModalCard = () => {
  const { projects } = useContext(ProjectContext);
  const { page } = useModalStore();
  const project = projects[page];

  return (
    <AnimatePresence>
      <MotionCard layoutId={`modal-${project.id}`} classes={cardClasses}>
        <div className="h-full flex flex-col justify-between gap-10">
          <ModalButton />
          <Carousel />
          <div className="h-5">
            <CarouselControls
              store="carousel"
              settings={{
                maxLength: project.carousel_image.length - 1,
                offset: 300,
              }}
            />
          </div>
        </div>
      </MotionCard>
    </AnimatePresence>
  );
};

const cardClasses = clsx([
  "w-full lg:max-w-screen-lg xl:w-screen-md", // width
  "h-[90vh] lg:h-[75vh]", // height
  "lg:mb-5",
  "z-30",
]);
const MotionCard = motion.create(Card);

export default ModalCard;
