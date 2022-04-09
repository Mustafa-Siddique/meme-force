import React from "react";
import logo from "../Images/logo.png";
import fav from '../Images/logo192.png'

export default function Navbar({price}) {
  return (
    <div style={{width:"100%", position:"absolute", zIndex:"11"}}>
      <nav className="navbar mx-auto navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="https://github.com/Meme-Force/Whitepaper-v1/blob/main/MF_WP_V1.pdf"  target='_blank'>
                  WHITEPAPER
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="https://poocoin.app/tokens/0xa97b64afbb6d6811696caafd323ffc9ea983a7bb" target="_blank">
                  BSC CHART
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active mx-3" href="https://www.dextools.io/app/ether/pair-explorer/0x4197db1e795f5e16b6b107bc80ebc4038f3776c4" target="_blank">
                  ETH CHART
                </a>
              </li>
              <li className="nav-item">
                <button className="nav-link rounded btn px-3"><a href="https://pancakeswap.finance/swap?outputCurrency=0xa97b64afbb6d6811696caafd323ffc9ea983a7bb" target="_blank"></a>BUY NOW</button>
              </li>
            </ul>
          </div>
            <div className="mob-rate d-lg-none">
                <a className="nav-link active mx-3" href="/">
                  <img src={fav} style={{height:"25px"}} alt="" /> ${price}
                </a>
            </div>
        </div>
      </nav>
    </div>
  );
}
