import React, { useContext, useEffect } from "react";
import "regenerator-runtime/runtime.js";
import { Link } from "@reach/router";
import { Store } from "./Store";
import "./App.css";

export default function App(props:any): JSX.Element {
  let { state } = useContext(Store);
  console.log("props.children: ", props.children);
  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick & Morty</h1>
          <p>Pick your favorite episode!!</p>
        </div>

        <div>
          <Link to="/">Home</Link>
          <Link to="/faves">Favorite(s): {state.favorites.length}</Link>
        </div>
      </header>

      {props.children}
    </React.Fragment>
  );
}
