// modules
import { useContext } from "react";
import { Icon } from "@iconify/react";

//ui
import Card from "#cards/Card";
import Badge from "#react/Badge";
import Heading from "#react/Heading";

// lib
import { MenuItemsContext } from "@jonsimeon/lib/contexts";
import type { IconBadge } from "@jonsimeon/lib/db";

const MenuFilterCard = () => {
  const { filters } = useContext(MenuItemsContext);
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
      <ul className="flex flex-col pb-2 gap-2">
        {filters.map((i) => {
          const badgeId = i.icon_badge_id as IconBadge;
          return (
            <Badge>
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
