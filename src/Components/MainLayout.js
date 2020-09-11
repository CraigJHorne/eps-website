import React from 'react';
import '../Components/MainLayout.css';
import { Link } from 'react-router-dom';
import CheckCircle from '@material-ui/icons/CheckCircleOutline';
import SmallBanner from '../Components/Banners';


function MainLayout( 
	{heroMainImage, 
	heroTopImage, heroTopHeader, heroTopInfo,
	heroBottomImage, heroBottomHeader, heroBottomInfo,
	lowerOneImage, lowerOneHeader, lowerOneInfo,
	lowerTwoImage, lowerTwoHeader, lowerTwoInfo,
	lowerThreeImage, lowerThreeHeader, lowerThreeInfo,
	checkColor
	}) {

  return (
    <div className="mainlayout">
    	
    	<div className="mainlayout__heroContainer">

    		<div className="mainlayout__heroMain">

	    		<Link to="/shop/gloucester">
					<img
						className="mainlayout__bannerHero"
						src={ heroMainImage }
						alt="banner"
					/>
				</Link>

			</div>

			<div className="mainlayout__heroSmall">

				<SmallBanner 
				image={ heroTopImage }
				heading={ heroTopHeader }
				info={ heroTopInfo }
				team="doncaster" />
				<SmallBanner 
				image={ heroBottomImage }
				heading={ heroBottomHeader }
				info={ heroBottomInfo }
				team="leeds" />

			</div>

		</div>	

		<div className="mainlayout__infoContainer">

			<div className="mainlayout__infoOption">
				<CheckCircle className="mainlayout__infoCheck" />
				<div className="mainlayout__infoText">
					<span>PERSONALISE SELECTED PRODUCTS</span>
				</div>
			</div>

			<div className="mainlayout__infoOption">
				<CheckCircle className="mainlayout__infoCheck" />
				<div className="mainlayout__infoText">
					<span>WORLDWIDE DELIVERY</span>
				</div>
			</div>

			<div className="mainlayout__infoOption">
				<CheckCircle className="mainlayout__infoCheck" />
				<div className="mainlayout__infoText">
					<span>28 DAY MONEY BACK GUARANTEE</span>
				</div>
			</div>

			<div className="mainlayout__infoOption">
				<CheckCircle className="mainlayout__infoCheck" />
				<div className="mainlayout__infoText">
					<span>OFFICIAL CLUB MERCHANDISE</span>
				</div>
			</div>

		</div>

		<div className="mainlayout__lowerContainer">

			<div className="mainlayout__bannerLower">
				<SmallBanner 
				image={ lowerOneImage }
				heading={ lowerOneHeader }
				info={ lowerOneInfo }
				team="generic" />
			</div>
			<div className="mainlayout__bannerLower">
				<SmallBanner 
				image={ lowerTwoImage }
				heading={ lowerTwoHeader }
				info={ lowerTwoInfo }
				team="sale" />
			</div>
			<div className="mainlayout__bannerLower mainlayout__bannerRemove">
				<SmallBanner 
				image={ lowerThreeImage }
				heading={ lowerThreeHeader }
				info={ lowerThreeInfo }
				team="gloucester" />
			</div>

		</div>
		
    </div>
  );
}

export default MainLayout;
