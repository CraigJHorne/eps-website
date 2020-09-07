import React from 'react';
import '../Components/CategoryLayout.css';
import ItemsCard from '../Components/ItemsCard';
import data from '../data.js';



function CategoryLayout( {team} ) {

  return (
    <div className="categorylayout">

    <div className="category__left">
    	Left
    </div>

    <div className="category__right">

    <div className="category__info">
    <span className="category__infoGrey">Home / Shop / </span><span className="category__infoBlack">{team}</span>
    </div>

    <div className="category__items">

    {data.products.filter(product => product.team.includes(team)).map(filteredProduct => 

    	<ItemsCard
        itemId={filteredProduct.id}
    	itemImageOne={filteredProduct.imageOne}
    	itemImageTwo={filteredProduct.imageTwo}
    	itemName={filteredProduct.name}
    	itemPrice={filteredProduct.price}
    	/>
    	
        )}

    </div>

    </div>

    </div>
  );
}

export default CategoryLayout;
