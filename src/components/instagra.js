import React from 'react';

const InstagramCard = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Instagram</h5>
        <iframe
          width="100%"
          height="800"
          src="https://www.instagram.com/accounts/login/"
          title="Instagram"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default InstagramCard;
