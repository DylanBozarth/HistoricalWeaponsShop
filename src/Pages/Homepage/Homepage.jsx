import React from "react";
import './homepage.css'
import Directory from "../../Components/Directory/Directory";
import Extras from "../../Components/Extras/Extras";


export const Homepage = () => (
  <div className="homepage">
   <h1 className="title">Weapons and Armor by time period </h1>
   <Directory />
   <h1>Other items we offer</h1>
   <br /> 
   <Extras />
    </div>
);
