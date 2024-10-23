// modules
import React, { useEffect } from "react";
import clsx from "clsx";

// lib
import { useAccordionStore } from "@jonsimeon/lib/stores";
import type { AccordionContext } from "@jonsimeon/lib/contexts";

// ui
import Card from "#cards/Card";
import Heading from "#react/Heading";
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
