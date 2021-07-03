
export const Key = "142fbc981689d9f074c4508d50aef3fc";

export interface MovieData{
    adult: boolean;
    backdrop_path: string;
    genre_ids?: number;
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface TopSeriesData{
    backdrop_path: null;
    first_air_date: string;
    genre_ids?: number;
    id: number;
    name: string;
    origin_country?: string;
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
}

export type State ={
    addToWatchlist: (movie:{}) => void,
    addToWatched: (movie:{}) => void,

}
/*export default axios.create({
    baseURL:'https://api.themoviedb.org/3',
    params: {
        q: '',
        api_key: Key
    }
})*/
