import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./AuthService";

// ログインしてたらRoomへ、していなかったらLoginへ
const LoggedInRoute = ({ component: Component, ...otherProps }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(loading);
  if (loading) {
    return <h1>Loadinag...</h1>;
  }
  return (
    <Route
      {...otherProps}
      render={(props) => {
        return user ? (<Component {...props} />) : (<Redirect to="/login" />)
      }}
    />
  );
};

export default LoggedInRoute;