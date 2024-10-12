import { motion, AnimatePresence } from "framer-motion";

// component
import Card from "@ui/react/Card";

// lib
import useCarouselStore from "@lib/stores/useCarouselStore";
import useModalStore from "@lib/stores/useModalStore";
import clsx from "clsx";

interface Props {
  store: "carousel" | "modal";
  array: {
    id: string;
    src: string;
    alt: string;
  }[];
  classes?: string;
}

const ImageCarousel = ({ store, array, classes }: Props) => {
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
          layoutId={array[page].id}
          initial={{ opacity: 0, x: -offset, zIndex: 0 }}
          animate={{ opacity: 1, x: 0, zIndex: 1 }}
          exit={{ opacity: 0, x: offset, zIndex: 0 }}
          classes={cardClasses}
        >
          <div className="rounded-box overflow-hidden">
            <img
              src={`${array[page].src}?key=medium`}
              alt={array[page].alt}
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

export default ImageCarousel;
