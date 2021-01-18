import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { AuthProvider } from "./pages/AuthService";
import Signup from "./pages/Signup";
import Room from "./pages/Room";
import Login from "./pages/Login";

import LoggedInRoute from "./pages/LoggedInRoute";



const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <LoggedInRoute exact path="/" component={Room} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;

