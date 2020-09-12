import React, { useState } from 'react';
import '../Components/CheckoutProduct.css';
import { useStateValue } from '../StateProvider';


function CheckoutProduct({ checkoutId, checkoutUnique, checkoutName, checkoutSize, checkoutPrice, checkoutImageOne, checkoutQty, checkoutTotal} ) {

    const [{ basket }, dispatch] =  useStateValue();

    const removeFromBasket = () => {

      dispatch({
        type: "REMOVE_FROM_BASKET",
        unique: checkoutUnique,
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

                 <div>{checkoutQty}</div>


                </div></td>
                <td>£{(checkoutPrice * checkoutQty).toFixed(2)}</td>
              </tr>
  );
}

export default CheckoutProduct;
