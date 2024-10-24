// modules
import { useContext, useEffect, useState } from "react";
import { Icon } from "@iconify/react";

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
  const { searchParams, addParam, rmParam } = useFilterStore();

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

  return (
    <Card color="info">
      <Heading
        tagName="h3"
        size="h3"
        addMargin={false}
        classes="text-info-content pb-1"
      >
        Filters
      </Heading>
      <ul className="flex flex-col pb-2 gap-2 cursor-pointer">
        {filters.map((f) => {
          const badgeId = f.icon_badge_id as IconBadge;
          return (
            <Badge
              key={badgeId.label}
              onClick={() => handleClick(badgeId.label.toLowerCase())}
            >
              <Icon icon={badgeId.icon} />
              <p>{badgeId.label}</p>
            </Badge>
          );
        })}
      </ul>
    </Card>
  );
};

export default MenuFilterCard;
