import React from "react";
import "./Home.css";
import { pages } from "../Pages";
import Header from "../Utilities/Header/Header";
import rightImage from "../Assets/Images/right-block-image.svg";
function Home() {
  return (
    <>
      <Header />

      <div className="Home__mainContainer">
        <div className="Home__leftContainer">
          <h3 className="Home__title">URL Shortner</h3>
          <p className="Home__Para">
            Best free URL shortener. Shorten, edit and delete links in bulk.
            Generate links, pages, QR codes with custom designs and tracking
            analytics. Boost your brand by branded domain name and hundred
            domain names more on our domain marketplace
          </p>

          <p className="Home__loginDiacliamer">Login to use many other free domains like: ln.run, shorten.ee, shorten.so, shorten.tv, shorten.is, shorten.world and more on domain marketplace</p>
       <input className="Home__linkInput"/>
       <button className="Home__convertButton">Convert</button>
        </div>
        <div className="Home__rightContainer">
          <img className="Home__rightContainerImage" src={rightImage} />
        </div>
      </div>
    </>
  );
}

export default Home;
