import React from 'react';
import HeroSection from '../components/ui/HeroSection/HeroSection';
import SellerSection from '../components/ui/SellerSection/SellerSection';
import '../styles/home.scss'
import ExploreArt from '../components/ui/ExploreArt/ExploreArt';
import LiveArt from '../components/ui/LiveArt/LiveArt';
import StepSection from '../components/ui/StepSection/StepSection';

const Home = () => {
  return (
    <>
    <HeroSection />
    <div className='trending-artists'>
      <SellerSection />
    </div>
    <ExploreArt/>
    <LiveArt/>
    <StepSection/>
    </>
  )
}

export default Home