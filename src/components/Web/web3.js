import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
let httpProvider = null
var provider = new WalletConnectProvider({
  rpc: {
    56: 'https://bsc-dataseed1.ninicoin.io',
    97: 'https://data-seed-prebsc-1-s1.binance.org:8545/'
    // ...
  },
  bridge: 'https://bridge.walletconnect.org',
})

export const SelectWallet = async () => {
  let data = undefined
    try{
      if (window.WC) {
        data = await provider.enable();
        console.log(data)
        httpProvider = provider
        if(data){
          window.provide = true
          console.log(httpProvider,data,window.provide)
        }
        return data[0];
      }
      if(window.MM){
        httpProvider = window.ethereum
        if(httpProvider){
          window.provide = true
        }
      }
    }
    catch(e){
      //
    }

}
export const DisconnectWallet =async()=>{
  if (window.WC) {
    await provider.disconnect();
  }
}

const getWeb3 = () => {
  return new Web3(httpProvider);
};
export { getWeb3 };