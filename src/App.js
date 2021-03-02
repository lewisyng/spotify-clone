import { useEffect, useState } from "react";
import "./App.sass";
import Login from "./components/auth/login/Login";
import Player from "./components/Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { setDiscoverWeekly, setPlaylists, setToken, setUser } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";

const spotify = new SpotifyWebApi();

function App() {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    let hash = getTokenFromUrl();
    console.log("hash", hash)
    window.location.hash = "";

    let _token = hash.access_token;

    if (_token) {
      dispatch(setToken(_token));

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch(setUser(user));
      });
      
      spotify.getUserPlaylists().then(playlists => {
        dispatch(setPlaylists(playlists))
      })

      spotify.getPlaylist("37i9dQZEVXcNOcQsuyYuI6").then(response => {
        console.log("res", response)
        dispatch(setDiscoverWeekly(response))
      })
    }
  }, []);

  console.log("user", store.user);
  console.log("token", store.token);

  return (
    <div className="app">
      {store.token ? <Player /> : <Login />}
    </div>
  );
}

export default App;
