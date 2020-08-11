// ALL Interfaces

export interface IState {
  episodes: Array<IEpisode>;
  favorites: Array<any>;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IEpisode {
  airdate: number;
  airstamp: string;
  airtime: string;
  id: number;
  image: { medium: string; original: string };
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  url: string;
}
