import React from 'react';

const TwitterCard = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Twitter</h5>
        <iframe
          width="100%"
          height="800"
          src="https://twitter.com/"
          title="Twitter"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default TwitterCard;
