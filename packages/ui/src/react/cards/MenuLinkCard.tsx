// modules
import { useContext } from "react";
import { Icon } from "@iconify/react";

//ui
import Heading from "#react/Heading";
import Badge from "#react/Badge";
import Card from "#react/cards/Card";

// lib
import { MenuItemsContext } from "@jonsimeon/lib/contexts";
import type { IconBadge } from "@jonsimeon/lib/db";

const MenuLinkCard = () => {
  const { links } = useContext(MenuItemsContext);
  return (
    <Card color="warning" classes="mt-5">
      <Heading
        tagName="h3"
        size="h3"
        addMargin={false}
        classes="text-warning-content pb-1"
      >
        Links
      </Heading>
      <ul className="flex flex-col pb-1 gap-1">
        {links.map((i) => {
          const badgeId = i.icon_badge_id as IconBadge;
          return (
            <a href={badgeId.href}>
              <Badge>
                <Icon icon={badgeId.icon} />
                <p>{badgeId.label}</p>
              </Badge>
            </a>
          );
        })}
      </ul>
    </Card>
  );
};

export default MenuLinkCard;
