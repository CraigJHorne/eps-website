import React, { useState } from 'react';
import '../Components/ProductLayout.css';
import CheckCircle from '@material-ui/icons/CheckCircleOutline';
import HeartIcon from '@material-ui/icons/FavoriteBorder';
import { useStateValue } from '../StateProvider';
import { Link } from 'react-router-dom';




function ProductLayout( { productId, productTeam, productName, productPrice, productQty, productBlurb, productImageOne, productImageTwo, productImageThree, productImageFour, } ) {

    const [{basket}, dispatch] =  useStateValue();

    const addToBasket = () => {
        dispatch( {
            type: "ADD_TO_BASKET",
            item: {
                id: productId,
                name: productName,
                price: productPrice,
                image: productImageOne,
                qty: productCount,
                subTotal: (productPrice * productCount),
                size: selectedOption,
                unique: (Math.floor(Math.random() * 100000)),
            }
        })
  };

    const [productCount, setCount] = useState(1);

    const [selectedOption, setSelectedOption] = React.useState("S");



  return (
    <div className="productlayout">

          <div className="product__info">
            <Link to={"/"}><span className="product__infoGrey">Home / Shop /</span></Link><Link to={"/shop/" + productTeam}><span className="product__infoGrey">{productTeam}</span></Link><span className="product__infoGrey">/</span> <span className="product__infoBlack">{productName}</span>
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

                <select name="size" id="size" value={selectedOption} onChange={evt => setSelectedOption(evt.target.value)} className="product__sizeSelector">
                  <option value="choose" disabled>Choose a size</option>
                  <option value="S">Small</option>
                  <option value="M">Medium</option>
                  <option value="L">Large</option>
                  <option value="XL">Extra Large</option>
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
                 <div className="product__quantity" onClick={() => setCount(Math.max(1, (productCount - 1)))}>-</div>
                 <div className="product__quantity">{productCount}</div>
                 <div className="product__quantity" onClick={() => setCount(productCount + 1)}>+</div>
                 <button className="product__button" type="button" onClick={addToBasket}>ADD TO BASKET</button>

                </div>
                 


            </div>
        </div>


    </div>
  );
}


export default ProductLayout;
