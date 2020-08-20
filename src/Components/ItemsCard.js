import React from 'react';
import '../Components/ItemsCard.css';
import { Link } from 'react-router-dom';
import HeartIcon from '@material-ui/icons/FavoriteBorder';
import { useStateValue } from '../StateProvider';



function ItemsCard({ itemId, itemImageOne, itemImageTwo, itemName, itemPrice}) {

    const [{}, dispatch] =  useStateValue();

    const addToBasket = () => {
        dispatch( {
            type: "ADD_TO_BASKET",
            item: {
                id: itemId,
                name: itemName,
                price: itemPrice,
                image: itemImageOne,
            }
        })
  };


  return (
    <div className="items__container">

        <Link to="/product">

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
                <Link to="/checkout">
                    <button className="items__button" type="button" onClick={addToBasket}>ADD TO BASKET</button>
                </Link>

            </div>

         </Link>

    </div>
  );
}

export default ItemsCard;
