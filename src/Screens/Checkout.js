import React from 'react';
import CheckoutLayout from '../Components/CheckoutLayout';


function Checkout() {
  return (
    <CheckoutLayout
    	   checkoutId="10001"
           checkoutName="Leeds Rhinos 2020 Kids Performance Polo 4"
           checkoutPrice="29.99"
           checkoutImageOne="/images/Product1.jpg"
     />
  );
}

export default Checkout;
