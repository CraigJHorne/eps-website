import React from 'react';
import '../Components/Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
	return (

		<nav className="navigation">

			<div className="navigation__wrap">

				<Link className="navigation__link" to="/shop/gloucesterrugby">
					<div className="navigation__option">
						<span>GLOUCESTER RUGBY</span>
					</div>
				</Link>
				<Link className="navigation__link" to="/shop/leedsrhinos">
					<div className="navigation__option">
						<span>LEEDS RHINOS</span>
					</div>
				</Link>
				<Link className="navigation__link" to="/shop/doncasterrovers">
					<div className="navigation__option">
						<span>DONCASTER ROVERS</span>
					</div>
				</Link>
				<Link className="navigation__link" to="/shop/oxen">
					<div className="navigation__option">
						<span>OXEN</span>
					</div>
				</Link>
				<Link className="navigation__link red" to="/shop/sale">
					<div className="navigation__option">
						<span>SALE</span>
					</div>
				</Link>

			</div>

		</nav>
	)
}

export default Navigation