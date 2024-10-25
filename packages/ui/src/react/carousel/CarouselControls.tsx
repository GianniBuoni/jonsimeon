import React from "react";

import { useCarouselStore } from "@jonsimeon/lib/stores";
import { useModalStore } from "@jonsimeon/lib/stores";
import type { CarouselSettings } from "@jonsimeon/lib/stores";

import Icon from "#react/Icon";

interface Props {
  store: "carousel" | "modal";
  settings: CarouselSettings;
  textVisisble?: boolean;
  classes?: string;
}

const CarouselControls = ({
  store,
  textVisisble = true,
  settings,
  classes,
}: Props) => {
  const currentStore =
    store === "carousel" ? useCarouselStore() : useModalStore();
  const { increment, decrement } = currentStore;

  return (
    <div className={`w-full h-5 flex justify-between ${classes}`}>
      <div
        className="cursor-pointer flex items-center text-accent gap-2 z-20"
        onClick={() => decrement(settings)}
      >
        <Icon
          icon={`mdi:arrow-left-circle`}
          size="1.875rem"
          className="hover:scale-105"
        />
        {textVisisble && <span>Previous</span>}
      </div>
      <div
        className="cursor-pointer flex items-center text-accent gap-2 z-20"
        onClick={() => increment(settings)}
      >
        {textVisisble && <span>Next</span>}
        <Icon
          icon={`mdi:arrow-right-circle`}
          size="1.875rem"
          className="hover:scale-105"
        />
      </div>
    </div>
  );
};

export default CarouselControls;
