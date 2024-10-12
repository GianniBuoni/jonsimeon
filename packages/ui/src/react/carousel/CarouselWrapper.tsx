import useCarouselStore from "@lib/stores/useCarouselStore";
import type { CarouselSettings } from "@lib/stores/types";

interface Props {
  settings: CarouselSettings;
}

const CarouselWrapper = ({ settings }: Props) => {
  const { page, increment, decrement } = useCarouselStore();
  return (
    <div className="flex gap-2 items-center">
      <button className="btn btn-sm" onClick={() => decrement(settings)}>
        back
      </button>
      Page {page.toString()} of {settings.maxLength.toString()}
      <button className="btn btn-sm" onClick={() => increment(settings)}>
        forward
      </button>
    </div>
  );
};

export default CarouselWrapper;
