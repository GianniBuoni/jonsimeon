import type { Project } from "@jonsimeon/lib/db";
import { BgImageCard, DragCanvas, DragDiv, Link } from "../";
import clsx from "clsx";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useFilterStore } from "@jonsimeon/lib/stores";

interface Props {
  assets: string;
  projects: Project[];
}

const FeaturedProjects = ({ projects, assets }: Props) => {
  const { searchParams } = useFilterStore();
  return (
    <DragCanvas>
      <motion.div
        variants={staggerAnimation}
        animate="animate"
        initial="initial"
        className="h-screen max-w-screen-xl pt-32 m-auto gap-10 grid grid-cols-7 grid-rows-7"
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
        <motion.p
          variants={staggerAnimation}
          className="col-start-5 row-start-6 col-end-8 px-10 -z-10 text-right pointer-events-auto"
        >
          👀 Pssssst . . . drag the image cards around! <br />
          💛 Check out the rest of my work{" "}
          <Link
            href={
              searchParams.length >= 1
                ? "/work?filter=" + searchParams.join(",")
                : "/work"
            }
          >
            here!
          </Link>
        </motion.p>
      </motion.div>
    </DragCanvas>
  );
};

const cardClasses = (index: number) =>
  clsx([
    "col-span-4 p-5 h-64", // base styles
    index % 2 == 0 ? "col-start-1" : "col-end-8", // even indexes are on the right
    index == 2 ? "row-start-4 row-end-6" : "",
  ]);

const staggerAnimation: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "linear",
      delayChildren: 3.75,
      staggerChildren: 0.25,
    },
  },
};

export default FeaturedProjects;
