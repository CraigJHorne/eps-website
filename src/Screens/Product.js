import React from 'react';
import ProductLayout from '../Components/ProductLayout';


function Product() {
  return (
    
    <ProductLayout 
           productId="10001"
           productName="Leeds Rhinos 2020 Kids Performance Polo 4"
           productPrice="29.99"
           productBlurb="Official Leeds Rhinos 2020 Training Range."
           productImageOne="/images/Product1.jpg"
           productImageTwo="/images/Product2.jpg"
           productImageThree="/images/Product1.jpg"
           productImageFour="/images/Product1.jpg"
          />
  );
}

export default Product;
