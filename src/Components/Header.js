import React from 'react';
import '../Components/Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import { useStateValue } from '../StateProvider';

function Header() {

	const [{ basket }, dispatch] =  useStateValue();


	return (

		<div className="header">

			<div className="header__wrap">

				{/* search box left */}
				<div className="header_left">
					<div className="header__search">
						<input type="text" className="header__searchInput" placeholder="Search for products"/>
						<SearchIcon className="header__searchIcon" />
					</div>
					<div className="header__burger">
						<MenuIcon className="header__burger" />
						<div className="header_burgerMenu">
							<span>MENU</span>
						</div>
					</div>
				</div>

				{/* logo centre */}
				<Link to="/">
				<img
					className="header__logo" 
					src="/images/EPS-black-RGB.png"
					alt="logo"
				/>
				</Link>

				<div className="header__right">

					{/* login/register */}

						<Link className="header__link" to="/login">
							<div className="header__option">
								<span>LOGIN / REGISTER</span>
							</div>
						</Link>

						{/* Basket item with number */}

						<Link className="header__link" to="/checkout">
							<div className="header__optionBasket">
								<ShoppingCartIcon className="header__shoppingCartIcon" />
								<span className="header__basketCount">{basket?.length}</span>
							</div>
						</Link>

				</div>

			</div>

		</div>
	)
}

export default Header