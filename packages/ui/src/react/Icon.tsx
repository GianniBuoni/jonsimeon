import { icons } from "@iconify-json/mdi";
import { getIconData, iconToSVG, iconToHTML, replaceIDs } from "@iconify/utils";
import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  icon: string;
  size?: string;
}

const Icon = ({ icon, size = "1rem", ...rest }: Props) => {
  const iconName = icon.split("mdi:")[1];

  // Get content for icon
  const iconData = getIconData(icons, iconName);
  if (!iconData) {
    throw new Error(`Icon "${iconName}" is missing`);
  }

  // Use it to render icon
  const renderData = iconToSVG(iconData, {
    height: size,
  });

  // Generate SVG string
  const svg = iconToHTML(replaceIDs(renderData.body), renderData.attributes);

  return (
    <div
      {...rest}
      dangerouslySetInnerHTML={{
        __html: svg,
      }}
    ></div>
  );
};

export default Icon;
