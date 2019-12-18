import React from "react";
import { Styled } from "./App.styled";
import { compose, branch, renderComponent } from "recompose";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Loading from "src/shared/components/loading";
import Popup from "src/shared/popup";
import Order from "./order";

export interface IProps {
  content: any;
}

const App = (props: IProps) => {
  return (
    <Styled className={`app`}>
      <Switch>
        <Route exact path="/">
          <Order />
        </Route>
      </Switch>
      <Popup />
    </Styled>
  );
};

export default compose<IProps, any>()(App);
