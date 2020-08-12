import React from 'react';
import { IEpisode } from "./interfaces";
 
let EpisodesList = (props: any): Array<JSX.Element> => {
    let { episodes, toggleFavAction, favorites, store } = props;
    let { state, dispatch } = store;

    console.log("episodes: ", episodes);

    return (
        episodes.map((episode: IEpisode) => {
          return (
            <section key={episode.id} className="episode-box">
              <img
                src={episode.image.medium}
                alt={`Rick and Mort ${episode.name}`}
              />
              <div>{episode.name}</div>
              <section style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  Session: {episode.season} Number: {episode.number}
                </div>
                <button type="button" onClick={() => toggleFavAction(state, dispatch, episode)}>
                  {favorites.find(
                    (fav: IEpisode) => fav.id === episode.id
                  )
                    ? "Unfav"
                    : "Fav"}
                </button>
              </section>
            </section>
          );
        })
    )
}

export default EpisodesList;