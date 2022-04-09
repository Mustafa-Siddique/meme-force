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
            <a href="https://t.me/MemeForceOfficial" className="btn" target="_blank">JOIN TELEGRAM <FaTelegramPlane/></a>
            <a href="https://bscscan.com/token/0xa97b64afbb6d6811696caafd323ffc9ea983a7bb" className="btn" target="_blank">CHECK BSCSCAN <img src={bscscan} alt=''/></a>
            <a href="https://etherscan.io/token/0x5c2fce5a43a56fc158a5a86cac4fcc4fbdc577f4" className="btn" target="_blank">CHECK ETHERSCAN <img src={ethscan} alt="" /></a>
        </div>
        <div className="container text-center">
          <p>Official Email: <a href="mailto:info@memeforce.app" style={{color:"#d80d6f"}}>info@memeforce.app</a></p>
          <p>Copyright &copy; 2022. All Rights Reserved by Meme-Force</p>
        </div>
    </div>
  )
}