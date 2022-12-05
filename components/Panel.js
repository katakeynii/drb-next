import React from 'react';
import ciss from "../public/images/iciss.jpeg"
import hospice from "../public/images/hospice.jpeg"
import rygel from "../public/images/rygel.jpeg"
import sidibe from "../public/images/sidibe.jpeg"
import Image from 'next/image'
const Panel = () => {
    return (
        <div className="panel-container">
            <div className="panel-badge">Panel </div>
            <div className="subject">
                {/* <div>Sujet</div> */}
                <h1>L'adoption du développement mobile au Sénégal</h1>
            </div>
            <div>
                <div className="paneliste-head" > Nos Panélistes : </div>
                <div className="panelistes">

                    <Speaker name="Segnonna Hounsou" 
                        cover={hospice}
                        role="Senior Mobile Engineer"
                        company="Xapo"
                        /> 
                    <Speaker name="Rygel Louv" 
                        cover={rygel}
                        role="Senior Mobile Engineer"
                        company="Sendwave"
                        />
                    <Speaker name="Ibrahima Ciss" 
                        cover={ciss}
                        role="Senior Mobile Engineer"
                        company="Indépendant"
                        />
                    <Speaker name="Souleymane Sidibe"
                        cover={sidibe}
                        role="Senior Mobile Engineer"
                        company="Atos Senegal"
                        />
                </div>
            </div>
        </div>
    );
};

const Speaker = ({name, cover, role, company}) => (
    <div className="paneliste" >
        <div className="paneliste-cover">
            <Image src={cover} />
        </div>
        <div className="paneliste-name">{name}</div>
        {/* <div className="paneliste-role">{role} </div> */}
        <div className="paneliste-company">{company}</div>
    </div>
)

export default Panel;
