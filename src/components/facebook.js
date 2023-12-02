// FacebookCard.js
import React from 'react';

const FacebookCard = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Facebook Embed</h5>
        <iframe
          width="100%"
          height="800"
          src="https://www.facebook.com/login.php"
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default FacebookCard;
