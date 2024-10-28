import type { IconBadge } from "@jonsimeon/lib/db";
import { useFilterStore } from "@jonsimeon/lib/stores";
import { Badge, Icon } from "@jonsimeon/ui/react";

interface Props {
  link: IconBadge;
}

const WorkButton = ({ link }: Props) => {
  const { searchParams } = useFilterStore();
  return (
    <a
      href={
        searchParams.length >= 1
          ? link.href + "?filter=" + searchParams.join(",")
          : link.href
      }
    >
      <Badge>
        <Icon icon={link.icon} />
        {link.label}
      </Badge>
    </a>
  );
};

export default WorkButton;
