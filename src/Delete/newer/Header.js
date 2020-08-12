import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
	return (
		<nav className="header">

			{/* burger menu left */}
			<div className="header__burger remove__a1000">
				<MenuIcon className="header__menuIcon" />
			</div>

			{/* search box left */}
			<div className="header__search remove__u1000">
				<input type="text" className="header__searchInput" placeholder="Search for products"/>
				<SearchIcon className="header__searchIcon" />
			</div>

			{/* logo centre */}
			<Link to="/">
			<img
				className="header__logo" 
				src={require("./images/EPS-black-RGB.png")} 
				alt="logo"
			/>
			</Link>

			{/* login/register */}

			<div className="header__nav">

				<Link className="header__link remove__u1000" to="/login">
					<div className="header__option">
						<span>LOGIN / REGISTER</span>
					</div>
				</Link>

				<Link className="header__link" to="/checkout">
					<div className="header__optionBasket">
						<ShoppingCartIcon className="header__shoppingCartIcon" />
						<span className="header__basketCount">0</span>
					</div>
				</Link>

			</div>

			{/* Basket item with number */}
		</nav>
	)
}

export default Header