import React from 'react';
import './videoItem.css';

const VideoItem = ({ onVideoSelect, video }) => {
  return (
    <div onClick={vid => onVideoSelect(video)} className="item video-item">
      <img
        className="ui image"
        key={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
      ></img>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
