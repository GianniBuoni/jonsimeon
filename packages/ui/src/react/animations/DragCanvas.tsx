import { motion } from "framer-motion";
import type { MutableRefObject, PropsWithChildren } from "react";
import { createContext, useRef } from "react";

export const DragContext = createContext(
  {} as MutableRefObject<HTMLDivElement | null>,
);

const DragCanvas = ({ children }: PropsWithChildren) => {
  const dragRef = useRef(null);
  return (
    <DragContext.Provider value={dragRef}>
      <motion.div
        className="fixed w-screen h-screen top-0 left-0 z-30 pointer-events-none"
        ref={dragRef}
      >
        {children}
      </motion.div>
    </DragContext.Provider>
  );
};

export default DragCanvas;
