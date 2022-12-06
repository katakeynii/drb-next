import { useEffect } from "react"
import '../styles/globals.css'
import '../styles/index.scss'
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    var style = "font-size: 24px;" +
    "background: #67b26f; /* fallback for old browsers */" + 
    "background: -webkit-linear-gradient(to right, #E15563, #7e222b);" +
    "background: linear-gradient(to right, #E15563, #7e222b);" +
    "color: white;" +
    "text-align: center;" +
    "padding: 10px 15px;" +
    "width: 100%;" +
    "border-radius: 20px;";
  var style2 = "border-left: 5px solid #E15563; padding-left: 20px; padding-top: 20px; font-size: 16px;" 
    console.log("%c🚨🚨🚨", "font-size:75px;")
    // var text = "%cLet's talk business🙏. liraz.amir.1982@gmail.com";
    var text = `%c Dalaal ak Jaaam sur Dakar Ruby Brigrade !`
    var text2 = `%cApparremment tu es master Jedi. DRB est une communauté ouvert à tout le monde.
Chaque mois, nous essayons d'avoir une ou plusieurs présentations. 
Nous sommes toujours à la recherche de personnes prêtes à faire une présentation, tenir un atelier ou nous parler de leurs expériences. 
Si vous travaillez sur quelque chose de cool, ou appris quelque chose de nouveau, ou rencontrez un problème quelconque, ou avez juste envie de découvrir, de partager, sachez que vous êtes les bienvenus.
Contactez nous sur : dakar.ruby.brigade@gmail.com. 
Twitter : https://twitter.com/dakar_ruby
LinkedIn : https://www.linkedin.com/company/dakar-ruby-brigrade/
    `
    console.log(text, style);
    console.log(text2, style2);
  }, [])
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-KXY4EJBFZ9"></Script>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KXY4EJBFZ9', {
          page_path: window.location.pathname,
          });
        `,
      }} />
      <Component {...pageProps} />

    </>
    )
}

export default MyApp
