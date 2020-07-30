import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow image="https://yt3.ggpht.com/a-/AOh14Ghyd7X3-yGlE6I7ylN9ljC4_rHF3Be4X9EvwdfxYqM=s88-c-k-c0xffffffff-no-rj-mo"
       Channel="Mi Trendz"
        verified
         subs="660k"
          noOfVideos={382}
           description="Trend your Passion"
            />
            <hr/>
            <VideoRow
            views="1.4M"
            subs="659k"
            description ="trend your passion"
            timestamp="59 seceonds ago "
            channel="Mi Trendz"
            image="https://yt3.ggpht.com/a-/AOh14Ghyd7X3-yGlE6I7ylN9ljC4_rHF3Be4X9EvwdfxYqM=s88-c-k-c0xffffffff-no-rj-mo"
            title
            />
    </div>
  );
}

export default SearchPage;
