import React from "react";
import "./Footer.sass";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img src="https://upload.wikimedia.org/wikipedia/en/2/2e/Usher-yeah.jpg" alt="" />
        <div className="footer__left__songInfo">
          <div className="footer__left__songInfo__title">Yeah</div>
          <div className="footer__left__songInfo__interpret">Usher</div>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__center__icon" />
        <SkipPreviousIcon className="footer__center__icon" />
        <PlayCircleOutlineIcon className="footer__center__icon__play" fontSize="large" />
        <SkipNextIcon className="footer__center__icon" />
        <RepeatIcon className="footer__center__icon" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
