import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import vidHero from '../Images/MARS.mp4'
import {FaTelegramPlane} from 'react-icons/fa'
import {AiFillSecurityScan} from 'react-icons/ai'
import {MdSecurity} from 'react-icons/md'

export default function Hero() {

    const heroSocials = useRef(null)
    
    useEffect(() => {
        gsap.from(heroSocials.current, {rotateZ:25, opacity:0, display:"none", delay:5.5})
        gsap.to(heroSocials.current,{display: "inline-block", duration: 0.5, rotate: 0})
    },[])
    

  return (
    <div id="hero-cont">
        <video src={vidHero} muted preLoad='auto' autoPlay={"autoplay"} loop></video>
        <div className="overlay"></div>
        <div className='hero-text'>
            <span>WELCOME TO</span>
            <h1>MEMEFORCE</h1>
            <p>MemeForce is the next big cross-chain launchpad project, available on the Binance SmartChain and Ethereum Mainnet.</p>
        </div>
        <div className="hero-socials">
            <a href="https://t.me/MemeForceOfficial"><span ref={heroSocials}>Telegram</span> <FaTelegramPlane/></a>
            <a href="http://bscscan.com/"><span ref={heroSocials}>BSC Scan</span> <AiFillSecurityScan/></a>
            <a href="https://etherscan.io/"><span ref={heroSocials}>Ether Scan</span> <MdSecurity/></a>
        </div>
    </div>
  )
}
