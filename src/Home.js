import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import CheckCircle from '@material-ui/icons/CheckCircleOutline';


function Home() {
  return (
    <div className="home">
    	
    	<div className="home__heroContainer">

    		<div className="home__heroMain">

	    		<Link to="/">
					<img
						className="home__bannerHero"
						src={require("./images/Wasps-768x456.jpg")} 
						alt="logo"
					/>
				</Link>

			</div>

			<div className="home__heroSmall">

				<Link to="/">
					<img
						className="home__bannerHero"
						src={require("./images/EPS Small575 x 320.jpg")} 
						alt="logo"
					/>
				</Link>

				<Link to="/">
					<img
						className="home__bannerHero"
						src={require("./images/EPS Small575 x 320.jpg")} 
						alt="logo"
					/>
				</Link>

			</div>

		</div>	

		<div className="home__infoContainer">

			<div className="home__infoOption">
				<CheckCircle className="home__infoCheck" />
				<div className="home__infoText">
					<span>PERSONALISE SELECTED PRODUCTS</span>
				</div>
			</div>

			<div className="home__infoOption">
				<CheckCircle className="home__infoCheck" />
				<div className="home__infoText">
					<span>WORLDWIDE DELIVERY</span>
				</div>
			</div>

			<div className="home__infoOption">
				<CheckCircle className="home__infoCheck" />
				<div className="home__infoText">
					<span>28 DAY MONEY BACK GUARANTEE</span>
				</div>
			</div>

			<div className="home__infoOption">
				<CheckCircle className="home__infoCheck" />
				<div className="home__infoText">
					<span>OFFICIAL CLUB MERCHANDISE</span>
				</div>
			</div>

		</div>

		<div className="home__lowerContainer">

			<Link to="/">
				<img
					className="home__bannerLower"
					src={require("./images/EPS Small575 x 320.jpg")} 
					alt="logo"
				/>
			</Link>

			<Link to="/">
				<img
					className="home__bannerLower"
					src={require("./images/EPS Small575 x 320.jpg")} 
					alt="logo"
				/>
			</Link>

			<Link to="/">
				<img
					className="home__bannerLower home__bannerRemove"
					src={require("./images/EPS Small575 x 320.jpg")} 
					alt="logo"
				/>
			</Link>

		</div>

		<footer className="home__footer">

			<div className="home__footerText">

				<p>Copyright &#169; Elite Pro Sports Ltd, registered in England. reg no. 05193262.</p>
				<p>Registered address: Elite Pro Sports, Heavens Walk, Doncaster, DN4 5HZ</p>

			</div>

		</footer>

    </div>
  );
}

export default Home;
