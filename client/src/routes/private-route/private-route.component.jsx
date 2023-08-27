import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import {
  selectCurrentUser,
  selectUserIsFetching,
} from "../../store/user/user.selector";

const PrivateRoute = ({
  redirectPath = "/sign-in",
  isUserLoading,
  children,
}) => {
  const currentUser = useSelector(selectCurrentUser);
  const fetching = useSelector(selectUserIsFetching);

  console.log(currentUser);
  console.log(fetching);

  if (!currentUser && !fetching) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default PrivateRoute;
