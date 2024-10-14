import { create } from "zustand";

type AccordionState = {
  page: number;
  select: (i: number) => void;
};

const useAccordionStore = create<AccordionState>((set) => ({
  page: 0,
  select: (input) =>
    set(() => ({
      page: input,
    })),
}));

export default useAccordionStore;
