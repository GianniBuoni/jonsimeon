import { create } from "zustand";
import type { CarouselState } from "@lib/stores/types";

const useModalStore = create<CarouselState>((set) => ({
  page: 0,
  offset: 300,
  selection: false,
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
  select: () =>
    set(() => ({
      selection: true,
    })),
  deselect: () =>
    set(() => ({
      selection: false,
    })),
  reset: () =>
    set(() => ({
      page: 0,
    })),
}));

export default useModalStore;
