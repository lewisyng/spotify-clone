import React from "react";
import "./Sidebar.sass";
import SidebarOption from "./SidebarOption";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicOutlinedIcon from "@material-ui/icons/LibraryMusicOutlined";
import { useSelector } from "react-redux";

function Sidebar() {
  const store = useSelector((state) => state);

  console.log("playlists", store.playlists);

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="spotify"
      />
      <div className="sidebar__nav">
        <SidebarOption title="Start" Icon={<HomeOutlinedIcon />} />
        <SidebarOption title="Suchen" Icon={<SearchIcon />} />
        <SidebarOption title="Bibliothek" Icon={<LibraryMusicOutlinedIcon />} />
      </div>
      <div className="sidebar__playlists">
        <strong>PLAYLISTS</strong>
        <hr />
        {store.playlists &&
          store.playlists.items.map((playlist) => {
            return (
              <SidebarOption
                title={playlist.name}
                Icon={null}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Sidebar;
