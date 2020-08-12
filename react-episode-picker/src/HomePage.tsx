import React, { useContext, useEffect } from "react";
import { IEpisodeProps } from "./interfaces";
import { Store } from "./Store";
import { fetchDataAction, toggleFavAction } from "./Actions";

let EpisodeList = React.lazy<any>(() => import("./EpisodesList"));

let HomePage = () => {
    let { state, dispatch } = useContext(Store);

    useEffect(() => {
      state.episodes.length === 0 && fetchDataAction(dispatch);
    }, []);

    
    let props: IEpisodeProps = {
      episodes: state.episodes,
      store: { state, dispatch },
      toggleFavAction: toggleFavAction,
      favorites: state.favorites,
    };

    return (
      <React.Fragment>
        <React.Suspense fallback={<div>loading...</div>}>
          <section className="episode-layout">
            <EpisodeList {...props} />
          </section>
        </React.Suspense>
      </React.Fragment>
    );
}

export default HomePage;