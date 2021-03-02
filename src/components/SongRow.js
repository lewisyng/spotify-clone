import React from "react";
import { msConverter } from "../helperfunctions";
import "./SongRow.sass";

function SongRow({ track = "test", added, index }) {
  const diffDates = () => {
    var currentdate = new Date();
    var dateWhenAdded = new Date(`${added.slice(5,7)}/${added.slice(8,10)}/${added.slice(0,4)}`);

    // To calculate the time difference of two dates
    var Difference_In_Time = currentdate.getTime() - dateWhenAdded.getTime();

    // To calculate the no. of days between two dates
    return Math.floor((Difference_In_Time / (1000 * 3600 * 24)));
  };

  return (
    <div className="songRow">
      <div className="songRow__index">{index}</div>
      <div className="songRow__song">
        <img
          className="songRow__song__album"
          src={track.album.images[0].url}
          alt=""
        />
        <div className="songRow__song__data">
          <div className="songRow__song__data__title">{track.name}</div>
          <div className="songRow__song__data__interpret">
            {track.artists.map((artist) => artist.name).join(", ")}
          </div>
        </div>
      </div>
      <div className="songRow__album">{track.album.name}</div>
      <div className="songRow__added">vor {diffDates()} Tag</div>
      <div className="songRow__time">{`${msConverter(track.duration_ms)[1]}:${
        msConverter(track.duration_ms)[2]
      }`}</div>
    </div>
  );
}

export default SongRow;
