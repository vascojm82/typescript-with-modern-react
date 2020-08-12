import React from "react";
import ReactDOM from "react-dom";
import { Router, RouteComponentProps } from "@reach/router";
import App from "./App";
import HomePage from "./HomePage";
import FavesPage from "./FavesPage";
import { StoreProvider } from "./Store";

let RouterPage = (props: {pageComponent: JSX.Element} & RouteComponentProps) => props.pageComponent;

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path="/">
        <RouterPage pageComponent={<HomePage />} path="/" />
        <RouterPage pageComponent={<FavesPage />} path="/faves" />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById("app-root")
);