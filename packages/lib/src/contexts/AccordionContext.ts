import { createContext } from "react";

export type AccordionContext = {
  title: string;
  subtitle: string;
  index: number;
  body: string;
};

export const AccordionContext = createContext({} as AccordionContext[]);
