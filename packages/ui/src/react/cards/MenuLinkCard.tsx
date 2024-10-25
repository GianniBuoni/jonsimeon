// modules
import { useContext } from "react";

//ui
import Heading from "#react/Heading";
import Badge from "#react/Badge";
import Icon from "#react/Icon";

// lib
import { MenuItemsContext } from "@jonsimeon/lib/contexts";
import type { IconBadge } from "@jonsimeon/lib/db";
import { useFilterStore } from "@jonsimeon/lib/stores";

const MenuLinkCard = () => {
  const { links } = useContext(MenuItemsContext);
  const { searchParams, linksOpen, toggleLinks } = useFilterStore();
  const workLink = links[0].icon_badge_id as IconBadge;
  const restLinks = links.slice(1);

  return (
    <div className="collapse collapse-arrow">
      <input
        type="checkbox"
        checked={linksOpen}
        onClick={() => toggleLinks()}
        readOnly
      />
      <div className="collapse-title">
        <Heading tagName="h3" size="h3" addMargin={false}>
          Links
        </Heading>
      </div>
      <ul className="flex flex-col pb-1 gap-1 collapse-content">
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
    </div>
  );
};

export default MenuLinkCard;
