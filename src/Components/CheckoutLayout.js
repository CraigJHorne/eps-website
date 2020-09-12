import React from 'react';
import '../Components/CheckoutLayout.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from '../Components/CheckoutProduct';
import CurrencyFormat from 'react-currency-format';
import {getTotal} from '../Reducer';



function CheckoutLayout({ checkoutId, checkoutName, checkoutPrice, checkoutImageOne, checkoutQty, checkoutTotal} ) {

    const [{ basket }, dispatch] =  useStateValue();




  return (
    <div className="checkoutlayout">


        <div className="checkout__mainBasket">

          {basket?.length === 0 ? (
              <div className="checkout__calculationsEmpty">
                Your basket is empty <br /><br /><br />
                <Link to="/">
                    <button className="checkout__buttonFour" type="button">RETURN TO SHOP</button>
                </Link>
              </div>
            ): (
            
            <div><table>
              <tbody><tr>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
              </tr>
              {basket?.map((item) => (
                <CheckoutProduct
                   checkoutId={item.id}
                   checkoutName={item.name}
                   checkoutPrice={item.price}
                   checkoutImageOne={item.image}
                   checkoutQty={item.qty}
                   checkoutTotal={item.qty * item.price}
                   checkoutSize={item.size}
                   checkoutUnique={item.unique}
                 />
              ))}
        
              </tbody>
            </table>

            <button className="checkout__buttonTwo" type="button">UPDATE BASKET</button>
            </div>
            )}

        </div>

        {basket.length > 0 && (

        <div className="checkout__mainCalculations">
            <h2>BASKET TOTALS</h2>

            <div className="checkout__calculationsSection">
                <div className="checkout__calculationsHeader">Subtotal</div>
                <div className="checkout__calculationsValue">
                  <CurrencyFormat
                    decimalScale={2}
                    value={getTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"£"}
                  />
                </div>
            </div>
            <hr />
            <div className="checkout__calculationsSection">
              <div className="checkout__calculationsHeader">Shipping</div>
              <div className="checkout__calculationsValue">
                <div className="checkout__shippingValue">
                  <input type="radio" id="standard" name="shipping" value="standard" />
                  <label htmlFor="standard">Standard (3-5 Working Days): £3.98</label></div>
              </div>
            </div>
            <hr />
            <div className="checkout__calculationsSection">
              <div className="checkout__totalHeader">Total</div>
              <div className="checkout__totalValue">
                <CurrencyFormat
                    decimalScale={2}
                    value={getTotal(basket) + 3.98}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"£"}
                  />
              </div>
            </div>

            <Link to="/pay">
                    <button className="checkout__buttonOne" type="button">PROCEED TO CHECKOUT</button>
            </Link>

        </div>

        )}

    </div>
  );
}

export default CheckoutLayout;
