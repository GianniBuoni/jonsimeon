// ui
import { Icon } from "@iconify/react/dist/iconify.js";
import Heading from "@ui/react/Heading";
import Badge from "@ui/react/Badge";

// lib
import type { IconBadge } from "@lib/db/directus";

interface Props {
  links: IconBadge[];
}

const ArrayOfLinks = ({ links }: Props) => {
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
