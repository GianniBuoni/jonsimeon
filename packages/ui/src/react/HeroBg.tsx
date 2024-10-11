import clsx from "clsx";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface Props {
  imgSrc: string;
}

const HeroBg = ({ imgSrc }: Props) => {
  return (
    <motion.div
      key={"hero-bg"}
      className={imageClasses}
      variants={imageVaraints}
      initial="initial"
      animate="animate"
      style={{
        backgroundImage: `url("${imgSrc}")`,
      }}
    >
      <div className={maskClasses}></div>
    </motion.div>
  );
};

const imageClasses = clsx([
  "absolute",
  "h-screen",
  "w-screen",
  "top-0",
  "left-0",
  "bg-no-repeat",
  "portrait:bg-center",
  "landscape:lg:bg-[10rem_30%]",
]);

const maskClasses = clsx([
  "absolute",
  "w-screen",
  "h-screen",
  "left-0",
  "top-0",
  "bg-gradient-to-r",
  "from-base-300",
  "via-base-200",
  "portrait:to-base-100",
  "opacity-80",
  "portrait:opacity-90",
]);

const imageVaraints: Variants = {
  initial: { opacity: 0, x: 300 },
  animate: { opacity: 1, x: 0, transition: { ease: "linear" } },
};

export default HeroBg;
