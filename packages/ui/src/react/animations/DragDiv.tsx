import { useContext } from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

import { DragContext } from "./DragCanvas";
import clsx from "clsx";

interface Props extends HTMLMotionProps<"div"> {
  classes: string;
}

const DragDiv = ({ children, classes, ...rest }: Props) => {
  const dragRef = useContext(DragContext);

  const dragClasses = clsx(["pointer-events-auto cursor-grab", classes]);

  return (
    <motion.div
      drag
      dragConstraints={dragRef}
      className={dragClasses}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default DragDiv;
