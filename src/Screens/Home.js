import React from 'react';
import MainLayout from '../Components/MainLayout';


function Home() {
  return (
    
    <MainLayout 
		heroMainImage="/images/Wasps-768x456.jpg"

		heroTopImage="/images/EPSSmall575x320.jpg"
		heroTopHeader="DONCASTER ROVERS SHOP"
		heroTopInfo="OFFICIAL DONCASTER ROVERS PRODUCTS"

		heroBottomImage="/images/EPSSmall575x320.jpg"
		heroBottomHeader="LEEDS RHINOS SHOP"
		heroBottomInfo="OFFICIAL LEEDS RHINOS PRODUCTS"

		lowerOneImage="/images/EPSSmall575x320.jpg"
		lowerOneHeader="LEFT"
		lowerOneInfo="LEFT INFO"

		lowerTwoImage="/images/EPSSmall575x320.jpg"
		lowerTwoHeader="CENTER"
		lowerTwoInfo="CENTER INFO"

		lowerThreeImage="/images/EPSSmall575x320.jpg"
		lowerThreeHeader="RIGHT"
		lowerThreeInfo="RIGHT INFO"
	/>
  );
}

export default Home;
