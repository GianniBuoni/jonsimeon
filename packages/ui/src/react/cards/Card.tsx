import React from "react";

const bgColor = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  info: "bg-info",
  warning: "bg-warning text-warning-content",
  error: "bg-error",
  neutral: "bg-neutral",
  accent: "bg-accent text-accent-content",
};

interface Props extends React.HTMLAttributes<HTMLElement> {
  color?: keyof typeof bgColor;
  classes?: string;
}

const Card = (
  { color = "neutral", children, classes, ...rest }: Props,
  ref: React.LegacyRef<HTMLElement>,
) => {
  return (
    <article
      className={`card card-compact ${bgColor[color]} grow shadow-hard p-2 md:p-5 ${classes}`}
      {...rest}
      ref={ref}
    >
      {children}
    </article>
  );
};
export default React.forwardRef(Card);
