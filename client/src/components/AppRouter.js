import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { authRoutes, publickRoutes } from "../routes";
import { TYPE_ROUTER } from "../utils/const";
import { Context } from "../index";
import { observable } from "mobx";

const AppRouter = () => {
  const { user, device } = useContext(Context);

  return (
    <Switch>
      {user.isAuth &&
        authRoutes.map(({ path, component }) => {
          return <Route key={path} path={path} component={component} exact />;
        })}
      {publickRoutes.map(({ path, component }) => {
        return <Route key={path} path={path} component={component} exact />;
      })}
      {/* <Route render={() => <h2>Page not found</h2>} /> */}
      <Redirect to={TYPE_ROUTER.SHOP_ROUTER} />
    </Switch>
  );
};

export default AppRouter;
