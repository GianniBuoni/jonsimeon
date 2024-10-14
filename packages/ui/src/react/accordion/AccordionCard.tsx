// modules
import React, { useEffect } from "react";
import clsx from "clsx";

// lib
import useAccordionStore from "@lib/stores/useAccordionStore";
import type { AccordionContext } from "@lib/contexts/AccordionContext";

// ui
import Card from "@ui/react/Card";
import Heading from "@ui/react/Heading";
import Markdown from "react-markdown";

interface Props {
  item: AccordionContext;
  children?: React.ReactNode;
}

const AccordionCard = ({ item, children }: Props) => {
  const { page, select } = useAccordionStore();
  const { index, title, subtitle, body } = item;

  useEffect(() => {
    select(0);
  }, []);
  const isActive = page == index;
  const activeClass = clsx([isActive ? "primary" : "neutral"]) as
    | "primary"
    | "neutral";

  return (
    <Card
      color={activeClass}
      classes="collapse collapse-arrow"
      onClick={() => select(index)}
    >
      <input
        type="radio"
        name="exp-accordian"
        readOnly
        checked={isActive}
        onClick={() => select}
      />

      <div className="collapse-title">
        <Heading
          tagName="h3"
          size="h2"
          addMargin={false}
          classes={`text-accent tracking-wide`}
        >
          <Markdown>{title}</Markdown>
        </Heading>
        <small>
          <Markdown>{subtitle}</Markdown>
        </small>
      </div>
      <div className="collapse-content flex flex-col gap-5">
        <Markdown>{body}</Markdown>
        {children}
      </div>
    </Card>
  );
};

export default AccordionCard;
