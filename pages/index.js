import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import pic from "../public/images/meetuptwo.jpeg";
import Panel from "../components/Panel";
import ciss from "../public/images/iciss.jpeg";
import derminator from "../public/images/derminator.jpeg";

function App() {
  return (
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
              <div className="title">31 Décembre 2022</div>
              <div className="date">à 10H au <span>Orange Digital Center</span></div>
            </div>
            <div className="talks">
              <Talk 
                speakerCover={ciss}
                speakerName="Ibrahima Ciss"
                speakerTwitter="@bionik6"
                title="Handling errors as if your life depends on it"
              />
              <Talk 
                speakerCover={derminator}
                speakerName="Mouhamadou DER"
                title="Quoi de neuf Drupal ?"
                speakerTwitter="@derminator"/>
            </div>
          </div>
        </div>
        <div className="header-overlay"></div>
        <Image className="header-bg" src={pic} />
      </header>
    </div>
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
const Talk = ({speakerCover, speakerName, speakerTwitter, title}) => {
  return (
    <div className="talk">
      <div className="speaker-cover">
        <Image src={speakerCover} />
      </div>

      <div className="talk-details">
        <div className="talk-title"> {title}</div>
        <div className="speaker-name"> {speakerName}</div>
        <div className="speaker-twiter"> {speakerTwitter} </div>
      </div>
    </div>
  );
};

export default App;