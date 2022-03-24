import { PresaleABI } from './ABI/Presale'
import { getAccount, getContract } from './web3_methods'
import { getWeb3 } from './web3';


// export const PresaleContract =async(Address)=>{
//     const contract = await getContract(PresaleABI, Address)
//     return contract;
// }

export const PresaleDetails = async(address)=>{
    try{
    const contract = await getContract(PresaleABI, address);
    console.log("Presale contract", contract)
    const data = await contract.methods.getPresaleInfo().call();
    return data;
    }
    catch(e){
        console.log(e)
    }
}

export const CheckForWhiteAccount = async(address)=>{
    try{
    const contract = await getContract(PresaleABI, address);
    const data = await contract.methods.isWhiteListed(await getAccount()).call();
    return data;
    }
    catch(e){
        console.log(e)
    }
}

export const BuyTokens = async(address,amount)=> {
    try{
    const contract = await getContract(PresaleABI, address);
    const data = await contract.methods.swap().send({
        from: await getAccount(),
        value: amount * (10**18)
    })
    return data;
    }
    catch(e){
        console.log(e)
    }
}

export const Owed = async(address)=> {
    try{
    const contract = await getContract(PresaleABI, address);
    const data = await contract.methods.owed(await getAccount()).call();
    return data
    }
    catch(e){
        console.log(e)
    }
}

export const canclaim = async(address) => {
    try{
    const contract = await getContract(PresaleABI, address);
    const result = await contract.methods.canClaim().call();
    return Boolean(result);
    }
    catch(e){
        console.log(e)
    }
  }
  
  export const claimnow = async(address) => {
    try{
    const contract = await getContract(PresaleABI, address);
    const result = await contract.methods.claim().send({from: await getAccount()});
    return result;
    }
    catch(e){
        console.log(e)
    }
  }
  export const bnbBalance = async() => {
    try{
        const web3 = getWeb3();
        const balance = await web3.eth.getBalance(await getAccount());
        return (balance/10**18).toFixed(2);
    }
    catch(e){
        console.log(e)
    }
  }

  export const TotalRaised = async(address) => {
    try{
        const contract = await getContract(PresaleABI, address);
        const result = await contract.methods.totalRaised();
        return result;
    }
    catch(e){
        console.log(e)
    }
  }