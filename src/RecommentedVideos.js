import React from "react";
import "./RecommentedVideos.css";
import VideoCard from "./VideoCard";

function RecommentedVideos() {
  return (
    <div className="recommentedVideos">
      <h2>RecommentedVideos</h2>
      <div className="recommentedVideos__videos">
        <VideoCard
          image="https://i.ytimg.com/vi/ptLt82yTZUE/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCIAr9wLSyFkdegC90fFLYldqpbyQ"
          title="10 Years Of Nivinism | Special Mashup | July 16 | Nivin Pauly"
          channel="Nivin Pauly Fans Club"
          views=" 1.5K views"
          timestamp="1 month ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14Gj-m7eHNc6uiHSDDDP3fMasWd8T68wa8Rjizw=s68-c-k-c0x00ffffff-no-rj-mo"
        />

        <VideoCard
          image="https://i.ytimg.com/an_webp/cRnFli9-kHk/mqdefault_6s.webp?du=3000&sqp=CKLLivkF&rs=AOn4CLAUvuejYKbWkfgVUZxgYus7OAmBeA"
          title="#Neram | Nazriya Nazim reveals his love to Nivin Pauly | Mazhavil Manorama "
          channel="
          
          Mazhavil Manorama
         
         
                "
          views=" 84K views"
          timestamp=" 1 year ago"
          channelImage="https://yt3.ggpht.com/a/AATXAJxgap6ZGre1eGaGaWQK20RkmH64Zx53-B_t_ZI-qQ=s48-c-k-c0xffffffff-no-rj-mo"
        />

        <VideoCard
          image="https://i.ytimg.com/an_webp/NO1Ohm_-LjM/mqdefault_6s.webp?du=3000&sqp=CIufivkF&rs=AOn4CLDcLGJ7vDpHFqL1oHIT5ep1E8PtAw"
          title="വീട്ടിലിരുന്നു മടി പിടിച്ചോ മക്കളേ !! "
          channel="
                Albin Joshy
                "
          views="22,803 views"
          timestamp="30-Jul-2020"
          channelImage="https://yt3.ggpht.com/a/AATXAJxgap6ZGre1eGaGaWQK20RkmH64Zx53-B_t_ZI-qQ=s48-c-k-c0xffffffff-no-rj-mo"
        />
        <VideoCard
          image="https://i.ytimg.com/an_webp/PHJ9zw5uGxg/mqdefault_6s.webp?du=3000&sqp=CIitivkF&rs=AOn4CLADMDnc8hdpZ8nhYbV_i298MMn-BQ"
          title="Android App Development"
          channel="Moon Lite Media"
          views="5.4 lakh views"
          timestamp="3 months ago"
          channelImage="https://yt3.ggpht.com/a-/AOh14GiGG5WruMmiEy2mCr-RQfe9uCAN8D8aAdescA=s68-c-k-c0x00ffffff-no-rj-mo"
        />

        <VideoCard
          image="https://i.ytimg.com/an_webp/NO1Ohm_-LjM/mqdefault_6s.webp?du=3000&sqp=CIufivkF&rs=AOn4CLDcLGJ7vDpHFqL1oHIT5ep1E8PtAw"
          title="വീട്ടിലിരുന്നു മടി പിടിച്ചോ മക്കളേ !! "
          channel="
                Albin Joshy
                "
          views="22,803 views"
          timestamp="30-Jul-2020"
          channelImage="https://yt3.ggpht.com/a/AATXAJxgap6ZGre1eGaGaWQK20RkmH64Zx53-B_t_ZI-qQ=s48-c-k-c0xffffffff-no-rj-mo"
        />
      </div>
    </div>
  );
}

export default RecommentedVideos;
