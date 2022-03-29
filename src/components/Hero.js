import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {FaTelegramPlane} from 'react-icons/fa'
import bscscan from '../Images/bscscan.png'
import ethscan from '../Images/ethscan.png'
import vidHero from '../Images/MARS.m4v'
import {Link} from 'react-router-dom'
import {RiFilePaper2Line} from 'react-icons/ri'

export default function Hero() {

    const heroTele = useRef(null)
    const heroBsc = useRef(null)
    const heroEth = useRef(null)
    
    useEffect(() => {
        gsap.from(heroTele.current, {rotateZ:25, opacity:0, display:"none"})
        gsap.to(heroTele.current,{display: "inline-block", duration: 0.5, delay:5.5})

        gsap.from(heroBsc.current, {rotateZ:25, opacity:0, display:"none"})
        gsap.to(heroBsc.current,{display: "inline-block", duration: 0.5, delay:5.5})

        gsap.from(heroEth.current, {rotateZ:25, opacity:0, display:"none"})
        gsap.to(heroEth.current,{display: "inline-block", duration: 0.5, rotate: 0, delay:5.5, autoAlpha:1})
    },[])

  return (

    <div style={{height:"100vh", width:"100%", position:"relative"}}>
        <div id="hero-cont">
        <video src={vidHero} muted preload='auto' autoPlay={"autoplay"} loop></video>
        <div className="overlay"></div>
        <div className='hero-text'>
            <span>WELCOME TO</span>
            <h1>MEMEFORCE</h1>
            <p>MemeForce is the next big cross-chain launchpad project, available on the Binance SmartChain and Ethereum Mainnet.</p>
            <Link style={{outline:"none", background:"linear-gradient(to top right, #1c1f24 15%, #000000 100%)", color:"#fff", padding:"8px 25px", textDecoration:"none", letterSpacing:"2px", borderRadius:"5px"}} to='/launchpad'>Launchpad</Link>
        </div>
        <div className="hero-socials">
            <a href="https://github.com/Meme-Force/Whitepaper-v1/blob/main/MF_WP_V1.pdf" target='_blank'><span ref={heroTele}>Whitepaper</span> <RiFilePaper2Line/></a>
            <a href="https://t.me/MemeForceOfficial"><span ref={heroTele}>Telegram</span> <FaTelegramPlane/></a>
            <a href="http://bscscan.com/"><span ref={heroBsc}>BSC Scan</span> <img src={bscscan} alt=""/></a>
            <a href="https://etherscan.io/"><span ref={heroEth}>Ether Scan</span> <img src={ethscan} alt=""/></a>
        </div></div>
    </div>
  )
}
