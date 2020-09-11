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



    const [selectionQty, setCount] = useState(checkoutQty);



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

                 <div className="checkout__quantity" onClick={() => setCount(Math.max(1, (selectionQty - 1)))}>-</div>
                 <div className="checkout__quantity">{selectionQty}</div>
                 <div className="checkout__quantity" onClick={() => setCount(selectionQty + 1)}>+</div>

                </div></td>
                <td>£{(checkoutPrice * selectionQty).toFixed(2)}</td>
              </tr>
  );
}

export default CheckoutProduct;
