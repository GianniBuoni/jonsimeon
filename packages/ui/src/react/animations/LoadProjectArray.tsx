import BgImageCard from "#react/cards/BgImageCard";
import { motion } from "framer-motion";
import type { Project } from "@jonsimeon/lib/db";
import type { Variants } from "framer-motion";

interface Props {
  projects: Project[];
  assets: string;
}

const LoadProjectArray = ({ projects, assets }: Props) => {
  return (
    <motion.div
      variants={loadVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col gap-7"
    >
      {projects.map((p, i) => (
        <MotionImageCard
          key={i}
          variants={loadVariants}
          project={p}
          assets={assets}
        />
      ))}
    </motion.div>
  );
};

const loadVariants: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "linear", staggerChildren: 0.25 },
  },
};

const MotionImageCard = motion.create(BgImageCard);

export default LoadProjectArray;
