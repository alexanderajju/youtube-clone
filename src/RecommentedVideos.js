import React from 'react';
import './RecommentedVideos.css'
import VideoCard from './VideoCard';

function RecommentedVideos() {
    return (
        <div className="recommentedVideos">
            <h2>RecommentedVideos</h2>
            <div className="recommentedVideos__videos">
                <VideoCard image="data:image/jpeg;base64,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"
                title="Android App Development"
                channel="freeCodeCamp.org" 
                views="1.9 M views"
                timestamp="2 months ago"
                channelImage="https://yt3.ggpht.com/a-/AOh14GgwaiCp63JOClbTXswJ4u8x9IXpD_qDn3tt3g=s68-c-k-c0x00ffffff-no-rj-mo"


                />
            </div>
        </div>
    )
}

export default RecommentedVideos
