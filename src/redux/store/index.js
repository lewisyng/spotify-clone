import { createStore } from "redux";
import { reducer } from "../reducers/index.js";

const initialState = {
  user: null,
  playlists: null,
  discover_weekly: null,
  playing: false,
  item: null,
  // token:
  //   "BQA6zLyV_eYrKqgJVs81HIkutRWYR3esBAh0ikz6Fc1gm-UlLrJD7ageXX8MUuKA77MmrsWy9fT2rJv0HgqYXcHsk8OjH8xVkeiIJuubGkqXe3gck19g7EwmutRkeI_40eRNCoCh6dLnGWEwAiZPowGNAICLeBLPfw",
};
export const store = createStore(reducer, initialState);
