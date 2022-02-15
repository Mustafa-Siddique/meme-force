import React from 'react'
import Hero from '../components/Hero';
import Keyfeatures from '../components/Keyfeatures';
import Memeforce from '../components/Memeforce';
import Tokenomics from '../components/Tokenomics';
import About from '../components/About';
import Roadmap from '../components/Roadmap';
import BSCtutorial from '../components/BSCtutorial';
import ETHtutorial from '../components/ETHtutorial';
import ComingSoon from '../components/ComingSoon';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Keyfeatures/>
        <Memeforce/>
        <Tokenomics/>
        <About/>
        <Roadmap/>
        <BSCtutorial/>
        <ETHtutorial/>
        <ComingSoon/>
        <Footer/>
    </div>
  )
}
