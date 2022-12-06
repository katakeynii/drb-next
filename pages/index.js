import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logoODC from "../public/images/odc-logo.png";
import pic from "../public/images/meetuptwo.jpeg";
import Panel from "../components/Panel";
import ciss from "../public/images/iciss.jpeg";
import derminator from "../public/images/derminator.jpeg";
import hospice from "../public/images/hospice.jpeg"
import rygel from "../public/images/rygel.jpeg"
import sidibe from "../public/images/sidibe.jpeg"

import { IoLogoTwitter } from "react-icons/io5";
function App() {
  return (
    <>
      <Head>
        <title>DRB MEETUP - Senegal Dev Community</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Le dernier meetup DRB de l'année sera ce samedi 24 Décembre 2022 à 10h à Orange Digital Center. Nous aurons deux présentation plus un panel sur les avantages du developpment mobile natif par des panélistes qui sont des Seniors Mobile Engineer reconnu dans la communauté"/>
        <meta property="og:title" content="DRB Meetup à Orange Digital Center ce 24 Decembre 2022" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dakarruby.org" />
      </Head>
      <div className="main-wrapper">
        <header className="main-header">
          <nav className="navigation">
            <div className="logo">
              <h1 className="logo-text">DRB</h1>
              <div className="logo-tagline">Dakar Ruby Brigade</div>
            </div>
          </nav>
          <div className="home-head">
            <Tagline hasPanel={true} />
            <div className="meetup-container">
              <div className="meetup-infos">
                <div className="meetup-badge">Prochain Meetup </div>
                <div className="title">24 Décembre 2022</div>
                <div className="date">
                  à 10H au <span>Orange Digital Center</span>
                </div>
              </div>
              <div className="talks">
                <Talk
                  speakerCover={ciss}
                  speakerName="Ibrahima Ciss"
                  speakerTwitter="@bionik6"
                  tl_profile="https://twitter.com/bionik6"
                  title="Handling errors as if your life depends on it"
                />
                <Talk
                  speakerCover={sidibe}
                  speakerName="Mouhamadou DER"
                  title="Quoi de neuf Drupal ?"
                  tl_profile="https://twitter.com/derkhadim"
                  speakerTwitter="@derkhadim"
                />
              </div>
            </div>
          </div>
          <div className="header-overlay"></div>
          <Image className="header-bg" src={pic} alt="DRB meetup event background" />
          <div className="logo-odc">
            <Image src={logoODC} alt="Orange DigitalCenter" />
          </div>
        </header>
      </div>
    </>
  );
}
const Tagline = ({ hasPanel }) => {
  if (hasPanel) {
    return <Panel />;
  }
  return (
    <div className="tagline">
      <div>
        Dakar Ruby Brigade est une <span>communauté de passionés</span> en
        technologies où on parle de <span>tout</span>
      </div>
    </div>
  );
};
const Talk = ({ speakerCover, speakerName, speakerTwitter, title, tl_profile }) => {
  return (
    <div className="talk">
      <div className="speaker-cover">
        <Image src={speakerCover} priority={true} fill alt={speakerName} />
      </div>

      <div className="talk-details">
        <div className="talk-title"> {title}</div>
        <div className="speaker-name"> {speakerName}</div>
        <a href={tl_profile} target="_blank" className="speaker-twiter" rel="noreferrer"> <IoLogoTwitter /> {speakerTwitter} </a>
      </div>
    </div>
  );
};

export default App;
