import { Fragment } from "react";
import NavItem from "../nav-item/nav-item.component";

const MenuLinks = () => {
  return (
    <Fragment>
      <NavItem path="/dashboard" title="Dashboard" icon="space_dashboard" />
      <NavItem path="/sleeprecords" title="Sleep records" icon="bedtime" />
      <NavItem to="/" title="Body measurments" icon="health_metrics" />
      <NavItem to="/" title="Goals" icon="flag" />
    </Fragment>
  );
};

export default MenuLinks;
