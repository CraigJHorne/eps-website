import React from 'react';
import '../Components/ItemsCard.css';
import { Link } from 'react-router-dom';
import HeartIcon from '@material-ui/icons/FavoriteBorder';
import { useStateValue } from '../StateProvider';



function ItemsCard({ itemId, itemImageOne, itemImageTwo, itemName, itemPrice}) {


  return (
    <div className="items__container">

        <Link to={"/shop/product/" + itemId}>

            <div className="items__main">

                <div className="items__imageContainer" >

                    <img
                        className="items__image one" 
                        src={ itemImageOne }
                        alt="logo"
                    />
                    <img
                        className="items__image two" 
                        src={ itemImageTwo }
                        alt="logo"
                    />
                </div>
                <div className="items__text">
                    {itemName}
                </div>
                <div className="items__text">
                    £{itemPrice}
                </div>

            </div>

            <div className="items__lower">

                <HeartIcon />
                <Link to="/shop/leedsrhinos">
                    <button className="items__button" type="button">ADD TO BASKET</button>
                </Link>

            </div>

         </Link>

    </div>
  );
}

export default ItemsCard;
