import React from 'react';
import '../Components/CategoryLayout.css';
import ItemsCard from '../Components/ItemsCard';



function CategoryLayout() {

  return (
    <div className="categorylayout">

    <div className="category__left">
    	Left
    </div>

    <div className="category__right">

    <div className="category__info">
    <span className="category__infoGrey">Home / Shop / </span><span className="category__infoBlack">Category</span>
    </div>

    <div className="category__items">

    	<ItemsCard
        itemId="10002"
    	itemImageOne="/images/Product2.jpg"
    	itemImageTwo="/images/Product1.jpg"
    	itemName="Oxen OX1 Grey Marl T-Shirt"
    	itemPrice="32.00"
    	/>
    	<ItemsCard
        itemId="10003" 
    	itemImageOne="/images/Product2.jpg"
    	itemImageTwo="/images/Product1.jpg"
    	itemName="Top"
    	itemPrice="17.00"
    	/>
    	<ItemsCard 
        itemId="10004"
    	itemImageOne="/images/Product2.jpg"
    	itemImageTwo="/images/Product1.jpg"
    	itemName="Bottoms"
    	itemPrice="40.00"
    	/>
    	<ItemsCard 
        itemId="10005"
    	itemImageOne="/images/Product2.jpg"
    	itemImageTwo="/images/Product1.jpg"
    	itemName="Long Sleeve"
    	itemPrice="56.00"
    	/>
    	<ItemsCard 
        itemId="10006"
    	itemImageOne="/images/Product2.jpg"
    	itemImageTwo="/images/Product1.jpg"
    	itemName="Jumper"
    	itemPrice="33.00"
    	/>
    	<ItemsCard 
        itemId="10007"
    	itemImageOne="/images/Product2.jpg"
    	itemImageTwo="/images/Product1.jpg"
    	itemName="Trousers"
    	itemPrice="19.00"
    	/>

    </div>

    </div>

    </div>
  );
}

export default CategoryLayout;
