import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./routes/sign-in/sign-in.component";
import SignUp from "./routes/sign-up/sign-up.component";
import Dashboard from "./routes/dashboard/dashboard.component";
import { useGetUserDetailsQuery } from "./services/auth/authService";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser, setIsFetching } from "./store/user/user.slice";
import PrivateRoute from "./routes/private-route/private-route.component";
import Navigation from "./routes/navigation/navigation.component";
import { getSleeprecords } from "./store/sleeprecords/sleeprecords.actions";
import Sleeprecords from "./routes/sleeprecords/sleeprecords.component";

function App() {
  const { data, isFetching } = useGetUserDetailsQuery("userDetails", {
    pollingInterval: 900000,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsFetching(isFetching));
    if (data) {
      dispatch(setCurrentUser(data));
    }
    dispatch(getSleeprecords());
  }, [data, dispatch, isFetching]);

  return (
    <Routes>
      <Route element={<PrivateRoute isUserLoading={isFetching} />}>
        <Route element={<Navigation />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sleeprecords" element={<Sleeprecords />} />
        </Route>
      </Route>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default App;
