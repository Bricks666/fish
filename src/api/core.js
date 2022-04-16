import Web3 from "web3"
import { abi, address } from "../data"

export let web3 = null
export let contract = null

export const initApi = () => {
   web3 = new Web3("ws://localhost:8545") 
   contract = new web3.eth.Contract(abi, address)
}

export const unlockAccount = async(address) => {
    await web3.eth.personal.unlockAccount(address, "0000", 0)
}
export const lockAccount = async(address) => {
    await web3.eth.personal.lockAccount(address)
}

export const subscribe = ({ event, callback, filter }) => {
    return contract.events[event]({ filter }, (error, data) => {
        
        if(!error) {
            callback(data.returnValues)
        }
    })
}