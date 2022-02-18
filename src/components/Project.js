import React from 'react'
import logoBg from '../Images/anim-icon.png'

export default function Project() {
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-5">
                    <div className="prohect-head">
                        <div className="logo">
                            <img src="https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                            <img src={logoBg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
