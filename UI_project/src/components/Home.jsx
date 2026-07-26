import React from 'react'
import Navbar from './Header/Navbar'
import HeroSection from './HeroSection/HeroSetion';
import { useState } from 'react';
import defaultBg from '../assets/images/re-create_image_for_desktop_202606180714.jpeg';

const Home = () => {
  const [bgImage,setBgImage] = useState(defaultBg)
  const handleBgChange = (img) => {
    setBgImage(img)
  }
  return (
    <div>
      <Navbar />
      <HeroSection bgImage={bgImage} onImageSelect={handleBgChange} />
    </div>
  )
}

export default Home
