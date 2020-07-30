import React from 'react';
import './RecommentedVideos.css'
import VideoCard from './VideoCard';

function RecommentedVideos() {
    return (
        <div className="recommentedVideos">
            <h2>RecommentedVideos</h2>
            <div className="recommentedVideos__videos">
                <VideoCard/>
            </div>
        </div>
    )
}

export default RecommentedVideos
