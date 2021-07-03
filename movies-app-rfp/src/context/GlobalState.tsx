import React,{createContext, useReducer, useEffect} from "react";
import { AppReducer } from "./AppReducer";
import { State } from "../config/apiCall";


const initialState:any= {
    watchlist: [],
    watched:[]

};

export const GlobalContext = createContext(initialState);

//provider

export const GlobalProvider = (props:any) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
  
    useEffect(() => {
      localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
      localStorage.setItem("watched", JSON.stringify(state.watched));
    }, [state]);
  
    // actions
    const addToWatchlist = (movie:State) => {
      dispatch({ type: "Watchlist", payload: movie });
    };
  
  
    const addToWatched = (movie:State) => {
      dispatch({ type: "Watched", payload: movie});
    };
  
  
    return (
      <GlobalContext.Provider
        value={{
          watchlist: state.watchlist,
          watched: state.watched,
          addToWatchlist, 
          addToWatched,
        }}
      >
        {props.children}
      </GlobalContext.Provider>
    );
  };