import { motion, AnimatePresence } from "framer-motion";

// component
import Card from "@ui/react/Card";

// lib
import useCarouselStore from "@lib/stores/useCarouselStore";
import useModalStore from "@lib/stores/useModalStore";
import clsx from "clsx";
import { useContext } from "react";
import { ProjectContext } from "@lib/contexts/ProjectContext";

interface Props {
  store: "carousel" | "modal";
  classes?: string;
}

const CarouselCard = ({ store, classes }: Props) => {
  const { assets, projects } = useContext(ProjectContext);
  const curentStore =
    store === "carousel" ? useCarouselStore() : useModalStore();
  const { page, offset, select } = curentStore;
  const cardClasses = clsx(
    store === "modal" ? "hover:cursor-pointer" : undefined,
    classes,
  );
  const imgClasses = clsx(
    store === "modal" ? "hover:scale-105" : undefined,
    "w-full",
  );
  return (
    <div>
      {" "}
      <AnimatePresence mode="popLayout">
        <MotionCard
          key={`${store}-${page}`}
          layoutId={projects[page].id}
          initial={{ opacity: 0, x: -offset, zIndex: 0 }}
          animate={{ opacity: 1, x: 0, zIndex: 1 }}
          exit={{ opacity: 0, x: offset, zIndex: 0 }}
          classes={cardClasses}
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
    </div>
  );
};

const MotionCard = motion.create(Card);

export default CarouselCard;
