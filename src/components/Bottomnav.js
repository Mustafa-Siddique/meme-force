import React from "react";
import home from '../Images/home-alt.svg'
import buybbt from '../Images/square-vice-versa-alt.svg'
import trapsheet from '../Images/sim.svg'
import safedefi from '../Images/rocket.png'
import chart from '../Images/chart.png'
import {Link} from 'react-router-dom'

export default function Bottomnav() {
  return (
    <div className="d-lg-none bottomNav container-fluid">
      <nav>
        <div className="bottomBtn d-flex justify-content-center">
          <button className="btn">
            <Link id="mob-link" to="/"><img src={home} alt=""/><br/>Home</Link>
          </button>
          <button className="btn">
          <Link id="mob-link" to="/launchpad"><img src={safedefi} style={{height:"27px", filter:"invert(1)"}} alt=""/><br/>Launchpad</Link>
          </button>
          <button className="btn">
            <Link to = "/" id="mob-link" target = "_blank" rel="noreferrer"><img src={trapsheet} alt=""/><br/>Whitepaper</Link>
          </button>
          <a href="/" id="mob-link" target = "_blank" rel="noreferrer"><button className="btn">
            <img src={buybbt} alt=""/><br/>Buy Now
          </button></a>
          <a href="/" id="mob-link" target = "_blank" rel="noreferrer"><button className="btn">
            <img src={chart} style={{height:"27px", filter:"invert(1)"}} alt=""/><br/>Chart
          </button></a>
        </div>
      </nav>
    </div>
  );
}
