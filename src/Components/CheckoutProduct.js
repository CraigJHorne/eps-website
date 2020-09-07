import React from 'react';
import '../Components/CheckoutProduct.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';


function CheckoutProduct({ checkoutId, checkoutName, checkoutPrice, checkoutImageOne, checkoutQty} ) {

    const [{ basket }, dispatch] =  useStateValue();

    const removeFromBasket = () => {

      dispatch({
        type: "REMOVE_FROM_BASKET",
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
                    {checkoutName}
                </div></td>
                <td>£{checkoutPrice}</td>
                <td><div className="checkout__productSelections">

                 <div className="checkout__quantity">-</div>
                 <div className="checkout__quantity">{ checkoutQty }</div>
                 <div className="checkout__quantity">+</div>

                </div></td>
                <td>£{checkoutPrice}</td>
              </tr>
  );
}

export default CheckoutProduct;
