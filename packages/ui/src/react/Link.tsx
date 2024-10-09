import React from "react";
import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

const classNammes = clsx([
  "font-bold",
  "text-accent",
  "transition-opacity",
  "hover:underline",
  "decoration-accent",
  "decoration-2",
  "underline-offset-2",
]);

const Link = ({ href, children }: Props) => {
  return (
    <a className={classNammes} href={href}>
      {children}
    </a>
  );
};

export default Link;
