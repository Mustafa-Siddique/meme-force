import React from 'react'
import {SiBinance, SiEthereum} from 'react-icons/si'

export default function Memeforce() {
    return (
        <div id='memeforce-cont' className='py-5'>
            <div className="container text-center mb-5">
                <h2>WHAT IS MEMEFORCE?</h2>
                <p>MemeForce is the next big cross-chain launchpad project, available on the Binance SmartChain and Ethereum Mainnet.<br />The launchpad will have a gold, silver and bronze requirement toget access to future launches. To participate in different tiers of upcoming launches on the MemeForce Launchpad, you need to hold a certain amount of MemeForce tokens. Our upcoming P2E-game will have earnable NFTs and an all-in-one staking platform to generate passive income.</p>
            </div>
            <div className="container text-center">
                <h2>WHEN WILL MEMEFORCE BE LAUNCHING?</h2>
                <p>MemeForce will be available on the Binance SmartChain (BEP-20) and on the Ethereum Mainnet (ERC-20)</p>
            </div>
            <div className="row mt-5 justify-content-around">
                    <div className='bsc-launch border col py-3 px-4 rounded'>
                        <div className="card-head">
                            <h2>BSC LAUNCH</h2>
                        </div>
                        <div className="card-body border-top">
                            <p>PRESALE<br />MAR 10th 10PM UTC<br />SC/HC 200/400 BNB</p>
                            <p>LAUNCH<br />MAR 11th 10PM UTC</p>
                        </div>
                        <SiBinance id='card-logo'/>
                    </div>
                    <div className='bsc-launch border col py-3 px-4 rounded'>
                        <div className="card-head">
                            <h2>ETH LAUNCH</h2>
                        </div>
                        <div className="card-body border-top">
                            <p>STEALH LAUNCH WITHIN 24 HRS</p>
                            <p>AFTER THE BSC LAUNCH</p>
                        </div>
                        <SiEthereum id='card-logo'/>
                    </div>
            </div>
        </div>
    )
}
