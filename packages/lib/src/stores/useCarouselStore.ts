import { create } from "zustand";
import type { CarouselState } from "@lib/stores/types";

const useCarouselStore = create<CarouselState>((set) => ({
  page: 0,
  offset: 300,
  increment: ({ maxLength, offset }) =>
    set((store) => ({
      page: store.page == maxLength ? 0 : store.page + 1,
      offset: -offset,
    })),
  decrement: ({ maxLength, offset }) =>
    set((store) => ({
      page: store.page == 0 ? maxLength : store.page - 1,
      offset: offset,
    })),
  reset: () =>
    set(() => ({
      page: 0,
    })),
}));

export default useCarouselStore;
