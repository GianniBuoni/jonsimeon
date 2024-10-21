import type { ReactNode } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import Heading from "#react/Heading";

interface Props {
  first: string;
  second?: string;
  cursor?: boolean;
  children?: ReactNode;
}

const Greeting = ({ first, second, cursor = true, children }: Props) => {
  let animationArray: any[] = [first];
  second ? animationArray.push(1000, second) : animationArray;

  return (
    <div className="grow flex items-center z-20">
      <div>
        <Heading
          tagName="h2"
          size="h1"
          classes="text-5xl lg:text-8xl leading-tight drop-shadow-2xl"
        >
          <TypeAnimation
            style={{ whiteSpace: "pre-line" }}
            sequence={animationArray}
            wrapper="span"
            cursor={cursor}
          />
        </Heading>
        <motion.div
          className="lg:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 3 } }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default Greeting;
