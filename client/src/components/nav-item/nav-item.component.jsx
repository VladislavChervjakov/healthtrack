import { NavLinkItem } from "./nav-item.styles";

const NavItem = ({ title, icon, path }) => {
  return (
    <NavLinkItem to={path}>
      <span className="material-symbols-outlined">{icon}</span>
      <div>{title}</div>
    </NavLinkItem>
  );
};

export default NavItem;
