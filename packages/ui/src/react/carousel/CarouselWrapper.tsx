import useCarouselStore from "@lib/stores/useCarouselStore";

interface Props {
  maxLength: number;
}

const CarouselWrapper = ({ maxLength }: Props) => {
  const { page, increment, decrement } = useCarouselStore();
  return (
    <div className="flex gap-2 items-center">
      <button className="btn btn-sm" onClick={() => decrement(maxLength)}>
        back
      </button>
      Page {page.toString()} of {maxLength.toString()}
      <button className="btn btn-sm" onClick={() => increment(maxLength)}>
        forward
      </button>
    </div>
  );
};

export default CarouselWrapper;
