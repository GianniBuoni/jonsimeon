import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import BgImageCard from "#cards/BgImageCard";
import { useContext } from "react";
import { ProjectContext } from "@jonsimeon/lib/contexts";
import { useModalStore } from "@jonsimeon/lib/stores";

const MotionTitleCard = () => {
  const { projects, assets } = useContext(ProjectContext);
  const { page } = useModalStore();
  const project = projects[page];

  return (
    <MotionImageCard
      project={project}
      assets={assets}
      textVisisble={true}
      variants={titleVariants}
      initial="initial"
      animate="animate"
    />
  );
};

const MotionImageCard = motion.create(BgImageCard);

const titleVariants: Variants = {
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
};

export default MotionTitleCard;