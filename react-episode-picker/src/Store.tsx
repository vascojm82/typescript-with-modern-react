import React, { createContext, useReducer } from "react";
import { IState } from "./interfaces";

let initialState:IState = {
  episodes: [],
  favorites: [],
}

export let Store = createContext<IState | any>(initialState);

let reducer = (state: IState, action): IState => {
    switch (action.type) {
      case "FETCH_DATA":
        return { ...state, episodes: action.payload };
      case "ADD_FAV":
        return { ...state, favorites: [...state.favorites, action.payload] };
      case "REMOVE_FAV":
        return { ...state, favorites: action.payload }
      default:
        return state;
    }
}

export let StoreProvider = ({ children }: JSX.ElementChildrenAttribute): JSX.Element => {
    let [state, dispatch] = useReducer(reducer, initialState);

    return <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>;
}