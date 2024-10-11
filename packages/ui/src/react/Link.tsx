import React from "react";
import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  classes?: string;
}

const Link = ({ href, children, classes, ...rest }: Props) => {
  const classNammes = clsx([
    "font-bold",
    "text-accent",
    "transition-opacity",
    "hover:underline",
    "decoration-accent",
    "decoration-2",
    "underline-offset-2",
    classes,
  ]);
  return (
    <a className={classNammes} href={href} {...rest}>
      {children}
    </a>
  );
};

export default Link;
