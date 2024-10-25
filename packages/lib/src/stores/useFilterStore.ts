import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type FilterStore = {
  searchParams: string[];
  linksOpen: boolean;
  filtersOpen: boolean;
  addParam: (input: string) => void;
  rmParam: (input: string) => void;
  reset: () => void;
  toggleLinks: () => void;
  toggleFilter: () => void;
};

const useFilterStore = create<FilterStore>()(
  persist(
    (set) => ({
      searchParams: [],
      linksOpen: true,
      filtersOpen: true,
      addParam: (input) =>
        set((store) => ({
          searchParams: [...store.searchParams, input],
        })),
      rmParam: (input) =>
        set((store) => ({
          searchParams: store.searchParams.filter((f) => f !== input),
        })),
      reset: () =>
        set(() => ({
          searchParams: [],
        })),
      toggleLinks: () =>
        set((store) => ({
          linksOpen: !store.linksOpen,
        })),
      toggleFilter: () =>
        set((store) => ({
          filtersOpen: !store.filtersOpen,
        })),
    }),
    {
      name: "filter-store",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useFilterStore;
