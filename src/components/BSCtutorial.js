import React from 'react'

export default function BSCtutorial() {
  return (
    <div id='bsctut-cont'>
        <div className="container">
            <h2>How to Buy MemeForce on BSC?</h2>
        </div>
        <div className="row">
            <div className="col-lg-6">
                <h3>Download &amp; setup MetaMask or TrustWallet</h3>
                <p>Download MetaMask, a crypto wallet in the form of a browser extension, and TrustWallet an app for your phone. After that you will have to add the Binance Smart Chain to your network-list.</p>
                <h3>Buy and send BNB to MetaMask</h3>
                <p>Buy BNB on an exchange - i.e. Binance, Kraken, Coinbase etc - Transfer the tokens to your MetaMask wallet address. BEP-20 addresses start with a "0x".</p>
                <h3>Head on to PancakeSwap</h3>
                <p>Head on over to PancakeSwap and use the Contract Address to find the Token. Set the slippage tolerance to 20 percent - but could be higher depending on how much demand there is.</p>
                <h3>View and HODL</h3>
                <p>Swap BNB for the Token. Now you need to add it to your MetaMask or Trust Wallet to view your current holdings. Lastly, HODL!</p>
            </div>
            <div className="col-lg-6" style={{position:"relative"}}>
                <iframe src="https://www.youtube.com/embed/7f9eHmJy86s" title="BSC Tutorial" frameBorder="0"></iframe>
            </div>
        </div>
    </div>
  )
}
