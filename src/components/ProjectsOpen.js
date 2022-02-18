import React, { useState, useEffect }  from 'react'
import logoBg from '../Images/anim-icon.png'
import { FaTelegramPlane, FaTwitter, FaGlobe } from "react-icons/fa";
import Countdown from './Countdown';
import {Link} from 'react-router-dom'

export default function ProjectsOpen() {

  const countdownDate = "2022-02-28 17:00";
  const [
    {
      expired,
      values: { days, hours, minutes, seconds }
    },
    setResult
  ] = useState(() => Countdown(countdownDate));

  useEffect(() => {
    if (expired) return undefined;
    const intervalId = setInterval(
      () => setResult(Countdown(countdownDate)),
      1000
    );
    return () => {
      clearInterval(intervalId);
    };
  }, [expired]);

  /* Array to be fetched */
  const projectInfo = [
    { logo: "https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", name: "Meme Force", website: "#", twitter: "#", tg: "#", summary: "lorem ipsum", swapRate: "12546", cap: "200000", access: "WL", sc: "500", hc: "700" },
    { logo: "https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", name: "Meme Force", website: "#", twitter: "#", tg: "#", summary: "lorem ipsum", swapRate: "12546", cap: "200000", access: "WL", sc: "500", hc: "700" },
    { logo: "https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", name: "Meme Force", website: "#", twitter: "#", tg: "#", summary: "lorem ipsum", swapRate: "12546", cap: "200000", access: "WL", sc: "500", hc: "700" },
    { logo: "https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", name: "Meme Force", website: "#", twitter: "#", tg: "#", summary: "lorem ipsum", swapRate: "12546", cap: "200000", access: "WL", sc: "500", hc: "700" },
    { logo: "https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", name: "Meme Force", website: "#", twitter: "#", tg: "#", summary: "lorem ipsum", swapRate: "12546", cap: "200000", access: "WL", sc: "500", hc: "700" },
    { logo: "https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", name: "Meme Force", website: "#", twitter: "#", tg: "#", summary: "lorem ipsum", swapRate: "12546", cap: "200000", access: "WL", sc: "500", hc: "700" },
  ]

  const renderOwner = (projectInfo, index) => {
    return (
      <div className="col-md-3 rounded px-3 py-3 mx-2 my-3" key={index}>
        <div className="card-head">
          <div className="logo me-3">
            <img src={logoBg} alt="" id="brand-bg" />
            <img src={projectInfo.logo} id="brand" alt="" />
          </div>
          <div className="head-content">
            <h3><Link className='text-light text-decoration-none' to="/launchpad/project">{projectInfo.name}</Link></h3>
            <div id="social-cards">
              <a href="#"><span><FaGlobe /></span></a>
              <a href="#"><span><FaTwitter /></span></a>
              <a href="#"><span><FaTelegramPlane /></span></a>
            </div>
            <div className="sale-stat">&bull; Open</div>
            <div className="chain">BNB</div>
          </div>
        </div>
        <div className="card-body">
          <p className='fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, optio doloribus reiciendis velit cupiditate sapiente eius animi vel ullam quo? Accusamus rem, magnam aut non corrupti nobis porro ducimus accusantium?</p>
          <div className="rate">
            <p>Swap rate</p>
            <span>1 BNB = 200 MEMEFORCE</span>
          </div>
          <div className="tokenomics d-flex justify-content-between mt-2">
            <div className="cap">
              <p>Cap</p>
              <span>300k</span>
            </div>
            <div className="schc">
              <p>SC/HC</p>
              <span>250/350</span>
            </div>
            <div className="access text-center">
              <p>Access</p>
              <span>WL</span>
            </div>
          </div>
          <div className="raised mt-3">
            <p>Progress:</p>
            <div className="progress" style={{height:"10px"}}>
              <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className='justify-content-between d-flex'>
              <span>Funds Raised:</span><span> 245 BNB</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div id='openProject-cont'>
      <div className="container text-center my-5">
        <h1>PROJECTS OPEN NOW</h1>
        <div className="countDown h3">
          {expired ? "It's the time" : `${days}D ${hours}H ${minutes}M ${seconds}s`}
        </div>
      </div>
      <div className='row'>
        {projectInfo.map(renderOwner)}
      </div>
    </div>
  )
}