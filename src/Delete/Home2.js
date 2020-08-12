import React from 'react';
import './Home.css';
import CheckCircle from '@material-ui/icons/CheckCircleOutline';

function Home() {
  return (
    <div className="home">

      <div className="home__heroBanners">
        <div className="home__bannersMain">
          <img
          className="banner" 
          src={require("./images/Wasps-768x456.jpg")} 
          alt="product"
          />
        </div>
        <div className="home__bannersSide">
          <div className="home__bannersSmall">
            <img
            className="banner" 
            src={require("./images/EPS Small575 x 320.jpg")} 
            alt="product"
            />
          </div>
          <div className="home__bannersSmall">
           <img
            className="banner" 
            src={require("./images/EPS Small575 x 320.jpg")} 
            alt="product"
            />
          </div>
        </div>
      </div>

      <div className="home__bannersFullWidth">
        <div className="banner__infoBox">
          <CheckCircle />
          <h5>PERSONALISE SELECTED PRODUCTS</h5>
          </div>
          <div className="banner__infoBox">
          <CheckCircle />
          <h5>WORLDWIDE DELIVERY</h5>
          </div>
          <div className="banner__infoBox">
          <CheckCircle />
          <h5>28 DAY MONEY BACK GUARANTEE</h5>
          </div>
          <div className="banner__infoBox">
          <CheckCircle />
          <h5>OFFICIAL CLUB MERCHANDISE</h5>
          </div> 
      </div>

      <div className="home__bannersLower">
        <div className="home__bannersSmall">
           <img
            className="banner" 
            src={require("./images/EPS Small575 x 320.jpg")} 
            alt="product"
            />
        </div>
        <div className="home__bannersSmall">
           <img
            className="banner" 
            src={require("./images/EPS Small575 x 320.jpg")} 
            alt="product"
            />
        </div>
        <div className="home__bannersSmall remove__home">
           <img
            className="banner" 
            src={require("./images/EPS Small575 x 320.jpg")} 
            alt="product"
            />
        </div>
      </div>

      <div className="home__bannersLower">
        Sale Banner
      </div>

      <div className="home__bannersFullWidth">
        Hello
      </div>

      <div className="home__bannersFullWidth">
        Newsletter Signup
      </div>

      <div className="footer">
        Footer
      </div>

    </div>
  );
}

export default Home;
