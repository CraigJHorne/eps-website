import React from 'react';
import MainLayout from '../Components/MainLayout';


function Home() {
  return (
    
    <MainLayout 
		heroMainImage="/images/Wasps-768x456.jpg"

		heroTopImage="/images/EPSSmall575x320-1.jpg"
		heroTopHeader="DONCASTER SHOP"
		heroTopInfo="OFFICIAL DONCASTER PRODUCTS"

		heroBottomImage="/images/EPSSmall575x320-2.jpg"
		heroBottomHeader="LEEDS SHOP"
		heroBottomInfo="OFFICIAL LEEDS PRODUCTS"

		lowerOneImage="/images/EPSSmall575x320-3.jpg"
		lowerOneHeader="GENERIC RANGE"
		lowerOneInfo="TOP QUALITY ITEMS"

		lowerTwoImage="/images/EPSSmall575x320-4.jpg"
		lowerTwoHeader="SALE ITEMS"
		lowerTwoInfo="GRAB A BARGAIN"

		lowerThreeImage="/images/EPSSmall575x320-5.jpg"
		lowerThreeHeader="GLOUCESTER SHOP"
		lowerThreeInfo="OFFICIAL GLOUCESTR PRODUCTS"
	/>
  );
}

export default Home;
