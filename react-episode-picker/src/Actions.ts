import { IAction, IEpisode, IState } from "./interfaces";
import axios from "axios";

export let fetchDataAction = async (dispatch: any) => {
  let data = await axios.get(
    "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes"
  );

  return dispatch({
    type: "FETCH_DATA",
    payload: data.data._embedded.episodes,
  });
};

export let toggleFavAction = (state: IState, dispatch: any, episode: IEpisode | any): IAction => {
  let episodeInFav = state.favorites.includes(episode);
  let dispatchObj = {
    type: "ADD_FAV",
    payload: episode,
  };

  if (episodeInFav) {
    let favWithoutEpisode = state.favorites.filter(
      (fav: IEpisode) => fav.id !== episode.id
    );

    console.log("favWithoutEpisode: ", favWithoutEpisode);
    dispatchObj = {
      type: "REMOVE_FAV",
      payload: favWithoutEpisode,
    };
  }

  return dispatch(dispatchObj);
};