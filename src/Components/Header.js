import React from 'react';
import '../Components/Header.css';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import { useStateValue } from '../StateProvider';
import {getQty} from '../Reducer';
import BurgerMenu from '../Components/BurgerMenu';
import SearchBox from '../Components/SearchBox';

function Header() {

	const [{ basket }] =  useStateValue();

	const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };


	return (

		<div className="header">

		<aside className="sidebar">
			<BurgerMenu />
		</aside>



			<div className="header__wrap">

				{/* search box left */}
				<div className="header_left">

					<div className="to_implement">
					<SearchBox />
					</div>

					<div className="header__burger" onClick={openMenu}>
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

						<div className="to_implement">
						<Link className="header__link" to="/login">
							<div className="header__option">
								<span>LOGIN / REGISTER</span>
							</div>
						</Link>
						</div>

						{/* Basket item with number */}

						<Link className="header__link" to="/checkout">
							<div className="header__optionBasket">
								<ShoppingCartIcon className="header__shoppingCartIcon" />
								<span className="header__basketCount">{getQty(basket)}</span>
							</div>
						</Link>

				</div>

			</div>

		</div>
	)
}

export default Header