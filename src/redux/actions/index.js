export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: {
      user: user,
    },
  };
};

export const setToken = (_token) => {
  return {
    type: "SET_TOKEN",
    payload: {
      token: _token,
    },
  };
};

export const setPlaylists = (_playlists) => {
  return {
    type: "SET_PLAYLISTS",
    payload: {
      playlists: _playlists,
    },
  };
};

export const setDiscoverWeekly = (data) => {
  return {
    type: "SET_DISCOVER_WEEKLY",
    payload: {
      discover_weekly: data,
    },
  };
};
