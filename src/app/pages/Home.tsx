import React from 'react';
import HeroSection from '../components/ui/HeroSection/HeroSection';
import SellerSection from '../components/ui/SellerSection/SellerSection';
import '../styles/home.scss'

const Home = () => {
  return (
    <>
    <HeroSection />
    <div className='seller-section'>
    <SellerSection />
    </div>
    </>
  )
}

export default Home