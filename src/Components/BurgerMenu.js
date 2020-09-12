import React from 'react';
import '../Components/BurgerMenu.css';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';


function BurgerMenu() {


  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };


  return (


	<div>
          
          <div className="burger__icon" onClick={closeMenu}>
				<CloseIcon className="burger__icon" />
		  </div>

          <ul className="categories">


          <h3>Shop by Team</h3>

            <li className="categories__item">
              <Link to="/shop/gloucester" onClick={closeMenu}>GLOUCESTER RANGE</Link>
            </li>

            <li className="categories__item">
              <Link to="/shop/leeds" onClick={closeMenu}>LEEDS RANGE</Link>
            </li>

            <li className="categories__item">
              <Link to="/shop/doncaster" onClick={closeMenu}>DONCASTER RANGE</Link>
            </li>

            <li className="categories__item">
              <Link to="/shop/generic" onClick={closeMenu}>GENERIC RANGE</Link>
            </li>

            <li className="categories__item sale__item">
              <Link to="/shop/sale" onClick={closeMenu}>SALE</Link>
            </li>

            
          </ul>
       </div>

  );
}

export default BurgerMenu;
