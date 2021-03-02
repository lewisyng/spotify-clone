export const msConverter = (duration) => {
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  let seconds = Math.floor((duration / 1000) % 60)

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return [hours, minutes, seconds];
};

export const accumulateAllSongDurations = (state) => {
  return state.discover_weekly?.tracks.items.reduce((x, y) => {
    return x + y.track.duration_ms;
  }, 0);
};
