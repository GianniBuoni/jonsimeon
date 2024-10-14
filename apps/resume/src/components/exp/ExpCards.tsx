import { useContext } from "react";

// lib
import { AccordionContext } from "@lib/contexts/AccordionContext";
import type { Experience } from "@lib/db/schemas/experience";

// ui
import AccordionCard from "@ui/react/accordion/AccordionCard";

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

  return items.map((i) => <AccordionCard item={i}></AccordionCard>);
};

export default Accordion;
