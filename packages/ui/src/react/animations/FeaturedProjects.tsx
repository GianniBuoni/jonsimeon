import type { Project } from "@jonsimeon/lib/db";
import { BgImageCard, DragCanvas, DragDiv } from "@jonsimeon/ui/react";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface Props {
  assets: string;
  projects: Project[];
}

const FeaturedProjects = ({ projects, assets }: Props) => {
  return (
    <DragCanvas>
      <motion.div
        variants={staggerAnimation}
        animate="animate"
        initial="initial"
        className="m-auto max-w-screen-xl pt-32 flex flex-wrap"
      >
        {projects.map((p, i) => (
          <DragDiv
            classes={cardClasses(i)}
            key={`featuredProjects-${i}`}
            variants={staggerAnimation}
          >
            <BgImageCard assets={assets} project={p} />
          </DragDiv>
        ))}
      </motion.div>
    </DragCanvas>
  );
};

const cardClasses = (input: number) =>
  clsx([
    "w-1/2 p-5", // base styles
    input % 2 == 0 ? "" : "", // even indexes are on the right
  ]);

const staggerAnimation: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "linear",
      delayChildren: 4,
      staggerChildren: 0.25,
    },
  },
};

export default FeaturedProjects;
