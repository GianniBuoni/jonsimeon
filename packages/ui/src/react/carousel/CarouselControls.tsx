import React from "react";

import { useCarouselStore } from "@jonsimeon/lib/stores";
import { useModalStore } from "@jonsimeon/lib/stores";
import type { CarouselSettings } from "@jonsimeon/lib/stores";

import Icon from "#react/Icon";

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
        size="1.875rem"
        className="hover:scale-105"
      />
      {direction == "previous" && <span>{label}</span>}
    </div>
  );
};

export default CarouselControls;
