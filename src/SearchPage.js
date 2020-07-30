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
      <ChannelRow
        image="https://yt3.ggpht.com/a-/AOh14Ghyd7X3-yGlE6I7ylN9ljC4_rHF3Be4X9EvwdfxYqM=s88-c-k-c0xffffffff-no-rj-mo"
        Channel="Mi Trendz"
        verified
        subs="660k"
        noOfVideos={382}
        description="Trend your Passion"
      />
      <hr />
      <VideoRow
        views="1.4M"
        subs="659k"
        description="trend your passion"
        timestamp="59 seceonds ago "
        channel="Mi Trendz"
        image="https://i.ytimg.com/an_webp/dysnKiXUlRU/mqdefault_6s_480x270.webp?du=3000&sqp=CLSki_kF&rs=AOn4CLDierTc4mpe3w2rQRTE7rt_HKPq4Q"
        title
      />
      <VideoRow
        views="1.4M"
        subs="659k"
        description="trend your passion"
        timestamp="59 seceonds ago "
        channel="Mi Trendz"
        image="https://i.ytimg.com/an_webp/v6zEx2DvYWU/mqdefault_6s.webp?du=3000&sqp=CLaPi_kF&rs=AOn4CLCrGqyeYBH8gcTh_wv1ta-5_yB_Bg"
        title
      />
      <VideoRow
        views="1.4M"
        subs="659k"
        description="trend your passion"
        timestamp="59 seceonds ago "
        channel="Mi Trendz"
        image="https://i.ytimg.com/an_webp/vCLq6HrpyJM/mqdefault_6s.webp?du=3000&sqp=CLWRi_kF&rs=AOn4CLCsL_FnK0N5WyZlJ78q4CNKp1aSDg"
        title
      />
    </div>
  );
}

export default SearchPage;
