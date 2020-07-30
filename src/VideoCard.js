import React from "react";
import "./VideoCard.css";
import Avatar from "@material-ui/core/Avatar";

function Video({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="videoCard">
      <img src={image} alt="" />
      <div className="videoCard__info"></div>
      <Avatar alt={channel} src={channelImage} />

      <div className="VideoCard__text">
  <h4>{title}</h4>
  <p>{channel}</p>
  <p>{views }•{ timestamp }
  </p>
      </div>
    </div>
  );
}

export default Video;
