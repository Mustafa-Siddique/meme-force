import React from 'react'
import {FaTelegramPlane} from 'react-icons/fa'
import bscscan from '../Images/bscscan.png'
import ethscan from '../Images/ethscan.png'

export default function Footer() {
  return (
    <div id='footer-cont'>
        <div className="container">
            <h2>Check out our socials</h2>
        </div>
        <div className="foot-socials justify-content-around d-flex">
            <a href="https://t.me/MemeForceOfficial" className="btn">JOIN TELEGRAM <FaTelegramPlane/></a>
            <a href="https://t.me/MemeForceOfficial" className="btn">CHECK BSCSCAN <img src={bscscan} alt=''/></a>
            <a href="https://t.me/MemeForceOfficial" className="btn">CHECK ETHERSCAN <img src={ethscan} alt="" /></a>
        </div>
    </div>
  )
}