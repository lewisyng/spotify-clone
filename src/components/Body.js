import React from "react";
import { useSelector } from "react-redux";
import "./Body.sass";
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { accumulateAllSongDurations, msConverter } from "../helperfunctions";

function Body() {
  const state = useSelector((state) => state);

  return (
    <div className="body">
      <Header />

      <div className="body__info">
        <img src={state.discover_weekly?.images[0].url} alt="" />
        <div className="body__info__text">
          <h2>PLAYLIST</h2>
          <h4>{state.discover_weekly?.name}</h4>
          <p>{state.discover_weekly?.description}</p>
          <div className="body__info__text__data">
            <strong>Spotify</strong> •{" "}
            {state.discover_weekly?.tracks.items.length} Songs,{" "}
            {`${msConverter(accumulateAllSongDurations(state))[0]} Std. ${
              msConverter(accumulateAllSongDurations(state))[1]
            } Min.`}
          </div>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__songs__icons">
          <PlayCircleFilledIcon className="body__songs__icons__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        <div className="body__songs__container">
          <div className="body__songs__container__header">
            <p>#</p>
            <p>TITEL</p>
            <p>ALBUM</p>
            <p>HINZUGEFÜGT AM</p>
            <p>
              <AccessTimeIcon fontSize="small" />
            </p>
          </div>
          <hr />
          {state.discover_weekly?.tracks.items.map((item, index) => {
            return <SongRow index={index + 1} added={item.added_at} track={item.track} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Body;
