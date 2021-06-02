import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Auth, Shop } from "../pages";
import { authRoutes, publickRoutes } from "../routes";
import { TYPE_ROUTER } from "../utils/const";

const AppRouter = () => {
  const isAuth = false;
  return (
    <Switch>
      {isAuth &&
        authRoutes.map(({ path, component }) => {
          return <Route key={path} path={path} component={component} exact />;
        })}
      {publickRoutes.map(({ path, component }) => {
        return <Route key={path} path={path} component={component} exact />;
      })}
      <Route render={() => <h2>Page not found</h2>} />
    </Switch>
  );
};

export default AppRouter;
