import React, { useState } from "react";
import "./Home.css";
import Header from "../Utilities/Header/Header";
import axios from "axios";
import qs from "qs";
import QRCode from "qrcode.react";
import rightImage from "../Assets/Images/right-block-image.svg";
import copyIcon from "../Assets/Images/copyIcon.png";

function Home() {
  const [url, setURL] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [display, setDisplay] = useState(false);

  const handleSubmit = async () => {
    console.log("This is the URL: ", url);
    try {
      const data = qs.stringify({ originalUrl: url });
      const response = await axios.post("https://url-shortner-backend-1-f5pi.onrender.com/convert", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      if (!response.data.shortUrl) {
        setDisplay(false);
      } else {
        setShortUrl(response.data.shortUrl);
        setDisplay(true);
        setError("");
      }
    } catch (err) {
      console.error("Error converting URL:", err);
      setError("Failed to shorten the URL. Please try again.");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    alert("URL copied to clipboard!");
  };

  return (
    <>
    <div className="Home__header"><Header />
    </div>
      
      <div className="Home__mainContainer">
        <div className="Home__leftContainer">
          <h3 className="Home__title">URL Shortener</h3>
          <p className="Home__Para">
            Best free URL shortener. Shorten, edit and delete links in bulk.
            Generate links, pages, QR codes with custom designs and tracking
            analytics. Boost your brand by branded domain name and hundred
            domain names more on our domain marketplace.
          </p>

          <p className="Home__loginDisclaimer">
            Login to use many other free domains like: ln.run, shorten.ee,
            shorten.so, shorten.tv, shorten.is, shorten.world, and more on the
            domain marketplace.
          </p>

          <input
            className="Home__linkInput"
            placeholder="Enter URL to shorten"
            value={url}
            onChange={(e) => setURL(e.target.value)}
          />
          <button className="Home__convertButton" onClick={handleSubmit}>
            Convert
          </button>

         
        </div>
        <div className="Home__rightContainer">
          <img
            className="Home__rightContainerImage"
            src={rightImage}
            alt="Right Block"
          />
        </div>
      </div>

      {display && (
        <div className="Home__URLDisplaySection">
          <div className="Home__urlDisplay">
            <h4 className="Home__urlDisplay__Title">Shortened URL</h4>
            <div className="Home__urlDisplay__innerContainer">
              <input type="text" value={shortUrl} readOnly className="Home__urlDisplay__innerContainer__inputContainer" />
              <button onClick={handleCopy}>
                <img src={copyIcon} alt="Copy" />
              </button>
            </div>
          </div>
          <div className="Home__QRdisplay">
            <h4 className="Home__QRTitle">Generated QR COde</h4>
            <QRCode value={shortUrl} size={128} className="Home__QR" />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
