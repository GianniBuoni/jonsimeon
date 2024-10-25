// modules
import type { PropsWithChildren } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import clsx from "clsx";

// lib
import { useModalStore } from "@jonsimeon/lib/stores";
import { useCarouselStore } from "@jonsimeon/lib/stores";

interface Props extends HTMLMotionProps<"div"> {
  resetCarousel: boolean;
  classes?: string;
}

const ModalBg = ({ resetCarousel, classes, children }: Props) => {
  const { selection, deselect } = useModalStore();
  const { reset } = useCarouselStore();

  const handleClick = () => {
    deselect!();
    if (resetCarousel) reset();
  };

  const bgClasses = clsx([
    sharedClases,
    "fixed flex justify-center items-center", // display
    "bg-base-300 bg-opacity-90 z-30", //color
    "p-5 lg:p-10", //padding should match Section component
    classes,
  ]);

  return (
    <AnimatePresence>
      {selection && (
        <>
          <motion.div
            className={bgClasses}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
          >
            <div
              className={`absolute ${sharedClases} cursor-pointer`}
              aria-label="close modal"
              onClick={() => handleClick()}
            ></div>
            <>{children}</>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const sharedClases = "top-0 left-0 h-screen w-screen";

export default ModalBg;
