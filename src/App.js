import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./Conteiners/Layout/Layout";
import PancakeBuilder from "./Conteiners/PancakeBuilder/PancakeBuilder";
import Checkout from "./components/Checkout/Checkout";
import Orders from  "./components/Orders/Orders";
import Auth from "./components/Auth/Auth";
import Logout from "./components/Logout/Logout"
import "./App.css";

export default () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/builder" />
          </Route>
          <Route path="/builder">
            <PancakeBuilder />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
};