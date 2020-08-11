import React, { useContext, useEffect } from "react";
import "regenerator-runtime/runtime.js";
import { Store } from "./Store";
import { IAction, IEpisode } from "./interfaces";
import axios from "axios";
import "./App.css";

let EpisodeList = React.lazy<any>(() => import('./EpisodesList'));

export default function App(): JSX.Element {
  let {state, dispatch} = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  }, []);

  let fetchDataAction = async () => {
    let data = await axios.get("https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes");

    return dispatch({
      type: "FETCH_DATA",
      payload: data.data._embedded.episodes,
    });
  }

  let toggleFavAction = (episode: IEpisode): IAction => {
    let episodeInFav = state.favorites.includes(episode);
    let dispatchObj = {
      type: "ADD_FAV",
      payload: episode,
    };

    if(episodeInFav){
      let favWithoutEpisode = state.favorites.filter((fav: IEpisode) => fav.id !== episode.id);
      console.log("favWithoutEpisode: ", favWithoutEpisode);
      dispatchObj = {
        type: "REMOVE_FAV",
        payload: favWithoutEpisode,
      };
    }

    return dispatch(dispatchObj);
  }

  let props = {
    episodes: state.episodes,
    toggleFavAction: toggleFavAction,
    favorites: state.favorites,
  };

  console.log("state: ", state);

  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick & Morty</h1>
          <p>Pick your favorite episode!!</p>
        </div>

        <div>Favorite(s): {state.favorites.length}</div>
      </header>

      <React.Suspense fallback={<div>loading...</div>}>
        <section className="episode-layout">
          <EpisodeList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
}
