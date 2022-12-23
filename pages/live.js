import React from "react";
import Head from "next/head";
import Image from "next/image";
import pic from "../public/images/meetuptwo.jpeg";
import bg2 from "../public/images/meetup one.jpeg";
const Live = () => {
  return (
    <>
      <Head>
        <title>DRB MEETUP - Senegal Dev Community</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Le dernier meetup DRB de l'année sera ce samedi 24 Décembre 2022 à 10h à Orange Digital Center. Nous aurons deux présentation plus un panel sur les avantages du developpment mobile natif par des panélistes qui sont des Seniors Mobile Engineer reconnu dans la communauté"
        />
        <meta
          property="og:title"
          content="DRB Meetup à Orange Digital Center ce 24 Decembre 2022"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dakarruby.org" />
      </Head>
      <div className="main-wrapper">
        <div className="main-content">
          <div className="live-player yt">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/5jry_hMHAws"
              title="DRB MEETUP : 24 Decembre 2022 à Orange Digital Center"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="header-overlay live"></div>
        <Image className="header-bg" src={bg2} />
      </div>
    </>
  );
};

export default Live;
