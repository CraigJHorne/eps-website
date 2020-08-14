import React from 'react';
import './CategoryLayout.css';
import { Link } from 'react-router-dom';
import ItemsCard from './ItemsCard';



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
    	imageOne="/images/Product2.jpg"
    	imageTwo="/images/Product1.jpg"
    	name="Oxen OX1 Grey Marl T-Shirt"
    	price="32.00"
    	/>
    	<ItemsCard 
    	imageOne="/images/Product2.jpg"
    	imageTwo="/images/Product1.jpg"
    	name="Top"
    	price="17.00"
    	/>
    	<ItemsCard 
    	imageOne="/images/Product2.jpg"
    	imageTwo="/images/Product1.jpg"
    	name="Bottoms"
    	price="40.00"
    	/>
    	<ItemsCard 
    	imageOne="/images/Product2.jpg"
    	imageTwo="/images/Product1.jpg"
    	name="Long Sleeve"
    	price="56.00"
    	/>
    	<ItemsCard 
    	imageOne="/images/Product2.jpg"
    	imageTwo="/images/Product1.jpg"
    	name="Jumper"
    	price="33.00"
    	/>
    	<ItemsCard 
    	imageOne="/images/Product2.jpg"
    	imageTwo="/images/Product1.jpg"
    	name="Trousers"
    	price="19.00"
    	/>

    </div>

    </div>

    </div>
  );
}

export default CategoryLayout;
