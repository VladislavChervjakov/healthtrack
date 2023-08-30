import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import NavItem from "../../components/nav-item/nav-item.component";

import { NavigationWarpper } from "./navigation.styles";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationWarpper>
        <NavItem to="/dashboard" title="Dashboard" icon="space_dashboard" />
        <NavItem to="/" title="Sleep records" icon="bedtime" />
        <NavItem to="/" title="Body measurments" icon="health_metrics" />
        <NavItem to="/" title="Goals" icon="flag" />
      </NavigationWarpper>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
