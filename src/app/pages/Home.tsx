import React from 'react';
import HeroSection from '../components/ui/HeroSection/HeroSection';
import SellerSection from '../components/ui/SellerSection/SellerSection';
import '../styles/home.scss'
import ExploreArt from '../components/ui/ExploreArt/ExploreArt';

const Home = () => {
  return (
    <>
    <HeroSection />
    <div className='trending-artists'>
      <SellerSection />
    </div>
    <ExploreArt/>

    </>
  )
}

export default Home