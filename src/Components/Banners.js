import React from 'react';
import '../Components/Banners.css';
import { Link } from 'react-router-dom';


function SmallBanner({image, heading, info}) {
  return (


	<div className="banner__smallContainer">
		<Link to="/">
			<img
			className={"banner__small"}
			src={ image }
			alt="banner"
			/>
		</Link>
		<div className="banner_smallText">
  			<h3>{ heading } </h3>
  			<h4>{ info }</h4>
  		</div>
	</div>

  );
}

export default SmallBanner;
