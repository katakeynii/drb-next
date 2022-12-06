import React from 'react';
import ciss from "../public/images/iciss.jpeg"
import hospice from "../public/images/hospice.jpeg"
import rygel from "../public/images/rygel.jpeg"
import sidibe from "../public/images/sidibe.jpeg"
import Image from 'next/image'
import { IoLogoTwitter, IoLogoLinkedin } from "react-icons/io5";

const Panel = () => {
    return (
        <div className="panel-container">
            <div className="panel-badge">Panel </div>
            <div className="subject">
                {/* <div>Sujet</div> */}
                <h1>Les avantages du développement mobile natif</h1>
            </div>
            <div>
                <div className="paneliste-head" > Nos Panélistes : </div>
                <div className="panelistes">

                    <Speaker name="Segnonna Hounsou" 
                        cover={hospice}
                        role="Senior Mobile Engineer"
                        company="Xapo"
                        ln="https://www.linkedin.com/in/segnonnahounsou/"
                        twitter="https://twitter.com/hoshouns?lang=fr"
                        /> 
                    <Speaker name="Rygel Louv" 
                        cover={rygel}
                        role="Senior Mobile Engineer"
                        company="Sendwave"
                        ln="https://www.linkedin.com/in/rygellouv/"
                        twitter="https://twitter.com/Rygellouv?lang=fr"
                        />
                    <Speaker name="Ibrahima Ciss" 
                        cover={ciss}
                        role="Senior Mobile Engineer"
                        company="Indépendant"
                        ln="https://www.linkedin.com/in/bionik6/"
                        twitter="https://twitter.com/bionik6"
                        />
                    <Speaker name="Souleymane Sidibe"
                        cover={sidibe}
                        role="Senior Mobile Engineer"
                        company="Atos Senegal"
                        ln="https://www.linkedin.com/in/souleymane-sidibe-277a05a1/"
                        twitter="https://twitter.com/soulesidibe"
                        />
                </div>
            </div>
        </div>
    );
};

const Speaker = ({name, cover, role, company, twitter, ln}) => (
    <div className="paneliste" >
        <div className="paneliste-cover">
            <Image src={cover} alt={`Paneliste ${name}`} fill />
        </div>
        <div className="paneliste-name">{name}</div>
        {/* <div className="paneliste-role">{role} </div> */}
        <div className="paneliste-company">{company}</div>
        <div className="paneliste-social">
            <a target="_blank" href={twitter} rel="noreferrer"><IoLogoTwitter size={25} /> </a>
            <a target="_blank" href={ln} rel="noreferrer" ><IoLogoLinkedin size={25} /> </a>
        </div>
    </div>
)

export default Panel;
