import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import {
  NavigationWarpper,
  NavLogo,
  MobileMenu,
  MobileMenuButton,
} from "./navigation.styles";
import { ReactComponent as NavigationIcon } from "../../assets/navigationLogo.svg";
import MenuLinks from "../../components/menu-links/menu-links.component";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleCloseHandler = () => {
    setToggleMenu(false);
  };

  const toggleOpenHandler = () => {
    setToggleMenu(true);
  };

  return (
    <Fragment>
      <NavigationWarpper>
        <NavLogo>
          <NavigationIcon />
        </NavLogo>
        <MenuLinks />
      </NavigationWarpper>
      <MobileMenuButton>
        {!toggleMenu && (
          <RiMenu3Line size={27} onClick={toggleOpenHandler} color="#1e1e1e" />
        )}
      </MobileMenuButton>
      <MobileMenu opened={toggleMenu}>
        <NavLogo>
          <NavigationIcon />
        </NavLogo>
        <MobileMenuButton>
          {toggleMenu && (
            <RiCloseLine size={27} onClick={toggleCloseHandler} color="#fff" />
          )}
        </MobileMenuButton>
        <MenuLinks />
      </MobileMenu>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
