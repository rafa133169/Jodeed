import React from 'react';

const YouTubeCard = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">YouTube Video</h5>
        <iframe
          width="100%"
          height="800"
          src="https://www.youtube.com/"
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeCard;
