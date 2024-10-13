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
      <MotionCard layoutId={projects[page].id} classes={cardClasses}>
        {projects[page].title}
      </MotionCard>
    </AnimatePresence>
  );
};

const cardClasses = clsx([
  "w-full lg:max-w-screen-lg xl:w-screen-md", // width
  "h-[90vh] lg:h-[75vh]", // height
  "z-30",
]);
const MotionCard = motion.create(Card);

export default ModalCard;
