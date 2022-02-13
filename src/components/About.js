import React from 'react'
import {FaTwitter, FaTelegram, FaInstagram, FaFacebookSquare} from 'react-icons/fa'

export default function About() {
  return (
    <div id='about-cont'>
        <div className="container">
            <h2>About Us</h2>
            <p>The community will be the foundations of the token, but we will also use aggressive marketing, with social influencers, to spread MemeForce awareness. Positive news about us is travelling fast. Be sure to join our amazing community to keep up-to-date and find out how you can get involved.</p>
            <p>See you soon!</p>
        </div>
        <div className="about-socials justify-content-between d-flex mt-5 pb-5">
            <a href="https://t.me/MemeForceOfficial" target="_blank" rel="noreferrer"><FaTelegram/></a>
            <a href="https://twitter.com/MemeForce_LP" target="_blank" rel="noreferrer"><FaTwitter/></a>
            <a href="https://www.instagram.com/memeforce2022/" target="_blank" rel="noreferrer"><FaInstagram/></a>
            <a href="https://www.facebook.com/profile.php?id=100077102541682" target="_blank" rel="noreferrer"><FaFacebookSquare/></a>
        </div>
    </div>
  )
}
