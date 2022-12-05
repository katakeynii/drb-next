import React from "react";
import Head from "next/head";
import Image from "next/image";
import pic from "../public/images/meetuptwo.jpeg";
import bg2 from "../public/images/meetup one.jpeg";
const Live = () => {
  return (
    <div className="main-wrapper">
      <div className="main-content">
        <div className="live-player yt">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mls-5MDzuY4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="header-overlay live"></div>
      <Image className="header-bg" src={bg2} />
    </div>
  );
};

export default Live;
