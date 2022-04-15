import { contract } from "./core"

export const getShopAddressesApi = async() => {
    return await contract.methods.getShops().call()
}
export const getShopApi = async(address) => {
    return await contract.methods.Shops(address).call()
}

export const addShopApi = async(address, shopAddress, login, name, city)  => {
    return await contract.methods.addShop(shopAddress, login, name, city).send({ from: address })
}

export const deleteShopApi = async(address, shopAddress) => {
    return await contract.methods.deleteShop(shopAddress).send({ from: address })
}