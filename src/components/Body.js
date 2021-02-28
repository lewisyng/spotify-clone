import React from "react";
import { useSelector } from "react-redux";
import "./Body.sass";
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const state = useSelector((state) => state);
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={state.discover_weekly?.images[0].url} alt="" />
        <div className="body__info__text">
          <strong>PLAYLIST</strong>
          <h2>{state.discover_weekly?.name}</h2>
          <p>{state.discover_weekly?.description}</p>
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
            <p>TIME</p>
          </div>
          <hr/>
          {state.discover_weekly?.tracks.items.map((item, index) => {
            return <SongRow index={index+1} track={item.track} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Body;
