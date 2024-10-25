// ui
import Heading from "#react/Heading";
import Badge from "#react/Badge";
import Icon from "#react/Icon";

// lib
import type { IconBadge, ProjectsBadges } from "@jonsimeon/lib/db";
import { useContext } from "react";
import { ProjectContext } from "@jonsimeon/lib/contexts";
import { useModalStore } from "@jonsimeon/lib/stores";

const ArrayOfLinks = () => {
  const { projects } = useContext(ProjectContext);
  const { page } = useModalStore();
  const exLinks = projects[page].links as ProjectsBadges[];
  const links = exLinks.map((l) => l.icon_badge_id) as IconBadge[];

  return (
    <div>
      <Heading
        tagName="h3"
        size="h3"
        addMargin={false}
        classes="mb-2 tracking-wide"
      >
        Related Link(s)
      </Heading>
      <div className="flex flex-wrap gap-2">
        {links.map((link) => (
          <a href={link.href} key={link.label}>
            <Badge>
              <Icon icon={link.icon} />
              {link.label}
            </Badge>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ArrayOfLinks;
