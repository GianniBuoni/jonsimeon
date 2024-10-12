import usePageStore from "@lib/stores/usePageStore";
const CarouselWrapper = () => {
  const maxLength = 9;
  const { page, increment, decrement } = usePageStore();
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
