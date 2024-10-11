import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import Heading from "@ui/react/Heading";

interface Props {
  first: string;
  second?: string;
  final: string;
}

const Greeting = ({ first, second, final }: Props) => {
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
            sequence={[first, 1000, `${second && second}`]}
            wrapper="span"
            cursor={true}
          />
        </Heading>
        <motion.p
          className="lg:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 3 } }}
        >
          {final}
        </motion.p>
      </div>
    </div>
  );
};

export default Greeting;
