import React from "react";
import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLLIElement> {
  icon: string;
  classes?: string;
}

const Badge = ({ icon, classes, children, ...rest }: Props) => {
  const badgeClasses = clsx([
    "badge",
    "badge-accent",
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