import React from "react";
import { Icon } from "@iconify/react";

import useCarouselStore from "@lib/stores/useCarouselStore";
import useModalStore from "@lib/stores/useModalStore";
import type { CarouselSettings } from "@lib/stores/types";

interface Props {
  store: "carousel" | "modal";
  settings: CarouselSettings;
}

const CarouselControls = ({ store, settings }: Props) => {
  const currentStore =
    store === "carousel" ? useCarouselStore() : useModalStore();
  const { increment, decrement } = currentStore;

  return (
    <div className="w-full h-5 flex justify-between">
      <NavIcon direction="previous" onClick={() => decrement(settings)} />
      <NavIcon direction="forward" onClick={() => increment(settings)} />
    </div>
  );
};

// Nav Icon Component defined here.
// CarousleControls is the only component that consumes this.
const options = {
  forward: { label: "Next", icon: "right" },
  previous: { label: "Previous", icon: "left" },
};

interface NavProps extends React.HTMLAttributes<HTMLElement> {
  direction: keyof typeof options;
}

const NavIcon = ({ direction, ...rest }: NavProps) => {
  const { label, icon } = options[direction];
  return (
    <div
      className="cursor-pointer flex items-center text-accent gap-2"
      {...rest}
    >
      {direction == "forward" && <span>{label}</span>}
      <Icon
        icon={`mdi:arrow-${icon}-circle`}
        className="hover:scale-105 text-3xl"
      />
      {direction == "previous" && <span>{label}</span>}
    </div>
  );
};

export default CarouselControls;
