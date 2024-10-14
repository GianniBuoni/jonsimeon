// lib
import { AccordionContext } from "@lib/contexts/AccordionContext";
import type { Experience, ExpsIconBadges } from "@lib/db/schemas/experience";

// ui
import { Icon } from "@iconify/react";
import AccordionCard from "@ui/react/accordion/AccordionCard";
import Badge from "@ui/react/Badge";
import type { IconBadge } from "@lib/db/directus";

interface Props {
  exps: Experience[];
}

const Accordion = ({ exps }: Props) => {
  const items = exps.map((e, i) => {
    const endYear = e.end_year ? e.end_year?.toString() : "current";
    const years = e.start_year.toString() + " - " + endYear;
    const subtitle = "_" + e.position + "_" + "\n\n" + years;
    return {
      title: e.title,
      subtitle: subtitle,
      body: e.body,
      index: i,
    } as AccordionContext;
  });

  return items.map((i) => (
    <AccordionCard item={i} key={`exp-${i.index}`}>
      <div className="flex flex-wrap gap-2">
        {exps[i.index].skills.map((skill) => {
          const expsBadges = skill as ExpsIconBadges;
          const iconBadge = expsBadges.icon_badge_id as IconBadge;
          return (
            <Badge
              key={`${i.index}-${iconBadge.label}`}
              title={iconBadge.description}
              classes="cursor-zoom-in"
            >
              <Icon icon={iconBadge.icon}></Icon>
              {iconBadge.label}
            </Badge>
          );
        })}
      </div>
    </AccordionCard>
  ));
};

export default Accordion;
