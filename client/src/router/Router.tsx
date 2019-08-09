import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "../modules/home/Home";
import { Item } from "../modules/item/Item";
import { PostCreate } from "../modules/postCreate/PostCreate";
import { Error404 } from "../modules/error404/Error404";

import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import {
  WrapperRouter,
  WrapperApp
} from "../components/wrapper/styled/Wrapper";

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <WrapperApp>
        <Header />
        <WrapperRouter p={["0 0.5rem", "0 0.5rem", "0"]} m={[0, 0, "0 auto"]}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={PostCreate} />
            <Route path="/item/:id" component={Item} />
            <Route component={Error404} />
          </Switch>
        </WrapperRouter>
        <Footer />
      </WrapperApp>
    </BrowserRouter>
  );
};
