import React from "react";
import "./css/SwipeButtons.css";
import { IconButton } from "@material-ui/core";
import { Replay, StarRate } from "@material-ui/icons";
import { Close } from "@material-ui/icons";
import { Favorite } from "@material-ui/icons";
import { FlashOn } from "@material-ui/icons";
function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <Replay fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__left">
        <Close fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarRate fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__right">
        <Favorite fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightening">
        <FlashOn fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
