import React from "react";
import clsx from "clsx";

const bg = {
  accent: "badge-accent",
  primary: "badge-primary",
  secondary: "badge-secondary",
};

interface Props extends React.HTMLAttributes<HTMLLIElement> {
  classes?: string;
  color?: keyof typeof bg;
}

const Badge = ({ classes, children, color = "accent", ...rest }: Props) => {
  const badgeClasses = clsx([
    "badge",
    bg[color],
    "gap-1",
    "shadow-md",
    "hover:scale-105",
    classes,
  ]);

  return (
    <li className={badgeClasses} {...rest}>
      {children}
    </li>
  );
};

export default Badge;
