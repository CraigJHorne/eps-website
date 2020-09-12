import React, { useState } from 'react';
import '../Components/CheckoutProduct.css';
import { useStateValue } from '../StateProvider';


function CheckoutProduct({ checkoutId, checkoutUnique, checkoutName, checkoutSize, checkoutPrice, checkoutImageOne, checkoutQty, checkoutTotal} ) {

    const [{ basket }, dispatch] =  useStateValue();

    const removeFromBasket = () => {

      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: checkoutId,
      });

    }

    const increaseValue = () => {

      dispatch({
        type: "INCREASE_VALUE",
        id: checkoutId,
      });

    }

    const decreaseValue = () => {

      dispatch({
        type: "DECREASE_VALUE",
        id: checkoutId,
      });

    }



  return (
            
              <tr>
                <td><div className="checkout__product">
                    <button className="checkout__buttonThree" type="button" onClick={removeFromBasket}>X</button> 
                    <div className="checkout__imageContainer"><img
                        className="checkout__image" 
                        src={ checkoutImageOne }
                        alt="logo"
                    /></div>
                    {checkoutName + " - " + checkoutSize}
                </div></td>
                <td>£{checkoutPrice}</td>
                <td><div className="checkout__productSelections">

                 <div className="checkout__quantity" onClick={decreaseValue}>-</div>
                 <div className="checkout__quantity">{checkoutQty}</div>
                 <div className="checkout__quantity" onClick={increaseValue}>+</div>

                </div></td>
                <td>£{(checkoutPrice * checkoutQty).toFixed(2)}</td>
              </tr>
  );
}

export default CheckoutProduct;
