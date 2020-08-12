import React from 'react';
import './Home.css';
import CheckCircle from '@material-ui/icons/CheckCircleOutline';

function BannerSmall() {
  return (
  	<div className="banner__smallContainer">
        <img
          className="banner__small" 
          src={require("./images/EPS Small575 x 320.jpg")} 
          alt="product"
        />
        <div className="banner__smallText">
        	<h3>Hello</h3>
        	<h4>LoJDBJDBJBJCJSJSCbsjfbjsbfjbfsjbf</h4>
        </div>
    </div>
  );
}

function BannerMain() {
  return (
        <img
          className="banner__main" 
          src={require("./images/Wasps-768x456.jpg")} 
          alt="product"
        /> 

  );
}

function BannerInfo() {
  return (
        <div className="banner__infoContainer">
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

  );
}

function BannerFullWidth() {
  return (

  	<div className="banner__fullWidthContainer">
        		<img
          		className="banner__fullwidth" 
          		src={require("./images/EPS FullWidth 1350 x 320.jpg")} 
          		alt="product"
        	/> 
        </div> 
  );
}

export { BannerSmall, BannerMain, BannerInfo, BannerFullWidth };