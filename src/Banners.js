import React from 'react';
import './Banners.css';
import { Link } from 'react-router-dom';


function SmallBanner() {
  return (

  	<div>
		<Link to="/">
			<img
			className="banner__small"
			src={require("./images/EPS Small575 x 320.jpg")} 
			alt="logo"
			/>
		</Link>
	</div>

  );
}

export default SmallBanner;
