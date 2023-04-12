import React from 'react';
import HeroSection from '../components/ui/HeroSection/HeroSection';
import SellerSection from '../components/ui/SellerSection/SellerSection';
import '../styles/home.scss'
import ExploreArt from '../components/ui/ExploreArt/ExploreArt';
import LiveArt from '../components/ui/LiveArt/LiveArt';
import PopularCollections from '../components/ui/Popular-collections/PopularCollections';
import StepSection from '../components/ui/StepSection/StepSection';
import CreateNft from "../components/ui/CreateNft/CreateNft";
import TopCollections from '../components/ui/Top-collections/TopCollections';

const Home = () => {
  return (
    <>
    <HeroSection />
    <SellerSection/>
     <LiveArt/>
    <ExploreArt/>
    <PopularCollections/>
   
    {/* <StepSection/> */}
    <CreateNft/>
    <TopCollections/>
    </>
  )
}

export default Home