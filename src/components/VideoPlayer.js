import React from 'react';

const VideoPlayer = () =>
{
    return (
        <video controls width="250" className="video-player">
            <source src="video-url" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoPlayer;
