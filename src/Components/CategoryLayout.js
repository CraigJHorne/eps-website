import React from 'react';
import '../Components/CategoryLayout.css';
import ItemsCard from '../Components/ItemsCard';
import data from '../data.js';
import { Link } from 'react-router-dom';



function CategoryLayout( {team} ) {

  return (
    <div className="categorylayout">

    <div className="category__left">
    	
    </div>

    <div className="category__right">

    <div className="category__info">
    <Link to={"/"}><span className="category__infoGrey">Home / Shop / </span></Link><Link to={"/shop/" + team}><span className="category__infoBlack">{team}</span></Link>
    </div>

    <div className="category__items">

    {data.products.filter(product => product.team.includes(team)).map(filteredProduct => 

    	<Link to={"/shop/product/" + filteredProduct.id}>
        <ItemsCard
        itemId={filteredProduct.id}
    	itemImageOne={filteredProduct.imageOne}
    	itemImageTwo={filteredProduct.imageTwo}
    	itemName={filteredProduct.name}
    	itemPrice={filteredProduct.price}
    	/>
        </Link>
    	
        )}

    </div>

    </div>

    </div>
  );
}

export default CategoryLayout;
