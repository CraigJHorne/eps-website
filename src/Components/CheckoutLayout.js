import React from 'react';
import '../Components/CheckoutLayout.css';
import { Link } from 'react-router-dom';



function CheckoutLayout({ checkoutId, checkoutName, checkoutPrice, checkoutImageOne} ) {

  return (
    <div className="checkoutlayout">


        <div className="checkout__mainBasket">
            
            <table>
              <tbody><tr>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
              </tr>
              <tr>
                <td><div className="checkout__product">
                    x 
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
                 <div className="checkout__quantity">1</div>
                 <div className="checkout__quantity">+</div>

                </div></td>
                <td>£{checkoutPrice}</td>
              </tr></tbody>
            </table>

            <button className="checkout__buttonTwo" type="button">PROCEED TO CHECKOUT</button>


        </div>

        <div className="checkout__mainCalculations">
            <h2>BASKET TOTALS</h2>

            <div className="checkout__calculationsSection">
                <div className="checkout__calculationsHeader">Subtotal</div>
                <div className="checkout__calculationsValue">£{checkoutPrice}</div>
            </div>
            <hr />
            <div className="checkout__calculationsSection">
              <div className="checkout__calculationsHeader">Shipping</div>
              <div className="checkout__calculationsValue">
                <div className="checkout__shippingValue">
                  <input type="radio" id="standard" name="shipping" value="standard" />
                  <label htmlFor="standard">Standard (3-5 Working Days): £3.98</label><br />
                  <input type="radio" id="express" name="shipping" value="express" />
                  <label htmlFor="express">Express (1-2 Working Days): £6.98</label><br /></div>
              </div>
            </div>
            <hr />
            <div className="checkout__calculationsSection">
              <div className="checkout__totalHeader">Total</div>
              <div className="checkout__totalValue">£{checkoutPrice}</div>
            </div>

            <Link to="/pay">
                    <button className="checkout__buttonOne" type="button">PROCEED TO CHECKOUT</button>
            </Link>

        </div>

    </div>
  );
}

export default CheckoutLayout;
