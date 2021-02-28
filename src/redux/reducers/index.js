export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.payload.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.payload.discover_weekly,
      };
    default:
      return state;
  }
};
