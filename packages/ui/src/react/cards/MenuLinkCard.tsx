// modules
import { useContext } from "react";

//ui
import Heading from "#react/Heading";
import Badge from "#react/Badge";
import Card from "#react/cards/Card";
import Icon from "#react/Icon";

// lib
import { MenuItemsContext } from "@jonsimeon/lib/contexts";
import type { IconBadge } from "@jonsimeon/lib/db";
import { useFilterStore } from "@jonsimeon/lib/stores";

const MenuLinkCard = () => {
  const { links } = useContext(MenuItemsContext);
  const { searchParams } = useFilterStore();
  const workLink = links[0].icon_badge_id as IconBadge;
  const restLinks = links.slice(1);

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
        <a
          href={
            searchParams.length >= 1
              ? workLink.href + "?filter=" + searchParams.join(",")
              : workLink.href
          }
        >
          <Badge>
            <Icon icon={workLink.icon} />
            <p>{workLink.label}</p>
          </Badge>
        </a>
        {restLinks.map((i) => {
          const badgeId = i.icon_badge_id as IconBadge;
          return (
            <a href={badgeId.href} key={badgeId.label}>
              <Badge>
                <Icon icon={badgeId.icon} />
                {badgeId.label}
              </Badge>
            </a>
          );
        })}
      </ul>
    </Card>
  );
};

export default MenuLinkCard;
