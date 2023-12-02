import React from 'react';

const TumblrCard = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Tumblr</h5>
        <iframe
          width="100%"
          height="800"
          src="https://www.tumblr.com/register"
          title="Tumblr"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default TumblrCard;
