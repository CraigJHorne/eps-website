import React from 'react';
import './Banners.css';
import { Link } from 'react-router-dom';


function SmallBanner() {
  return (

  	<div className="banner__smallContainer">
		<Link to="/">
			<img
			className="banner__small"
			src={require("./images/EPS Small575 x 320.jpg")} 
			alt="logo"
			/>
		</Link>
		<div className="banner_smallText">
  			<h3>Hello</h3>
  			<h4>Infoooooooooooooooo</h4>
  		</div>
	</div>

  );
}

export default SmallBanner;
