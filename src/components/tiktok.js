import React from 'react';

const TiktokCard = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Tiktok</h5>
        <iframe
          width="100%"
          height="800"
          src="https://www.tiktok.com/login?lang=es&redirect_url=https%3A%2F%2Fwww.tiktok.com%2Fupload%3Flang%3Des"
          title="Tiktok"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default TiktokCard;
