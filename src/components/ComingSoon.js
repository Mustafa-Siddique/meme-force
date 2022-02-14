import React from 'react'
import cg from '../Images/coingecko.webp'
import cmc from '../Images/cmc.svg'

export default function ComingSoon() {
  return (
    <div id='coming-cont'>
        <div className="container mb-5">
            <h2>COMING SOON!</h2>
        </div>
        <div style={{width:"90%", margin:"auto", overflow:"hidden"}} className="row justify-content-center" id="soon">
            <div className="col-lg-3"><img src={cg} id="cg" alt="" /></div>
            <div className="col-lg-3"><img src={cmc} id="cmc" alt="" /></div>
        </div>
    </div>
  )
}
