import React from 'react'
import community from '../Images/community.png'
import utility from '../Images/utility.png'
import based from '../Images/based.png'

export default function Keyfeatures() {
    return (
        <div id='keyfeature-cont'>
            <div className="container d-flex py-5 justify-content-around">
                <div className="card" style={{width: "18rem"}}>
                    <img src={community} style={{filter:"none"}} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">STRONG COMMUNITY</h5>
                    </div>
                </div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={utility} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">AWESOME UTILITY</h5>
                    </div>
                </div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={based} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">STRONG COMMUNITY</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
