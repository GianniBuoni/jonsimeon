import React from "react";
import { clsx } from "clsx";

const sectionTypes = {
  footer: "bg-accent text-accent-content bg-opacity-90",
  nav: "",
  section: "",
};

interface Props extends React.HTMLAttributes<HTMLElement> {
  tagType?: keyof typeof sectionTypes;
  children: React.ReactNode;
  classes?: string;
  innerClasses?: string;
}

const Section = (
  { tagType = "section", classes, children, innerClasses, ...rest }: Props,
  ref: React.LegacyRef<HTMLElement>,
) => {
  // map tag type with object
  const Tag = tagType;

  // className array that includes any additional classes
  const classNames = clsx(["w-screen", sectionTypes[tagType], classes]);

  const innerDiv = clsx([
    "p-5 lg:p-10 lg:max-w-screen-xl m-auto",
    "relative",
    innerClasses,
  ]);

  return (
    // outer tag is a semantic tag, strings from the sectionTypes object should become classes
    <Tag className={classNames} {...rest} ref={ref}>
      {/*inner div contains content while also setting up shared breakpoints*/}
      <div className={innerDiv}>{children}</div>
    </Tag>
  );
};

export default React.forwardRef(Section);
