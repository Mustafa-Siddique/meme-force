import React from 'react'
import cg from '../Images/coingecko.png'
import cmc from '../Images/cmc.png'

export default function ComingSoon() {
  return (
    <div id='coming-cont'>
        <div className="container">
            <h2>COMING SOON!</h2>
        </div>]
        <div style={{width:"90%", margin:"auto",}} className="row justify-content-center" id="soon">
            <div className="col-lg-3"><img src={cg} alt="" /></div>
            <div className="col-lg-3"><img src={cmc} alt="" /></div>
        </div>
    </div>
  )
}
