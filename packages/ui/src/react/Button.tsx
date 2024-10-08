import * as React from "react";

export const buttonColors = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  neutral: "btn-neutral",
  accent: "btn-accent",
};

const hoverColors = {
  neutral: "hover:btn-neutral",
  primary: "hover:btn-primary",
  secondary: "hover:btn-secondary",
  accent: "hover:btn-accent",
};

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  color?: keyof typeof buttonColors;
  hover?: keyof typeof hoverColors;
  classes?: string;
  children: React.ReactNode;
}

const Button = (
  { color = "neutral", hover = "accent", classes, children, ...rest }: Props,
  ref: React.LegacyRef<HTMLButtonElement>,
) => {
  const classList = [
    "btn btn-sm rounded",
    buttonColors[color],
    hoverColors[hover],
    classes,
  ];
  return (
    <button className={classList.join(" ")} {...rest} ref={ref}>
      {children}
    </button>
  );
};

export default React.forwardRef(Button);
