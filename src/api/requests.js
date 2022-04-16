import Web3 from "web3"
import { contract } from "./core"

export const getRequestsApi = async() => {
    return await contract.methods.getRequests().call()
}

export const getRequestApi = async(id) => {
    return await contract.methods.requestsRole(id).call()
}

export const addRequestApi = async(address, type, shopAddress = "0x0000000000000000000000000000000000000000") => {
    return await contract.methods.request(type, shopAddress).send({ from: address })
}
export const acceptRequestApi = async(address, requestId) => {
    await contract.methods.accRequest(requestId).send({ from: address })
}

export const cancelRequestApi = async(address, requestId) => {
    await contract.methods.cancelRequest(requestId).send({ from: address })
}