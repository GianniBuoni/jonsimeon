import React, { useEffect, useRef, useState } from "react";
import { useWindowSize } from "@react-hook/window-size";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  classes?: string;
  speed?: number;
  repeat?: number;
}

const Marquee = ({ classes, repeat = 3, speed = 20, children }: Props) => {
  // needed to calc how many extra children are needed
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const [width] = useWindowSize();

  // functions to set and reset animations
  const [marqueeWidth, setMarqueeWidth] = useState(0);

  // set windowsize on load uses windowsize-hook to recalc
  useEffect(() => {
    if (window !== undefined) {
      setMarqueeWidth(marqueeRef.current!.scrollWidth);
    }
  }, [width]);

  const duplicateChilds = new Array(repeat).fill(children);

  // animation settings
  const marqueeVariant: Variants = {
    animate: {
      x: [0, -marqueeWidth / repeat],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: speed,
      },
    },
  };

  return (
    <div className={`${classes} overflow-hidden`}>
      <motion.div
        variants={marqueeVariant}
        animate="animate"
        ref={marqueeRef}
        className="flex"
      >
        {duplicateChilds.map((child, index) => {
          return (
            <div key={index} className={`flex-shrink-0 px-1`}>
              {child}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Marquee;
