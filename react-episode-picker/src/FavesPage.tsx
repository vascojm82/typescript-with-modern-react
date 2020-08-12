import React from "react";
import { Store } from "./Store";
import { IEpisodeProps } from "./interfaces";
import { toggleFavAction } from "./Actions";

let EpisodeList = React.lazy<any>(() => import("./EpisodesList"));

let FavesPage = (): JSX.Element => {
    let { state, dispatch } = React.useContext(Store);
    let props: IEpisodeProps = {
      episodes: state.favorites,
      store: { state, dispatch },
      toggleFavAction: toggleFavAction,
      favorites: state.favorites,
    };

    return(
        <React.Suspense fallback={<div>loading...</div>}>
            <div className="episode-layout">
                <EpisodeList {...props} />
            </div>
        </React.Suspense>
    );
}

export default FavesPage;