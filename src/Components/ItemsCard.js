import React from 'react';
import '../Components/ItemsCard.css';
import { Link } from 'react-router-dom';
import HeartIcon from '@material-ui/icons/FavoriteBorder';



function ItemsCard({imageOne, imageTwo, name, price}) {

  return (
    <div className="items__container">

        <Link to="/product">

            <div className="items__main">

                <div className="items__imageContainer" >

                    <img
                        className="items__image one" 
                        src={ imageOne }
                        alt="logo"
                    />
                    <img
                        className="items__image two" 
                        src={ imageTwo }
                        alt="logo"
                    />
                </div>
                <div className="items__text">
                    {name}
                </div>
                <div className="items__text">
                    £{price}
                </div>

            </div>

            <div className="items__lower">

                <HeartIcon />
                <button className="items__button" type="button">ADD TO BASKET</button>

            </div>

         </Link>

    </div>
  );
}

export default ItemsCard;
