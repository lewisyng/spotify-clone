import React, { useEffect, useState } from "react";
import "./SongRow.sass";

function SongRow({ track = "test", index }) {
  const [duration, setDuration] = useState(null);

  useEffect(() => {
    let min = Math.floor(track.duration_ms / 1000 / 60);
    let sec = Math.floor((track.duration_ms - min * 60 * 1000) / 1000);

    setDuration(`${min}:${sec}`);
  }, []);

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
      <div className="songRow__added"></div>
      <div className="songRow__time">{duration && duration}</div>
    </div>
  );
}

export default SongRow;
