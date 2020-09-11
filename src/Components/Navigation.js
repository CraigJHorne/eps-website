import React from 'react';
import '../Components/Navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
	return (

		<nav className="navigation">

			<div className="navigation__wrap">

				<Link className="navigation__link" to="/shop/gloucester">
					<div className="navigation__option">
						<span>GLOUCESTER RANGE</span>
					</div>
				</Link>
				<Link className="navigation__link" to="/shop/leeds">
					<div className="navigation__option">
						<span>LEEDS RANGE</span>
					</div>
				</Link>
				<Link className="navigation__link" to="/shop/doncaster">
					<div className="navigation__option">
						<span>DONCASTER RANGE</span>
					</div>
				</Link>
				<Link className="navigation__link" to="/shop/generic">
					<div className="navigation__option">
						<span>GENERIC</span>
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