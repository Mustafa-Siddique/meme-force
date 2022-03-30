import { getWeb3 } from './web3'
import Web3 from 'web3';
import { EnvAdd } from './Addresses'
const etherumprovider = new Web3.providers.HttpProvider(
  process.env.REACT_APP_RPCURL,
  {
    timeout: 10000,
  }
);

export const loginProcess = async () => {
  try {
    await window.ethereum.enable()
    //   return await getAccount();
  } catch (err) {
    // console.log('check chain error:', err)
    // window.location.replace('/')
  }
}

export const getChain = async () => {
  let web3 = getWeb3()
  const chainId = await web3.eth.getChainId()
  return chainId
}

export const CheckChain = async () => {
  let web3 = getWeb3()
  const chainId = await web3.eth.getChainId()
  if (parseInt(chainId) == EnvAdd.React_App_chain_Id) {
    return true
  } else {
    return false
  }
}

export const getAccount = async () => {
  let web3 = getWeb3()
  const account = await web3.eth.getAccounts()
  return account[0]
}

export const getContract = async (abi, address) => {
  let web3 = getWeb3()
  console.log(web3)
  const customeContract = new web3.eth.Contract(abi, address)
  return customeContract
}

export const getContract2 = async (abi, address) => {
  let web3 = getWeb3()
  const customeContract = new web3.eth.Contract(abi, address)
  return customeContract
}

export const WebUtils = (amounts) => {
  try {
    const unit = getWeb3()
    const amount = unit.utils.toWei(amounts.toString(), 'ether')
    return amount
  } catch (e) {
    console.log(e)
  }
}

export const toBNB = (amounts) => {
  try {
    const unit = getWeb3()
    const amount = unit.utils.toBN(amounts.toString(), 'ether')
    return amount
  } catch (e) {
    console.log(e)
  }
}

export const getFasFee = () => {
  try {
    const unit = getWeb3()
    const amount = unit.eth.getGasPrice()
    return amount
  } catch (e) {
    console.log(e)
  }
}

export const network_version = () => {
  try {
    const web3 = getWeb3()
    web3.eth.net.getNetworkType().then(console.log)
  } catch (e) {
    console.log(e)
  }
}
