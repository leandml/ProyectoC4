import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../login/login";
import Inicio from "../index/index";

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/login"]} component={Login} />
        <Route exact path={["/"]} component={Inicio} />
        <Route exact path="/index" component={Inicio} />
        <Route
          path={"*"}
          component={() => (
            <h1 style={{ marginTop: 300 }}>
              404 <br /> Pagina no encontrada{" "}
            </h1>
          )}
        />
      </Switch>
    </Router>
  );
}
