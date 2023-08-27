import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <Link to="dashboard">Dashboard</Link>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
