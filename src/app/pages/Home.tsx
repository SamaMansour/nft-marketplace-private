import React from 'react';
import HeroSection from '../components/ui/HeroSection/HeroSection';
import SellerSection from '../components/ui/SellerSection/SellerSection';
import '../styles/home.scss'
import ExploreArt from '../components/ui/ExploreArt/ExploreArt';
import LiveArt from '../components/ui/LiveArt/LiveArt';
import PopularCollections from '../components/ui/Popular-collections/PopularCollections';
import StepSection from '../components/ui/StepSection/StepSection';

const Home = () => {
  return (
    <>
    <HeroSection />
    <SellerSection />
    {/*<ExploreArt/> */}
    {/*<PopularCollections/>*/}
    {/*<LiveArt/>*/}
    {/* <StepSection/> */}
    </>
  )
}

export default Home