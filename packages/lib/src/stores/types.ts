export type CarouselState = {
  // required parameters manage carousel animation state
  page: number;
  offset: number;
  increment: (carouselObject: CarouselSettings) => void;
  decrement: (carouselObject: CarouselSettings) => void;
  reset: () => void;

  // optional parameters manage carousel modal state
  selection?: boolean;
  select?: () => void;
  deselect?: () => void;
};

export type CarouselSettings = {
  maxLength: number;
  offset: number;
};
