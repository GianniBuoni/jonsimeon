export type CarouselPagination = {
  page: number;
  increment: (maxLength: number) => void;
  decrement: (maxLength: number) => void;
};
