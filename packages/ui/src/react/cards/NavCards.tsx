import Logo from "#react/Logo";
import MenuFilterCard from "#react/cards/MenuFilterCard";
import MenuLinkCard from "#react/cards/MenuLinkCard";

// lib
import { MenuItemsContext } from "@jonsimeon/lib/contexts";
import type { MainBadges } from "@jonsimeon/lib/db";

interface Props {
  links: MainBadges[];
  filters: MainBadges[];
}

const NavCards = ({ links, filters }: Props) => {
  return (
    <MenuItemsContext.Provider value={{ links, filters }}>
      <div className="flex flex-col gap-4 sticky top-16">
        <Logo />
        <MenuLinkCard />
        <MenuFilterCard />
      </div>
    </MenuItemsContext.Provider>
  );
};

export default NavCards;
