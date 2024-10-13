// modules
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import clsx from "clsx";

// components
import Card from "@ui/react/Card";

// lib
import useModalStore from "@lib/stores/useModalStore";
import { ProjectContext } from "@lib/contexts/ProjectContext";

const ModalCard = () => {
  const { projects } = useContext(ProjectContext);
  const { page, deselect } = useModalStore();

  return (
    <AnimatePresence>
      <MotionCard layoutId={`modal-${projects[page].id}`} classes={cardClasses}>
        <button
          title="close"
          aria-label="close modal"
          className={buttonClasses}
          onClick={() => deselect!()}
        >
          ×
        </button>
      </MotionCard>
    </AnimatePresence>
  );
};

const buttonClasses = clsx([
  "absolute right-5", // position
  "btn btn-circle text-3xl pb-1", //base
  "scale-75 hover:scale-100", //interactivity
]);

const cardClasses = clsx([
  "w-full lg:max-w-screen-lg xl:w-screen-md", // width
  "h-[90vh] lg:h-[75vh]", // height
  "lg:mb-5",
  "z-30",
]);
const MotionCard = motion.create(Card);

export default ModalCard;
