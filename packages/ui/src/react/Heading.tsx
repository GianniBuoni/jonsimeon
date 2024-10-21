import React from "react";

const tagSizes = {
  h1: "text-3xl md:text-5xl",
  h2: "text-2xl md:text-3xl",
  h3: "text-xl",
};

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  tagName: keyof typeof tagSizes;
  size: keyof typeof tagSizes;
  classes?: string;
  addMargin?: boolean;
  children: React.ReactNode;
}

const Heading = (
  { tagName, size, classes, addMargin = true, children, ...rest }: Props,
  ref: React.LegacyRef<HTMLHeadingElement>,
) => {
  const Tag = tagName;
  return (
    <Tag
      className={`font-display ${tagSizes[size]} ${addMargin ? "mb-8" : "mb-1"} ${classes}`}
      {...rest}
      ref={ref}
    >
      {children}
    </Tag>
  );
};

export default React.forwardRef(Heading);
