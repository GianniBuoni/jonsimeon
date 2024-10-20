import { useCarouselStore } from "@jonsimeon/lib/stores";
import { useModalStore } from "@jonsimeon/lib/stores";
import clsx from "clsx";

const ModalButton = () => {
  const { deselect } = useModalStore();
  const { reset } = useCarouselStore();

  const handleClick = () => {
    deselect!();
    reset();
  };

  return (
    <button
      title="close"
      aria-label="close modal"
      className={buttonClasses}
      onClick={() => handleClick()}
    >
      ×
    </button>
  );
};

const buttonClasses = clsx([
  "absolute right-0 m-2", // position
  "btn btn-circle text-3xl pb-1", //base
  "scale-75 hover:scale-100 z-30", //interactivity
]);

export default ModalButton;
