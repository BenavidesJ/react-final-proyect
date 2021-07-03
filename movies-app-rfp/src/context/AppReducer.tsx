

export const AppReducer = (state:any, action:any) => {
    switch (action.type) {
      case "Watchlist":
        return {
          ...state,
          watchlist: [action.payload, ...state.watchlist],
        };
      case "Watched":
        return {
          ...state,
          watched: [action.payload, ...state.watched],
        };
      default:
        return state;
    }
  };