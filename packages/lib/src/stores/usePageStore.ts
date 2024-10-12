import { create } from "zustand";

interface CarouselPagination {
  page: number;
  increment: (maxLength: number) => void;
  decrement: (maxLength: number) => void;
}

const useProjectStore = create<CarouselPagination>((set) => ({
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

export default useProjectStore;
