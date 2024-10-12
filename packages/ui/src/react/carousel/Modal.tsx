import useCarouselStore from "@lib/stores/useCarouselStore";
import type { IconBadge } from "@lib/db/directus";

interface Props {
  skills: IconBadge[];
}

const Modal = ({ skills }: Props) => {
  const { page } = useCarouselStore();
  return <div>{skills[page].label}</div>;
};

export default Modal;
