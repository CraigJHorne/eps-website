import React from 'react';
import ProductLayout from '../Components/ProductLayout';
import data from '../data.js';
import Header from '../Components/Header';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';


function Product(props) {

const chosenProduct = (data.products[props.match.params.id]);



  return (

    <div>
    <Header />
    <Navigation />
    
    <ProductLayout 
           productId={props.match.params.id}
           productQty={1}
           productName={chosenProduct.name}
           productPrice={chosenProduct.price}
           productBlurb={chosenProduct.blurb}
           productImageOne={chosenProduct.imageOne}
           productImageTwo={chosenProduct.imageTwo}
           productImageThree={chosenProduct.imageThree}
           productImageFour={chosenProduct.imageFour}
           productTeam={chosenProduct.team}
          />

    <Footer />
    </div>
  );
}

export default Product;
