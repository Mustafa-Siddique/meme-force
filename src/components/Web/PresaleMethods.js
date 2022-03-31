import { PresaleABI } from './ABI/Presale_MainNet'
import { getAccount, getContract } from './web3_methods'
import { getWeb3 } from './web3';
import Web3 from 'web3';
const etherumprovider = new Web3.providers.HttpProvider(
    "https://bsc-dataseed.binance.org/",
    {
      timeout: 10000,
    }
  );
  

// export const PresaleContract =async(Address)=>{
//     const contract = await getContract(PresaleABI, Address)
//     return contract;
// }

export const PresaleDetails = async(address)=>{
    try{
    const contract = await getContract(PresaleABI, address);
    const data = await contract.methods.getPresaleInfo().call();
    return data;
    }
    catch(e){
        console.log(e)
    }
}

export const endtime = async(address)=>{
    try{
    const contract = await getContract(PresaleABI, address);
    const data = await contract.methods.endTime().call();
    return data;
    }
    catch(e){
        console.log(e)
    }
}

export const startime = async(address)=>{
    try{
    const contract = await getContract(PresaleABI, address);
    const data = await contract.methods.startTime().call();
    return data;
    }
    catch(e){
        console.log(e)
    }
}

export const transfertoPayee = async(address,payee)=>{
    try{
    const contract = await getContract(PresaleABI, address);
    const data = await contract.methods.transferFunds().send({from: await getAccount()});
    return data;
    }
    catch(e){
        console.log(e)
    }
}

export const Description =async(address)=>{
    try{
    const contract = await getContract(PresaleABI, address);
    const data = await contract.methods.projectDescription().call();
    return data;
    }
    catch(e){
        console.log(e)
    }
}

export const getPayee = async(address)=>{
    try{
    const contract = await getContract(PresaleABI, address);
    const data = await contract.methods._payee().call();
    return data;
    }
    catch(e){
        console.log(e)
    }
}

export const refundAmount = async(address)=>{
    try{
    const contract = await getContract(PresaleABI, address);
    const data = await contract.methods.claimRefund().send({from:await getAccount()});
    return data;
    }
    catch(e){
        console.log(e)
    }
}

export const isCancelled = async(address)=>{
    try{
    const contract = await getContract(PresaleABI, address);
    const data = await contract.methods.cancelled().call();
    return data;
    }
    catch(e){
        console.log(e)
    }
}




export const setVesting = async(address,_daysPerVest,_percentPerVest,_initialClaimPercentage)=>{
    try{
    const contract = await getContract(PresaleABI, address);
    const data = await contract.methods.setVestingParameters(_daysPerVest,_percentPerVest,_initialClaimPercentage).send({from: await getAccount()});
    return data;
    }
    catch(e){
        console.log(e)
    }
}


export const whitelistedpresale =async(address)=>{
    try{
        const contract = await getContract(PresaleABI, address);
        const data = await contract.methods.isWhiteListEnabled().call();
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
export const amountclaimed = async(address)=> {
    try{
    const contract = await getContract(PresaleABI, address);
    const data = await contract.methods.claimed(await getAccount()).call();
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
        const web3 = new Web3(etherumprovider);
        const balance = await web3.eth.getBalance(await getAccount())
        return Number(balance/10**18).toFixed(2)
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

  export const IsPresaleFinilised = async(address) => {
    try{
        const contract = await getContract(PresaleABI, address);
        const result = await contract.methods.totalRaised();
        return result;
    }
    catch(e){
        console.log(e)
    }
  }

  export const PresaleStringData = async(address) => {
    try{
        const contract = await getContract(PresaleABI, address);
        const result = await contract.methods.getProjectInfo().call();
        return result;
    }
    catch(e){
        console.log(e)
    }
  }

  export const ConfigurePreslae = async(address,isWhiteListEnabled,logo,artical,telegram,website,twitter,reddit,github,instagram,_facebook) => {
    try{
        const contract = await getContract(PresaleABI, address);
        const result = await contract.methods.configurePresale(isWhiteListEnabled,logo,artical,telegram,website,twitter,reddit,github,instagram,_facebook).send({from: await getAccount()});
        return result;
    }
    catch(e){
        console.log(e)
    }
  }

  export const getOperator = async(address) => {
    try{
        const contract = await getContract(PresaleABI, address);
        console.log('presale contract',contract)
        const result = await contract.methods.operator().call();
        return result;
    }
    catch(e){
        console.log(e)
    }
  }

  export const AddToWhitelist = async(address,addressess) => {
    try{
        const contract = await getContract(PresaleABI, address);
        const result = await contract.methods.addToWhitelist(addressess).send({from: await getAccount()});
        return result;
    }
    catch(e){
        console.log(e)
    }
  }
  export const RemoveToWhitelist = async(address,useraddress) => {
    try{
        const contract = await getContract(PresaleABI, address);
        const result = await contract.methods.removeFromWhitelist(useraddress).send({from: await getAccount()});
        return result;
    }
    catch(e){
        console.log(e)
    }
  }

  export const EditPresaleTime = async(address,starttime,endtime) => {
    try{
        const contract = await getContract(PresaleABI, address);
        const result = await contract.methods.editPresaleTiming(starttime,endtime).send({from: await getAccount()});
        return result;
    }
    catch(e){
        console.log(e)
    }
  }

  export const CancelPresale = async(address) => {
    try{
        const contract = await getContract(PresaleABI, address);
        const result = await contract.methods.cancelPresale().send({from: await getAccount()});
        return result;
    }
    catch(e){
        console.log(e)
    }
  }

  export const ClaimOperatorFunds = async(address) => {
    try{
        const contract = await getContract(PresaleABI, address);
        const result = await contract.methods.claimOperatorFunds().send({from: await getAccount()});
        return result;
    }
    catch(e){
        console.log(e)
    }
  }

  export const finalisePresale = async(address) => {
    try{
        const contract = await getContract(PresaleABI, address);
        const result = await contract.methods.finalize(true).send({from: await getAccount()});
        return result;
    }
    catch(e){
        console.log(e)
    }
  }

  export const SwitchToPublic = async(address) => {
    try{
        const contract = await getContract(PresaleABI, address);
        const result = await contract.methods.switchToPublicPresale(true).send({from: await getAccount()});
        return result;
    }
    catch(e){
        console.log(e)
    }
  }