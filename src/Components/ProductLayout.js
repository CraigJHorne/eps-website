import React, { useState } from 'react';
import '../Components/ProductLayout.css';
import CheckCircle from '@material-ui/icons/CheckCircleOutline';
import HeartIcon from '@material-ui/icons/FavoriteBorder';
import { useStateValue } from '../StateProvider';



function ProductLayout( { productId, productName, productPrice, productQty, productBlurb, productImageOne, productImageTwo, productImageThree, productImageFour, } ) {

    const [{}, dispatch] =  useStateValue();

    const addToBasket = () => {
        dispatch( {
            type: "ADD_TO_BASKET",
            item: {
                id: productId,
                name: productName,
                price: productPrice,
                image: productImageOne,
                qty: count,
            }
        })
  };

    const [count, plusCount, minusCount] = useState(0);


  return (
    <div className="productlayout">

        <div className="product__info">
            <span className="product__infoGrey">Home / Shop / Club / Category /</span><span className="product__infoBlack">{ productName }</span>
        </div>

        <div className="product__container">
            <div className="product__images">

                <div>
                <img
                    className="product__imagesMain" 
                    src={productImageOne}
                    alt="logo"
                />
                </div>

                <div className="product__imagesSmaller"><img
                    className="product__imagesSmall" 
                    src={productImageOne}
                    alt="logo"
                />
                <img
                    className="product__imagesSmall" 
                    src={productImageTwo}
                    alt="logo"
                />
                <img
                    className="product__imagesSmall" 
                    src={productImageThree}
                    alt="logo"
                />
                <img
                    className="product__imagesSmall" 
                    src={productImageFour}
                    alt="logo"
                />
                </div>

            </div>

            <div className="product__description">

                <div className="product__name">{productName}</div>

                <div className="product__price">£{productPrice}</div>

                <div className="product__blurb">{productBlurb}</div>


                <label htmlFor="size" className="product__sizeLabel">Size:</label>

                <select name="size" id="size" defaultValue="choose" className="product__sizeSelector">
                  <option value="choose" disabled>Choose a size</option>
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                  <option value="Extra Large">Extra Large</option>
                </select>

                <div className="product__descriptionFeatures">

                       <div className="product__featuresOption">
                            <CheckCircle className="product__featuresCheck" />
                            <div className="product__featuresText">
                            <span>Express Delivery Available</span>
                            </div>
                        </div>

                        <div className="product__featuresOption">
                            <CheckCircle className="product__featuresCheck" />
                            <div className="product__featuresText">
                            <span>100% Official Merchandise</span>
                            </div>
                        </div>

                        <div className="product__featuresOption">
                            <CheckCircle className="product__featuresCheck" />
                            <div className="product__featuresText">
                            <span>Fast & Secure Payments</span>
                            </div>
                        </div>

                    </div>

                <div className="product__descriptionSelections">

                 <HeartIcon className="product__heart"/>
                 <div className="product__quantity" onClick={() => minusCount(count - 1)}>-</div>
                 <div className="product__quantity">{count}</div>
                 <div className="product__quantity" onClick={() => plusCount(count + 1)}>+</div>
                 <button className="product__button" type="button" onClick={addToBasket}>ADD TO BASKET</button>

                </div>
                 


            </div>
        </div>


    </div>
  );
}


export default ProductLayout;
