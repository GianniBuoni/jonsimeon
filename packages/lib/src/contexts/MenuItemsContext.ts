import type { MainBadges } from "#db/index";
import { createContext } from "react";

export type MenuItemsContext = {
  links: MainBadges[];
  filters: MainBadges[];
};

export const MenuItemsContext = createContext({} as MenuItemsContext);
