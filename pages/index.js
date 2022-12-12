import {useEffect} from "react"
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
import {SiMicrosoftoutlook, SiGooglecalendar} from "react-icons/si"
import { IoLogoTwitter, IoLogoGoogle } from "react-icons/io5";
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
            <div className="calendars">
              <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20221224T100000Z%2F20221224T130000Z&details=Le%20DRB%20Meetup%20de%20ce%20mois%20de%20D%C3%A9cembre%202022%20sera%20%C3%A0%20Orange%20Digital%20Center%20%C3%A0%20la%20VDN%20%C3%A0%20c%C3%B4t%C3%A9%20de%20l%27%C3%A9cole%20de%20police.%20%0ADate%3A%2024%20Decembre%202022%20%C3%A0%2010h%0ANous%20aurons%20deux%20pr%C3%A9sentations%20et%20un%20panel%20sur%20le%20d%C3%A9veloppment%20mobile%20natif.%0ALes%20pr%C3%A9sentations%C2%A0%0A%E2%80%93%09Ibrahima%20Ciss%20%3A%20Handling%20errors%20as%20if%20your%20life%20depended%20on%20it%0A%E2%80%93%09Mouhamadou%20DER%20%3A%20Quoi%20de%20neuf%20Drupal%20%3F%0ALe%20Panel%20-%3E%20Th%C3%A8me%3A%20Les%20avantages%20du%20d%C3%A9veloppment%20mobile%20natif%0A%E2%80%93%09Rygel%20Louv%0A%E2%80%93%09Ibrahima%20Ciss%0A%E2%80%93%09Souleymane%20Sidibe%0A%E2%80%93%09Segnonna%20Hounsou%0A%0Awww.dakarruby.com&location=Sonatel%20Academy%2C%20Immeuble%20Scal%C3%A8ne%20Mermoz%20lot%20B%2C%20Ecole%20Police%2C%20Rue%20KA%2005%2C%20Dakar%2C%20S%C3%A9n%C3%A9gal&text=DRB%20Meetup%20Decembre%202022%20avec%20Orange%20Digital%20Center"  
              target="_blank" rel="noopener noreferrer" className="add-to-cal google-cal">
                <SiGooglecalendar /> <span>Google Calendar</span>
              </a>
              <a href="https://outlook.live.com/calendar/0/deeplink/compose?body=Le%20DRB%20Meetup%20de%20ce%20mois%20de%20D%C3%A9cembre%202022%20sera%20%C3%A0%20Orange%20Digital%20Center%20%C3%A0%20la%20VDN%20%C3%A0%20c%C3%B4t%C3%A9%20de%20l%27%C3%A9cole%20de%20police.%20%0ADate%3A%2024%20Decembre%202022%20%C3%A0%2010h%0ANous%20aurons%20deux%20pr%C3%A9sentations%20et%20un%20panel%20sur%20le%20d%C3%A9veloppment%20mobile%20natif.%0ALes%20pr%C3%A9sentations%C2%A0%0A%E2%80%93%09Ibrahima%20Ciss%20%3A%20Handling%20errors%20as%20if%20your%20life%20depended%20on%20it%0A%E2%80%93%09Mouhamadou%20DER%20%3A%20Quoi%20de%20neuf%20Drupal%20%3F%0ALe%20Panel%20-%3E%20Th%C3%A8me%3A%20Les%20avantages%20du%20d%C3%A9veloppment%20mobile%20natif%0A%E2%80%93%09Rygel%20Louv%0A%E2%80%93%09Ibrahima%20Ciss%0A%E2%80%93%09Souleymane%20Sidibe%0A%E2%80%93%09Segnonna%20Hounsou%0A%0Awww.dakarruby.com&enddt=2022-12-24T13%3A00%3A00%2B00%3A00&location=Sonatel%20Academy%2C%20Immeuble%20Scal%C3%A8ne%20Mermoz%20lot%20B%2C%20Ecole%20Police%2C%20Rue%20KA%2005%2C%20Dakar%2C%20S%C3%A9n%C3%A9gal&path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&startdt=2022-12-24T10%3A00%3A00%2B00%3A00&subject=DRB%20Meetup%20Decembre%202022%20avec%20Orange%20Digital%20Center" target="_blank" rel="noopener noreferrer" className="add-to-cal outlook-cal">
                <SiMicrosoftoutlook /> <span>Outlook Calendar</span>
              </a>
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
                  speakerCover={derminator}
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
          <div className="participation-link">
            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScQlHqoXVCQ7qjOMH406VZJZtmdeyWB6gaZVBUuNmopjtYiuQ/viewform?usp=sf_link" rel="noreferrer">
              <div  className="participation-title" >Reserve ta place!</div>
              <div>Entrée gratuit</div>
            </a>

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
