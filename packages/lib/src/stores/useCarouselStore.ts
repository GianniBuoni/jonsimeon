import { create } from "zustand";
import type { CarouselPagination } from "@lib/stores/types";

const useCarouselStore = create<CarouselPagination>((set) => ({
  page: 0,
  increment: (maxLength) =>
    set((store) => ({
      page: store.page == maxLength ? 0 : store.page + 1,
    })),
  decrement: (maxLength) =>
    set((store) => ({
      page: store.page == 0 ? maxLength : store.page - 1,
    })),
}));

export default useCarouselStore;
