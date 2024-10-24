import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type FilterStore = {
  searchParams: string[];
  addParam: (input: string) => void;
  rmParam: (input: string) => void;
};

const useFilterStore = create<FilterStore>()(
  persist(
    (set) => ({
      searchParams: [],
      addParam: (input) =>
        set((store) => ({
          searchParams: [...store.searchParams, input],
        })),
      rmParam: (input) =>
        set((store) => ({
          searchParams: store.searchParams.filter((f) => f !== input),
        })),
    }),
    {
      name: "filter-store",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useFilterStore;
