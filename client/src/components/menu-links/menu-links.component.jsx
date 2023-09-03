import { Fragment } from "react";
import NavItem from "../nav-item/nav-item.component";

const MenuLinks = () => {
  return (
    <Fragment>
      <NavItem to="/dashboard" title="Dashboard" icon="space_dashboard" />
      <NavItem to="/" title="Sleep records" icon="bedtime" />
      <NavItem to="/" title="Body measurments" icon="health_metrics" />
      <NavItem to="/" title="Goals" icon="flag" />
    </Fragment>
  );
};

export default MenuLinks;
