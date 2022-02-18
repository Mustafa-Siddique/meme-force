import React from 'react'

export default function Roadmap() {
  return (
    <div id='roadmap-cont' className='py-5'>
        <div className="container text-center">
                <h2>MEMEFORCE ROADMAP</h2>
            </div>
            <div className="row mt-5 justify-content-around mx-auto">
                    <div className='phase border col py-3 px-4 rounded'>
                        <div className="card-head">
                            <h2>Phase 1</h2>
                        </div>
                        <div className="card-body border-top">
                            <ul>
                                <li>Deploy Smart Contract</li>
                                <li>Launch on Pancakeswap</li>
                                <li>Listing on Uniswap</li>
                                <li>Heavy post launch and ongoing marketing</li>
                                <li>Release Whitepaper V1</li>
                                <li>Bridge implementation</li>
                                <li>CoinGecko / CoinMarketCap listing</li>
                                <li>Giveaway & Contests</li>
                            </ul>
                        </div>
                    </div>
                    <div className='phase border col py-3 px-4 rounded'>
                        <div className="card-head">
                            <h2>Phase 2</h2>
                        </div>
                        <div className="card-body border-top">
                            <ul>
                                <li>Huge Marketing Campaign</li>
                                <li>Smart Contract audit</li>
                                <li>P2E Beta </li>
                                <li>Launchpad launch</li>
                                <li>Merchandise</li>
                            </ul>
                        </div>
                    </div>
                    <div className='phase border col py-3 px-4 rounded'>
                        <div className="card-head">
                            <h2>Phase 3</h2>
                        </div>
                        <div className="card-body border-top">
                            <ul>
                                <li>Large influencer marketing</li>
                                <li>Roadmap update</li>
                                <li>CEX listings</li>
                                <li>Staking and Farming</li>
                                <li>NFT collection</li>
                                <li>P2E game release</li>
                                <li>Further ecosystem development</li>
                            </ul>
                        </div>
                    </div>
            </div>
    </div>
  )
}
