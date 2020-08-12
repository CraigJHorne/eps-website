import React from 'react';
import './Home.css';
import { BannerSmall, BannerMain, BannerInfo, BannerFullWidth } from './Banners';

function Home() {
  return (
    <div className="home">

    <div className="home__heroBanners">
      <div className="home__heroMain">
        <BannerMain />
      </div>
      <div className="home__heroSide">
        <BannerSmall />
        <BannerSmall />
      </div>
    </div>

    <BannerInfo />

    <div className="home__lowerContainer">
      <div className="home__lowerBanners"><BannerSmall /></div>
      <div className="home__lowerBanners"><BannerSmall /></div>
      <div className="home__lowerBanners"><BannerSmall /></div>
    </div>

    <BannerFullWidth />

    </div>
  );
}

export default Home;
