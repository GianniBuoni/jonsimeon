// modules
import { useContext, useEffect, useState } from "react";
import Icon from "#react/Icon";

//ui
import Card from "#cards/Card";
import Badge from "#react/Badge";
import Heading from "#react/Heading";

// lib
import { MenuItemsContext } from "@jonsimeon/lib/contexts";
import type { IconBadge } from "@jonsimeon/lib/db";
import { useFilterStore } from "@jonsimeon/lib/stores";

const MenuFilterCard = () => {
  const { filters } = useContext(MenuItemsContext);
  const [shouldRunEffect, setRunEffect] = useState(false);
  const { searchParams, filtersOpen, addParam, rmParam, reset, toggleFilter } =
    useFilterStore();

  useEffect(() => {
    if (shouldRunEffect) {
      const fullParam =
        searchParams.length >= 1
          ? "/work?filter=" + searchParams.join(",")
          : "/work";
      window.location.assign(fullParam);
    }
  }, [shouldRunEffect]);

  const handleClick = (input: string) => {
    if (searchParams.includes(input)) {
      rmParam(input);
    } else {
      addParam(input);
    }
    setRunEffect(true);
  };

  const handleReset = () => {
    reset();
    setRunEffect(true);
  };

  const isActive = (input: string) => {
    return searchParams.includes(input) ? "accent" : "secondary";
  };

  return (
    <div className="collapse collapse-arrow">
      <input
        type="checkbox"
        readOnly
        checked={filtersOpen}
        onClick={() => toggleFilter()}
      ></input>
      <div className="collapse-title">
        <Heading tagName="h3" size="h3" addMargin={false}>
          Filters
        </Heading>
      </div>
      <ul className="collapse-content flex flex-col pb-2 gap-2 cursor-pointer">
        {filters.map((f) => {
          const badgeId = f.icon_badge_id as IconBadge;
          return (
            <Badge
              color={isActive(badgeId.label.toLowerCase())}
              key={badgeId.label}
              onClick={() => handleClick(badgeId.label.toLowerCase())}
            >
              <Icon icon={badgeId.icon} />
              {badgeId.label}
            </Badge>
          );
        })}
        <Badge
          color="secondary"
          title="Remove all filters"
          onClick={() => handleReset()}
        >
          <Icon icon="mdi:close-circle" />
          Clear Filters
        </Badge>
      </ul>
    </div>
  );
};

export default MenuFilterCard;
