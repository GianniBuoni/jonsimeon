import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

// component
import Card from "#react/Card.tsx";

// lib
import { useModalStore } from "@jonsimeon/lib/stores";
import { ProjectContext } from "@jonsimeon/lib/contexts";

const CarouselCard = () => {
  const { assets, projects } = useContext(ProjectContext);
  const { select, offset, page } = useModalStore();

  const imgClasses = clsx("cursor-pointer hover:scale-105", "w-full");
  return (
    <AnimatePresence mode="popLayout">
      <MotionCard
        key={`modal-${page}`}
        layoutId={`modal-${projects[page].id}`}
        initial={{ opacity: 0, x: -offset, zIndex: 0 }}
        animate={{ opacity: 1, x: 0, zIndex: 1 }}
        exit={{ opacity: 0, x: offset, zIndex: 0 }}
      >
        <div className="rounded-box overflow-hidden">
          <img
            src={`${assets}/${projects[page].hero_image.id}?key=medium`}
            alt={projects[page].hero_image.description!}
            onClick={select ? () => select() : undefined}
            className={imgClasses}
          />
        </div>
      </MotionCard>
    </AnimatePresence>
  );
};

const MotionCard = motion.create(Card);
export default CarouselCard;
